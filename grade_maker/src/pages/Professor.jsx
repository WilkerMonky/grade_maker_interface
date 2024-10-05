import React, { useState } from "react";
import { Center, Button } from "@chakra-ui/react";
import TableProf from "../components/TableProf";
import FormProf from "../components/FormProf";

function Professor() {
  // Estado para controlar a visibilidade do formulário
  const [showForm, setShowForm] = useState(false);

  // Função para alternar a visibilidade do formulário
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Center>
        <h1 style={{ marginBottom: '30px' }}>Professor</h1>
      </Center>
      <Center>
        <div>
          <TableProf />
        </div>
      </Center>
      <Center>
        <Button colorScheme="teal" onClick={toggleForm} mt={4}>
          {showForm ? "Fechar Formulário" : "Abrir Formulário"}
        </Button>
      </Center>
      {showForm && (
        <Center>
          <FormProf />
        </Center>
      )}
    </div>
  );
}

export default Professor;
