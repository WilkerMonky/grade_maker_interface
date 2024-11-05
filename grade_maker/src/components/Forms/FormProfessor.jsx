import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { useRef } from "react";


   const FormProfessor = ()=> {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
  
    return (
      <Box p={5}>
        {/* Botão para abrir a aba suspensa */}
        <Button ref={btnRef} colorScheme="purple" onClick={onOpen}>
          Abrir aba suspensa
        </Button>
  
        {/* Drawer (Aba suspensa) */}
        <Drawer
          isOpen={isOpen}
          placement="right" // Define a posição da aba (right, left, top, bottom)
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm" // Define o tamanho da aba (sm, md, lg, xl)
        >
          <DrawerOverlay />
          <DrawerContent bg="purple.800" color="white" borderRadius="lg">
            <DrawerCloseButton />
            <DrawerHeader textAlign="center" fontSize="xl">
              Wilson Amaral Martins
            </DrawerHeader>
  
            <DrawerBody>
              <Text fontSize="sm" mb={3} textAlign="right" color="pink.200" cursor="pointer">
                editar
              </Text>
              
              {/* Menu suspenso */}
              <VStack align="start" spacing={2} color="pink.200">
                <Text cursor="pointer">Disciplinas</Text>
                <Text cursor="pointer">Banco de dados</Text>
                <Text cursor="pointer">Estrutura de dados</Text>
              </VStack>
  
              {/* Seção de horários */}
              <Box mt={5}>
                <Text textAlign="center" fontSize="lg" mb={4}>Disponibilidade</Text>
                <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={3} textAlign="center">
                  <Text>Segunda</Text>
                  <Text>Terça</Text>
                  <Text>Quarta</Text>
                  <Text>Quinta</Text>
                  <Text>Sexta</Text>
                  <Text>Sábado</Text>
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={3} mt={3}>
                  <Text>Matutino</Text>
                  {Array(6).fill().map((_, i) => (
                    <Button key={i} bg="purple.500" _hover={{ bg: "pink.500" }} borderRadius="full" h="20px" />
                  ))}
                  <Text>Noturno</Text>
                  {Array(6).fill().map((_, i) => (
                    <Button key={i} bg="purple.500" _hover={{ bg: "pink.500" }} borderRadius="full" h="20px" />
                  ))}
                </Box>
              </Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Button colorScheme="pink" w="100%" onClick={onClose}>
                Salvar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  }


  export default FormProfessor;