import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import "../tables/Table.css";
import FormCurso from '../Forms/FormCurso';

const TableCurso = () => {
  const [cursos, setCursos] = useState([]);
  const [erro, setErro] = useState(null);
  const [cursoToDelete, setCursoToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/curso");
        if (!resposta.ok) {
          throw new Error(`HTTP error! status: ${resposta.status}`);
        }
        const dadosJson = await resposta.json();
        if (Array.isArray(dadosJson)) {
          setCursos(dadosJson);
        } else if (typeof dadosJson === 'object' && dadosJson !== null) {
          const arrayCursos = Object.values(dadosJson).find(Array.isArray);
          if (arrayCursos) {
            setCursos(arrayCursos);
          } else {
            throw new Error("Não foi possível encontrar um array de cursos nos dados");
          }
        } else {
          throw new Error("Formato de dados inesperado");
        }
      } catch (erro) {
        console.error("Erro ao buscar os cursos:", erro);
        setErro(erro.message);
      }
    };

    fetchCursos();
  }, []);

  const handleDeleteClick = (id) => {
    setCursoToDelete(id);
    onOpen();
  };

  const handleDelete = async () => {
    if (cursoToDelete) {
      try {
        const resposta = await fetch(`http://localhost:8080/api/curso/${cursoToDelete}`, {
          method: 'DELETE',
        });
        if (!resposta.ok) {
          throw new Error(`Erro ao deletar curso! status: ${resposta.status}`);
        }
        // Atualiza a lista de cursos após a exclusão
        setCursos(cursos.filter(curso => curso.id !== cursoToDelete));
        onClose();
      } catch (erro) {
        console.error("Erro ao deletar o curso:", erro);
        setErro(erro.message);
      }
    }
  };

  const handleEditClick = (curso) => {
    setSelectedCurso(curso);
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setSelectedCurso(null);
  };

  const handleCursoUpdated = () => {
    // Refresh the curso list after an update
    const fetchCursos = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/curso");
        if (!resposta.ok) {
          throw new Error(`HTTP error! status: ${resposta.status}`);
        }
        const dadosJson = await resposta.json();
        if (Array.isArray(dadosJson)) {
          setCursos(dadosJson);
        } else if (typeof dadosJson === 'object' && dadosJson !== null) {
          const arrayCursos = Object.values(dadosJson).find(Array.isArray);
          if (arrayCursos) {
            setCursos(arrayCursos);
          } else {
            throw new Error("Não foi possível encontrar um array de cursos nos dados");
          }
        } else {
          throw new Error("Formato de dados inesperado");
        }
      } catch (erro) {
        console.error("Erro ao buscar os cursos:", erro);
        setErro(erro.message);
      }
    };
    fetchCursos();
  };

  return (
    <div className="page-container">
      {erro && <div className="error-message">Erro: {erro}</div>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">ID</th>
              <th className="table-header">Nome</th>
              <th className="table-header"></th>
            </tr>
          </thead>
          <tbody>
            {cursos.map((curso, index) => (
              <tr key={curso.id} className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}>
                <td className="table-cell">{curso.id}</td>
                <td className="table-cell">{curso.nome}</td>
                <td className="table-cell" style={{ textAlign: 'right' }}>
                  <Button colorScheme="blue" onClick={() => handleEditClick(curso)} mr={2}>
                    Editar
                  </Button>
                  <Button colorScheme="red" onClick={() => handleDeleteClick(curso.id)}>
                    Deletar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Curso
            </AlertDialogHeader>

            <AlertDialogBody>
              Você tem certeza? Esta ação não pode ser desfeita.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Deletar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <FormCurso
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        curso={selectedCurso}
        onCursoAdded={handleCursoUpdated}
      />
    </div>
  );
};

export default TableCurso;
