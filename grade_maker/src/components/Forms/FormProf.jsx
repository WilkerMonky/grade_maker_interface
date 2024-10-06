import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from '@chakra-ui/react';
import '../Forms/Form.css';

// Componente principal para o formulário de professor
const FormProf = ({ isOpen, onClose, professor = null, onProfessorAdded }) => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
  });
  // Hook do Chakra UI para exibir notificações
  const toast = useToast();

  // Efeito para buscar dados do professor quando estiver editando
  useEffect(() => {
    if (professor) {
      setFormData({ nome: professor.nome });
    } else {
      setFormData({ nome: '' });
    }
  }, [professor]);

  // Função para lidar com mudanças no input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Limita o input a 50 caracteres
    setFormData({ ...formData, [name]: value.slice(0, 50) });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async () => {
    // Verifica se o nome está vazio
    if (!formData.nome.trim()) {
      toast({
        title: 'Erro',
        description: 'O nome do professor não pode estar vazio.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      if (professor) {
        // Update an existing professor
        await axios.put(`http://localhost:8080/api/professor/${professor.id}`, formData);
        toast({
          title: 'Sucesso',
          description: 'Professor atualizado com sucesso.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        // Create a new professor
        await axios.post('http://localhost:8080/api/professor', formData);
        toast({
          title: 'Sucesso',
          description: 'Professor cadastrado com sucesso.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
      if (onProfessorAdded) {
        onProfessorAdded();
      }
      onClose();
    } catch (error) {
      console.error('Erro ao salvar professor:', error);
      toast({
        title: 'Erro',
        description: 'Não foi possível salvar os dados do professor.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // New function to handle cancellation
  const handleCancel = () => {
    setFormData({ nome: '' });
    onClose();
  };

  // Renderização do componente
  return (
    <Modal isOpen={isOpen} onClose={handleCancel} className="form-prof-modal">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{professor ? 'Editar Professor' : 'Cadastrar Professor'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                maxLength={50}
                className="form-prof-input"
              />
            </FormControl>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button className="form-prof-button primary" mr={3} onClick={handleSubmit}>
            {professor ? 'Atualizar' : 'Salvar'}
          </Button>
          <Button className="form-prof-button secondary" onClick={handleCancel}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FormProf;
