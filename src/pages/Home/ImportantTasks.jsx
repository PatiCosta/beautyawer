import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { Circle, Coins, Package, WarningCircle } from "phosphor-react";
import { useRef } from "react";

export function ImportantTasks() {
    const isLargerThanLg = useBreakpointValue({ base: false, xl: true })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    if(isLargerThanLg) {
        return (
            <Box h='100%' color='ghostWhite.500'>
                <Text fontSize='2xl'>
                    Atividades importantes
                </Text>
                <Flex w='100%' justifyContent='center' alignItems='center' my={2}>
                    <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                    <Icon as={Circle} h={3} w={3} color='ghostWhite.500' mx={2} />
                    <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                </Flex>
                <Box mt={6}>
                    <Button size='sm' colorScheme='cadetBlue' w='100%'>
                        <Icon as={Coins} h={4} w={4} mr={2} /> pagar conta de luz
                    </Button>
                    <Button size='sm' colorScheme='cadetBlue' w='100%' mt={4}>
                        <Icon as={Coins} h={4} w={4} mr={2} /> pagar aluguel
                    </Button>
                    <Button size='sm' colorScheme='cadetBlue' w='100%' mt={4}>
                        <Icon as={Package} h={4} w={4} mr={2} /> conferir estoque
                    </Button>
                </Box>
            </Box>
        )
    }

    return (
        <>
            <Button ref={btnRef} colorScheme='tartOrange' ml={2} size='sm' mr={2} onClick={onOpen}>
                <WarningCircle size={16} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent bgColor='gunmetal.500'>
                <DrawerCloseButton color='ghostWhite.500' />
                <DrawerBody>
                    <Box h='100%' color='ghostWhite.500'>
                        <Text fontSize='2xl'>
                            Atividades importantes
                        </Text>
                        <Flex w='100%' justifyContent='center' alignItems='center' my={2}>
                            <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                            <Icon as={Circle} h={3} w={3} color='ghostWhite.500' mx={2} />
                            <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                        </Flex>
                        <Box mt={6}>
                            <Button size='sm' colorScheme='cadetBlue' w='100%'>
                                <Icon as={Coins} h={4} w={4} mr={2} /> pagar conta de luz
                            </Button>
                            <Button size='sm' colorScheme='cadetBlue' w='100%' mt={4}>
                                <Icon as={Coins} h={4} w={4} mr={2} /> pagar aluguel
                            </Button>
                            <Button size='sm' colorScheme='cadetBlue' w='100%' mt={4}>
                                <Icon as={Package} h={4} w={4} mr={2} /> conferir estoque
                            </Button>
                        </Box>
                    </Box>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
        </>
    )
}