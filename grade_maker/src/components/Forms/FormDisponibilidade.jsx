import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import imagemPrincipal from "../../assets/ImagemFigma.png";

// Componente principal para o formulário de professor
const FormDisponibilidade = ({
  nomeProfessor = "",
  semestre = "",
  ano = "",
  disponibilidade = {},
  onChange,
  onDisponibilidadeChange,
  days = [],
  turnos =[]
}) => {


  const handleToggle = (day, period) => {
    const newDisponibilidade = {
      ...disponibilidade,
      [day]: {
        ...disponibilidade[day],
        [period]: !disponibilidade[day]?.[period],
      },
    };
    onDisponibilidadeChange(newDisponibilidade); // Passa a nova disponibilidade via props
  };

  return (
    <form action="">
      <Box p={5}>
        <Grid templateColumns="2fr 1fr" gap={6}>
          {/* Coluna 1: Formulário */}
          <Box>
            <Flex align="center" justify="space-between" mb={4}>
              <Box>
                <Text mb={2}>Nome do professor</Text>
                <Input placeholder="Nome do professor" width="400px" />
              </Box>
              <Box>
                <Text mb={2}>Semestre</Text>
                <Input placeholder="semestre" width="100px" />
              </Box>
              <Box>
                <Text mb={2}>Ano</Text>
                <Input placeholder="Ano" width="100px" />
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
                        disponibilidade[day.nome]?.[period.nome] ? "blue" : "gray"
                      }
                      border="1px solid black"
                      onClick={() => handleToggle(day.nome, period.nome)}
                    >
                      {period.nome}
                    </Button>
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
      </Box>
    </form>
  );
};

export default FormDisponibilidade;
