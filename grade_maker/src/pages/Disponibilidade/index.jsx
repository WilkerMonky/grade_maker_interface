import React, { useEffect, useState } from "react";
import { Center } from "@chakra-ui/react";
import "./style.css";
import { getDias, getTurnos, insertDisponibilidade } from "./service";

const Disponibilidade = () => {
  const [diaSemana, setDiaSemana] = useState([]);
  const [turnos, setTurnos] = useState([]);
  const [disponibilidade, setDisponibilidade] = useState([]);

  const ano = new Date().getFullYear();

  useEffect(() => {
    const fetchDiaSemanas = async () => {
      try {
        const resultado = await getDias();
        setDiaSemana(resultado.data); // Armazena os dias da semana
      } catch (error) {
        console.log(error);
      }
    };
    fetchDiaSemanas();
  }, []);

  useEffect(() => {
    const fetchTurnos = async () => {
      try {
        const resultado = await getTurnos();
        setTurnos(resultado.data); // Armazena os turnos
      } catch (error) {
        console.log(error);
      }
    };
    fetchTurnos();
  }, []);

  // Função chamada ao marcar/desmarcar um checkbox
  const handleCheckboxChange = (diaId, turnoId, checked) => {
    if (checked) {
      // Se estiver marcado, adiciona ao array de disponibilidade
      setDisponibilidade([...disponibilidade, { diaId, turnoId }]);
    } else {
      // Se desmarcado, remove do array
      setDisponibilidade(disponibilidade.filter(item => item.diaId !== diaId || item.turnoId !== turnoId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.anoInput.value)
    disponibilidade.map((item)=>{
       const objectDisponibilidade = {
          professorId: 12,
          diaSemanaId:item.diaId,
          turnoId:  item.turnoId,
          ano: e.target.elements.anoInput.value,
          semestre:1

       }
       insertDisponibilidade(objectDisponibilidade)
       //console.log(JSON.stringify(objectDisponibilidade))
    })
    
  };

  return (
    <div>
      <Center>
        <div className="central">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <div className="input-group">
                <label htmlFor="professor">Professor</label>
                <input type="text" className="professor" id="professorInput" value="Wilker" readOnly />
              </div>

              <div className="input-group">
                <label htmlFor="semestre">Semestre</label>
                <input type="number" className="semestre" id="semestreInput" />
              </div>

              <div className="input-group">
                <label htmlFor="ano">Ano</label>
                <input type="number" className="ano" id="anoInput" value={ano} readOnly />
              </div>
            </div>

            <div className="geralTableContainer">
              <h2 className="geralTableTitle">Disponibilidade</h2>
              <table border="1" className="MatrizDisponibilidade">
                <thead>
                  <tr>
                    <th>Day</th>
                    {turnos.map((shift, index) => (
                      <th key={index}>{shift.nome}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {diaSemana.map((day, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{day.nome}</td>
                      {turnos.map((shift, colIndex) => (
                        <td key={colIndex}>
                          <input
                            type="checkbox"
                            name={`${shift.nome}-${day.nome}`}
                            onChange={(e) =>
                              handleCheckboxChange(day.id, shift.id, e.target.checked)
                            } // Captura o id do dia e do turno e se está marcado
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </Center>
    </div>
  );
};

export default Disponibilidade;
