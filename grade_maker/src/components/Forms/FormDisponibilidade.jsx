import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Image,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import React from "react";
import imagemPrincipal from "../../assets/ImagemFigma.png";
import {
  deleteteByIdProf,
  getDispProf,
  insertDisponibilidade,
} from "../../pages/Disponibilidade/service";

// Componente principal para o formulário de professor
const FormDisponibilidade = ({
  nomeProfessor = "",
  semestre = "",
  ano = "",
  PrevDisponibilidade = [],
  onChange,
  onDisponibilidadeChange,
  days = [],
  turnos = [],
}) => {
  const toast = useToast();
  const [disponibilidade, setDisponibilidade] = useState([]);

  const handleToggle = (dayId, periodId) => {
    setDisponibilidade((prevDisponibilidade) => ({
      ...prevDisponibilidade,
      [dayId]: {
        ...prevDisponibilidade[dayId],
        [periodId]: !prevDisponibilidade[dayId]?.[periodId],
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selecionados = Object.keys(disponibilidade).flatMap((dayId) => {
      const turnosSelecionados = Object.keys(disponibilidade[dayId])
        .filter((periodId) => disponibilidade[dayId][periodId])
        .map((periodId) => ({ dayId, periodId }));
      return turnosSelecionados;
    });

    selecionados.map((disp) => {
      const objectDisponibilidade = {
        professorId: 39,
        diaSemanaId: disp.dayId,
        turnoId: disp.periodId,
        ano: e.target.elements.anoInput.value,
        semestre: e.target.elements.semestreInput.value,
      };
      try {
        deleteteByIdProf(objectDisponibilidade.professorId);
        insertDisponibilidade(objectDisponibilidade);
      }catch(error){
        toast({
          title: "Operação realizada com sucesso.",
          description: error,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right", // Define a posição do toast
        });
      }


    });
    toast({
      title: "Sucesso!",
      description: 'Disponibilidade atribuida com sucesso',
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right", // Define a posição do toast
    });


   
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box p={5}>
        <Grid templateColumns="2fr 1fr" gap={6}>
          {/* Coluna 1: Formulário */}
          <Box>
            <Flex align="center" justify="space-between" mb={4}>
              <Box>
                <Text mb={2}>Nome do professor</Text>
                <Input
                  placeholder="Nome do professor"
                  width="400px"
                  _focus={{
                    borderColor: "purple",
                    boxShadow: "0 0 0 1px #805AD5", // Sombra roxa ao redor do input
                  }}
                />
              </Box>
              <Box>
                <Text mb={2}>Semestre</Text>
                <Select
                  placeholder="Semestre"
                  id="semestreInput"
                  _focus={{
                    borderColor: "purple",
                    boxShadow: "0 0 0 1px #805AD5", // Sombra roxa ao redor do input
                  }}
                >
                  <option disabled hidden value="">
                    Semestre
                  </option>
                  <option value={1}>Primeiro</option>
                  <option value={2}>Segundo</option>
                </Select>
              </Box>
              <Box>
                <Text mb={2}>Ano</Text>
                <Input
                  _focus={{
                    borderColor: "purple",
                    boxShadow: "0 0 0 1px #805AD5", // Sombra roxa ao redor do input
                  }}
                  placeholder="Ano"
                  width="100px"
                  defaultValue={ano}
                  id="anoInput"
                />
              </Box>
            </Flex>

            <Text mb={2}>Disponibilidade</Text>
            <Grid templateColumns={`repeat(${days.length + 1}, 1fr)`} gap={2}>
              <Box></Box>
              {days.map((day) => (
                <Text key={day.nome} textAlign="center" fontSize="sm">
                  {day.nome}
                </Text>
              ))}
              {turnos.map((period) => (
                <React.Fragment key={period.id}>
                  <Text>{period.nome}</Text>
                  {days.map((day) => (
                    <Button
                      key={`${day.id}-${period.id}`}
                      colorScheme={
                        disponibilidade[day.id]?.[period.id] ? "purple" : "gray"
                      }
                      border="1px solid black"
                      onClick={() => handleToggle(day.id, period.id)}
                    ></Button>
                  ))}
                </React.Fragment>
              ))}
            </Grid>
          </Box>

          {/* Coluna 2: Imagem */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              src={imagemPrincipal}
              alt="Professor working with data"
              boxSize="400px"
            />
          </Box>
        </Grid>
        <Flex justify={"flex-end"} mt={4} pr={320}>
          <Box mr={"right"} width={"100px"}>
            <Button
              type="submit"
              width={"100%"}
              color={"white"}
              colorScheme="purple"
              _focus={{
                boxShadow:
                  "0 0 1px 2px rgba(173, 216, 230, .75), 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              _hover={{
                backgroundColor: "purple", // Cor de fundo ao passar o mouse
                color: "white", // Cor do texto ao passar o mouse
                transform: "scale(1.1)", // Aumenta levemente o botão ao passar o mouse
              }}
            >
              Enviar
            </Button>
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default FormDisponibilidade;
