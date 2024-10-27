
export const getDias = async ()=>{
    const fetchDias = async () => {
        try {
          const resposta = await fetch("http://localhost:8080/api/dia_semana");
          if (!resposta.ok) {
            throw new Error(`HTTP error! status: ${resposta.status}`);
          }
          const dadosJson = await resposta.json();
          if (dadosJson) {
            return dadosJson;
          } else {
            throw new Error("Formato de dados inesperado");
          }
        } catch (erro) {
          console.error("Erro ao buscar os dias da semana", erro);
          setErro(erro.message);
        }
      };
  
      return await fetchDias();
}


export const getTurnos = async ()=>{
  try {
    const resposta = await fetch("http://localhost:8080/api/turno");
    if (!resposta.ok) {
      throw new Error(`HTTP error! status: ${resposta.status}`);
    }
    const dadosJson = await resposta.json();
    if (dadosJson) {
      return dadosJson;
    } else {
      throw new Error("Nada retornado");
    }
  } catch (erro) {
    console.error("Erro ao buscar os Turnos", erro);
    setErro(erro.message);
  }
};

export const insertDisponibilidade= async (objectDisponibilidade) => {
  try {
    const resposta = await fetch("http://localhost:8080/api/disponibilidade", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(objectDisponibilidade), 
    });

    if (!resposta.ok) {
      throw new Error(`HTTP error! status: ${resposta.status}`);
    }

    const dadosJson = await resposta.json();
    return dadosJson;

  } catch (erro) {
    console.error("Erro ao inserir os Turnos", erro);
    setErro(erro.message);
  }
};
