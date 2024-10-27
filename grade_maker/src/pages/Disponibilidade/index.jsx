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
import { useEffect, useState } from "react";
import React from "react";
import imagemPrincipal from "../../assets/ImagemFigma.png";
import FormDisponibilidade from "../../components/Forms/FormDisponibilidade";
import { getDias, getTurnos } from "./service";

export default function Disponibilidade() {
  const [dias, setDias] = useState([]);
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const fetchDias = async () => {
      try {
        const resultado = await getDias();
        setDias(resultado.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDias();
  }, []);

  useEffect(() => {
    const fetchTurnos = async () => {
      try{
        const resultado = await getTurnos();
        setTurnos(resultado.data)
      }catch(error){
        console.log(error)
      }
    };
    fetchTurnos();
  }, []);

  const inicialDisponibilidade = {
    "segunda-feira": { manhã: true, tarde: false, noite: false },
    "terça-feira": { manhã: false, tarde: false, noite: false },
  };

  const [availability, setAvailability] = useState(inicialDisponibilidade);

  const handleFormChange = (field, value) => {
    console.log(`${field}: ${value}`);
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <Heading as="h1" className="page-title">
          Disponibilidade do professor
        </Heading>
        <FormDisponibilidade
          nomeProfessor="João da Silva"
          semestre="5"
          ano="2024"
          disponibilidade={availability}
          onChange={(field, value) => handleFormChange(field, value)}
          onDisponibilidadeChange={(newDisponibilidade) =>
            setAvailability(newDisponibilidade)
          }
          days={dias}
          turnos={turnos}
        />
      </div>
    </div>
  );
}
