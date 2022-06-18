import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Avatar, AvatarBadge, Button, List, ListIcon, ListItem, useDisclosure } from "@chakra-ui/react";
import { Bell, CalendarBlank, Coins, WarningCircle } from "phosphor-react";
import { useRef } from "react";

export function Notifications() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const buttonRef = useRef()

    return (
        <>
            <Button colorScheme='gunmetal' size='sm' onClick={onOpen}>
                <Avatar 
                    bg='transparent' 
                    color='ghostwhite'
                    icon={
                        <Bell size={20} weight="duotone" />
                    } 
                    size='xs'
                >
                    <AvatarBadge borderColor='transparent' boxSize='.5em' bg='tartOrange.500' />
                </Avatar>
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={buttonRef}
                onClose={onClose}
                size={{sm: 'full', md: '5xl'}}
            >
                <AlertDialogOverlay>
                <AlertDialogContent bgColor='gunmetal.500'>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold' color='ghostWhite.500'>
                    Notificações
                    </AlertDialogHeader>

                    <AlertDialogBody>
                        <List spacing={4} color='ghostWhite.500' fontSize={{sm: 'sm', md: 'md'}}>
                            <ListItem>
                                <ListIcon as={WarningCircle} w={4} h={4} mt={.5} color='tartOrange.500' />
                                Seu Shampoo Energizante Daterra está acabando! Lembre-se de encomendar mais
                            </ListItem>
                            <ListItem>
                                <ListIcon as={Coins} w={4} h={4} mt={.5}  color='tartOrange.500' />
                                Sua conta de luz vence hoje! Não esqueça de pagar a tempo
                            </ListItem>
                            <ListItem>
                                <ListIcon as={Coins} w={4} h={4} mt={.5}  color='tartOrange.500' />
                                Seu aluguel vence hoje! Não esqueça de pagar a tempo
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CalendarBlank} w={4} h={4} mt={1}  color='tartOrange.500' />
                                Existem agendamentos em aberto! Lembre-se de confirmá-los :)
                            </ListItem>
                        </List>
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={buttonRef} onClick={onClose} colorScheme='gunmetal'>
                        Fechar
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}