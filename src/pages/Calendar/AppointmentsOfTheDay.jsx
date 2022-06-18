import { 
    Box, 
    Button, 
    Flex, 
    Grid, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    Tag, 
    Text,
    useBreakpointValue,
    useDisclosure
} from "@chakra-ui/react";
import {useState} from 'react'
import { ViewAppointment } from "./ViewAppointment";

function Appointment({onClick, startHour, endHour, customer, isFirstAppointment, jobs, value}) {
    const isLargerThanLg = useBreakpointValue({ base: false, xl: true })

    return (
        <Grid
            templateColumns={{sm: '1fr 1fr 1fr', xl: '1fr 1.5fr 1.5fr 1fr'}}
            alignItems='center'
            boxShadow='2xl'
            mt={4}
            borderLeft='1.5px solid'
            borderColor='ghostWhite.500'
            cursor='pointer'
            transition='all .3s ease'
            _hover={{
                bgColor: 'gunmetal.300'
            }}
            onClick={onClick}
        >
            <Box
                py={4}
                px={8}
                textAlign='center'
            >
                <Text fontWeight='bold'>{startHour}</Text>
                <Text fontSize='sm'>até</Text>
                <Text fontWeight='bold'>{endHour}</Text>
            </Box>
            <Box p={4}>
                <Text fontWeight='bold'>{customer}</Text>
                <Text fontSize='sm' color='gray.400'>{isFirstAppointment ? 'Primeiro atendimento' : 'Retorno'}</Text>
            </Box>
            {isLargerThanLg && <Grid
                templateColumns='1fr 1fr'
                ml={8}
                gap={2}
                p={4}
            >
            {jobs.map(job =>
                <Tag colorScheme='cadetBlue' size='sm' key={job}>{job}</Tag>
            )}
            </Grid>}
            <Text
                ml='auto'
                px={4}
                fontWeight='bold'
                fontSize='lg'
                color='cadetBlue.500'
            >
                {value}
            </Text>
        </Grid>    
    )
}

export function AppointmentsOfTheDay({isOpen, onClose}) {
    const {onOpen: openModal, isOpen: isModalOpen, onClose: closeModal} = useDisclosure()
    const [appointment, setAppointment] = useState()

    return (
        <>
            {isOpen && <Modal isOpen={isOpen} onClose={onClose} size={{sm: 'full', md: '5xl'}}>
            <ModalOverlay />
            <ModalContent bgColor='gunmetal.400' color='ghostWhite.500'>
                <ModalHeader>Agendamentos do dia</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Appointment 
                        startHour='08:00' 
                        endHour='09:00' 
                        customer='Gabriel Alves' 
                        isFirstAppointment 
                        jobs={['Hidratação', 'Lavagem', 'Finalização']} 
                        value='R$ 185,90' 
                        onClick={() => {
                            setAppointment({
                                startDate: new Date().setHours(8, 0, 0),
                                endDate: new Date().setHours(9, 0, 0),
                                customer: 'Gabriel Alves',
                                jobs: [105.90, 35.90, 25.90],
                                totalValue: '185,90'
                            });
                            openModal()
                        }}
                    />
                    <Appointment 
                        startHour='09:00' 
                        endHour='10:30' 
                        customer='Patrícia Costa' 
                        jobs={['Hidratação', 'Lavagem', 'Nutrição']} 
                        value='R$ 345,90' 
                        onClick={() => {
                            setAppointment({
                                startDate: new Date().setHours(9, 0, 0),
                                endDate: new Date().setHours(10, 30, 0),
                                customer: 'Patrícia Costa',
                                jobs: [105.90, 155.90, 35.90],
                                totalValue: '345,90'
                            });
                            openModal()
                        }}
                    />
                    <Appointment 
                        startHour='10:30' 
                        endHour='12:00' 
                        customer='Matheus Farias' 
                        isFirstAppointment 
                        jobs={['Corte', 'Lavagem', 'Finalização']} 
                        value='R$ 85,90' 
                        onClick={() => {
                            setAppointment({
                                startDate: new Date().setHours(10, 30, 0),
                                endDate: new Date().setHours(12, 0, 0),
                                customer: 'Matheus Farias',
                                jobs: [85.90, 35.90, 25.90],
                                totalValue: '85,90'
                            });
                            openModal()
                        }}
                    />
                    <Appointment 
                        startHour='13:00' 
                        endHour='14:00' 
                        customer='Victória Andrade' 
                        jobs={['Coloração', 'Hidratação', 'Lavagem', 'Finalização']} 
                        value='R$ 345,90' 
                        onClick={() => {
                            setAppointment({
                                startDate: new Date().setHours(13, 0, 0),
                                endDate: new Date().setHours(14, 0, 0),
                                customer: 'Victória Andrade',
                                jobs: [285.90, 35.90, 105.90, 25.90],
                                totalValue: '345,90'
                            });
                            openModal()
                        }}
                    />
                    <Appointment 
                        startHour='14:00' 
                        endHour='15:00' 
                        customer='Danilo Norcia' 
                        isFirstAppointment 
                        jobs={['Coloração Fantasia', 'Lavagem', 'Finalização']} 
                        value='R$ 485,90' 
                        onClick={() => {
                            setAppointment({
                                startDate: new Date().setHours(14, 0, 0),
                                endDate: new Date().setHours(15, 0, 0),
                                customer: 'Danilo Norcia',
                                jobs: [385.90, 35.90, 25.90],
                                totalValue: '485,90'
                            });
                            openModal()
                        }}
                    />
                    <Appointment 
                        startHour='15:00' 
                        endHour='18:00' 
                        customer='Fernando Fenólio' 
                        isFirstAppointment 
                        jobs={['Descoloração', 'Hidratação', 'Nutrição', 'Lavagem', 'Finalização']} 
                        value='R$ 675,90' 
                        onClick={() => {
                            setAppointment({
                                startDate: new Date().setHours(15, 0, 0),
                                endDate: new Date().setHours(18, 0, 0),
                                customer: 'Fernando Fenólio',
                                jobs: [295.90, 35.90, 105.90, 25.90, 155.90],
                                totalValue: '675,90'
                            });
                            openModal()
                        }}
                    />
                    <Flex
                        alignItems='center'
                        justifyContent='space-between'
                        p={8}
                        fontSize={{sm: 'sm', md: 'md', lg: 'lg'}}
                    >
                        <Flex>
                            <Text>Das</Text>
                            <Text fontWeight='bold' px={2}>08:00</Text>
                            <Text>às</Text>
                            <Text fontWeight='bold' px={2}>18:00</Text>
                        </Flex>
                        <Text fontWeight='bold'>6 agendamentos</Text>
                        <Text
                            fontWeight='bold'
                            color='cadetBlue.500'
                        >
                            R$ 2.125,4                            
                        </Text>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button mr={3} onClick={onClose} colorScheme='gunmetal'>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>}
            {isModalOpen && <ViewAppointment isOpen={isModalOpen} onClose={closeModal} appointment={appointment} />}
        </>
    )
}