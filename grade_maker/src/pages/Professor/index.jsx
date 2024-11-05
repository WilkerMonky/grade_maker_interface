import React, { useEffect, useState } from "react";

import TableProf from "../../components/tables/TableProf";
import "../../components/global.css";
import { Heading } from "@chakra-ui/react";
import { Box, Flex, Text, Circle, Button } from "@chakra-ui/react";
import { getProfessor } from "./service";

const Professor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [professores, setProfessores] = useState([]);

  const handleProfessorAdded = () => {
    setRefreshKey((oldKey) => oldKey + 1);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await getProfessor();
        setProfessores(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfessores();
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Heading
          className="page-title"
          as="h2"
          fontSize="2xl"
          position="relative"
          textAlign="center"
          _after={{
            content: '""',
            display: "block",
            width: "100%",
            height: "7px",
            backgroundColor: "purple.500", // Altere a cor para o desejado
            position: "absolute",
            bottom: "-5px", // Ajuste a posição vertical
            left: 0,
          }}
        >
          Professores
        </Heading>
        <Flex justify="center" align="center" p={5}>
          <Flex
            wrap="wrap"
            maxW="1000px"
            justify="center" // Centraliza os itens
            gap={4} // Define um espaçamento fixo entre os itens
            rowGap={20} // Espaçamento vertical entre linhas
          >
            {professores.map((professor, index) => (
              <Button
                key={index}
                as="div"
                variant="unstyled"
                w={{ base: "100%", sm: "48%", md: "45%", lg: "30%" }} // Largura responsiva
                mb={4} // Espaçamento mínimo na vertical
                onClick={() =>
                  console.log(`Clicou no curso: ${professor.nome}`)
                }
              >
                <Box
                  bg="purple.800"
                  color="white"
                  p={5}
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  h="auto" // Altura automática para permitir quebra de linha
                  overflow="hidden"
                >
                  <Circle size="50px" bg="purple.500" mr={4}>
                    <Text
                      fontSize={{ base: "sm", md: "md", lg: "lg" }}
                      fontWeight="bold"
                    >
                      {professor.nome[0] + professor.nome[1]}
                    </Text>
                  </Circle>
                  <Box>
                    <Text
                      fontSize={{ base: "md", md: "lg", lg: "xl" }}
                      fontWeight="bold"
                      maxW="200px" // Limita a largura total do texto
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      display="inline-block"
                    >
                      {professor.nome}
                    </Text>
                    <Text
                      fontSize={{ base: "xs", md: "sm", lg: "md" }}
                      maxW="200px"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                      display="inline-block"
                    >
                      {professor.type}
                    </Text>
                  </Box>
                </Box>
              </Button>
            ))}
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default Professor;
