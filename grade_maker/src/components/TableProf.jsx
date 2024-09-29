import React from "react";
import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  TableCaption,
  TableContainer,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const TableProf = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const resposta = await fetch(
          "http://localhost:8080/api/professor_disciplina"
        );
        const dadosJson = await resposta.json();
        setDados(dadosJson.data);
      } catch (erro) {
        console.error("Erro ao buscar os dados:", erro);
      }
    };

    fetchDados();
  }, []);

  // Função para agrupar professores e disciplinas
  const agruparDados = (dados) => {
    const agrupados = {};

    dados.forEach((item) => {
      const professorNome = item.professor.nome;

      if (!agrupados[professorNome]) {
        agrupados[professorNome] = {
          professor: professorNome,
          disciplinas: [],
        };
      }

      agrupados[professorNome].disciplinas.push(item.disciplina.nome);
    });

    return Object.values(agrupados);
  };

  const dadosAgrupados = agruparDados(dados);

  return (
    <TableContainer style={{marginTop:'20px'}}> 
      <Table
        variant="striped"
        colorScheme="pink"
        style={{
          borderCollapse: "collapse", // Para colapsar as bordas e evitar duplas
          width: "100%", // Ocupa toda a largura do container
        }}
      >
        <TableCaption>Lista de Professores e Disciplinas</TableCaption>
        <Thead>
          <Tr>
            <Th
              style={{
                border: "0px solid #333", // Cor e espessura das bordas do cabeçalho
                padding: "10px",
                backgroundColor: '#8B02EC',
                color:'white'
            }}
            >
              Professor
            </Th>
            <Th
              style={{
                border: "0px solid #333", // Cor e espessura das bordas do cabeçalho
                padding: "10px",
                backgroundColor: '#8B02EC',
                color:'white'
              }}
            >
              Disciplinas
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {dadosAgrupados.map((item, index) => (
            <Tr key={index}>
              <Td
                style={{
                  border: "1px solid #aaa", // Cor e espessura das bordas das células
                  padding: "10px",
                }}
              >
                {item.professor}
              </Td>
              <Td
                style={{
                  border: "1px solid #aaa", // Cor e espessura das bordas das células
                  padding: "10px",
                }}
              >
                {item.disciplinas.join(", ")}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableProf;
