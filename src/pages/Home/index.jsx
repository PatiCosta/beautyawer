import { Badge, Box, Flex, Grid, Icon, Tag, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import {Circle} from 'phosphor-react'
import { PageWrapper } from "../../components/PageWrapper";
import { NewAppointmentModal } from "./NewAppointmentModal";
import { ViewAppointment } from "./ViewAppointment";
import { Nav } from "../../components/Nav";
import { ImportantTasks } from "./ImportantTasks";

function Appointment({onClick, badgeText, badgeColor, startHour, endHour, customer}) {
    return (
        <Grid
            templateColumns='.5fr 1.1fr 1.4fr'
            alignItems='center'
            boxShadow='dark-lg'
            mt={4}
            borderLeft='1.5px solid'
            borderColor='ghostWhite.500'
            cursor='pointer'
            opacity='.6'
            onClick={onClick}
            transition='all .3s ease'
            _hover={{
                bgColor: 'gunmetal.300'
            }}
        >
            <Badge
                ml={4}
                colorScheme={badgeColor}
                variant='solid'
            >
                {badgeText}
            </Badge>
            <Text px={4} fontSize='sm'>{startHour} até {endHour}</Text>
            <Text fontWeight='bold' p={4}>{customer}</Text>
        </Grid>
    )
}

export function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [appointment, setAppointment] = useState()
    const isLargerThanLg = useBreakpointValue({ base: false, xl: true })

    return (
        <>
            <PageWrapper>
                <Grid
                    h='100vh'
                    w={{sm: '100vw', xl: '86vw'}}
                    templateColumns={{sm: '1fr', xl: '1.4fr .6fr'}}
                    py={8}
                    px={4}
                    gap={{sm: 0, lg: 8}}
                    ml={isLargerThanLg ? '14vw' : 0}
                >
                    <Box h='100%' color='ghostWhite.500'>
                        <Flex justifyContent='space-between'>
                            <Flex alignItems='center'>
                                {!isLargerThanLg && <Nav />}
                                <Text fontSize={{sm: 'lg', md: 'xl', lg: '2xl'}}>
                                    Agendamentos de hoje
                                </Text>
                            </Flex>
                            <Flex alignItems='center'>
                                <NewAppointmentModal />
                                {!isLargerThanLg && <ImportantTasks />}
                            </Flex>
                        </Flex>
                        <Flex w='100%' justifyContent='center' alignItems='center' my={2}>
                            <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                            <Icon as={Circle} h={3} w={3} color='ghostWhite.500' mx={2} />
                            <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                        </Flex>
                        <Grid
                            templateColumns={{sm: '1fr', lg: '1fr 1fr'}}
                            gap={2}
                            fontSize='sm'
                        >
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(8, 0, 0),
                                        endDate: new Date().setHours(8, 30, 0),
                                        customer: 'Matheus Farias',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'completo'
                                    });
                                    onOpen()
                                }}
                                badgeText='completo'
                                badgeColor='orange'
                                startHour='08:00'
                                endHour='08:30'
                                customer='Matheus Farias'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(8, 30, 0),
                                        endDate: new Date().setHours(9, 30, 0),
                                        customer: 'Victória Andrade',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'completo'
                                    });
                                    onOpen()
                                }}
                                badgeText='completo'
                                badgeColor='orange'
                                startHour='08:30'
                                endHour='09:30'
                                customer='Victória Andrade'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(9, 30, 0),
                                        endDate: new Date().setHours(10, 30, 0),
                                        customer: 'Patrícia Costa',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'em aberto'
                                    });
                                    onOpen()
                                }}
                                badgeText='em aberto'
                                badgeColor='tartOrange'
                                startHour='09:30'
                                endHour='10:30'
                                customer='Patrícia Costa'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(10, 30, 0),
                                        endDate: new Date().setHours(12, 0, 0),
                                        customer: 'Danilo Norcia',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'em aberto'
                                    });
                                    onOpen()
                                }}
                                badgeText='em aberto'
                                badgeColor='tartOrange'
                                startHour='10:30'
                                endHour='12:00'
                                customer='Danilo Norcia'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(12, 0, 0),
                                        endDate: new Date().setHours(12, 15, 0),
                                        customer: 'Matheus Farias',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'em aberto'
                                    });
                                    onOpen()
                                }}
                                badgeText='em aberto'
                                badgeColor='tartOrange'
                                startHour='12:00'
                                endHour='12:15'
                                customer='Matheus Farias'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(12, 15, 0),
                                        endDate: new Date().setHours(13, 0, 0),
                                        customer: 'Victória Andrade',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'em aberto'
                                    });
                                    onOpen()
                                }}
                                badgeText='em aberto'
                                badgeColor='tartOrange'
                                startHour='12:15'
                                endHour='13:00'
                                customer='Victória Andrade'
                            />
                        </Grid>
                        <Grid
                            templateColumns={{sm: '.3fr 1fr 1.5fr 1.2fr', xl: '.3fr 1fr 1fr 1.8fr .9fr'}}
                            alignItems='center'
                            boxShadow='dark-lg'
                            mt={4}
                            borderRadius='md'
                            borderLeft='1.5px solid'
                            borderColor='cadetBlue.500'
                            cursor='pointer'
                            onClick={() => {
                                setAppointment({
                                    startDate: new Date().setHours(13, 0, 0),
                                    endDate: new Date().setHours(13, 30, 0),
                                    customer: 'Gabriel Alves',
                                    jobs: [85.90, 35.90, 105.90, 25.90],
                                    totalValue: '253,60',
                                    status: 'agora'
                                });
                                onOpen()
                            }}
                        >
                            <Badge
                                ml={4}
                                colorScheme='green'
                                variant='solid'
                            >
                                agora
                            </Badge>
                            <Box
                                py={4}
                                px={8}
                                textAlign='center'
                            >
                                <Text fontWeight='bold' fontSize={{sm: 'sm', md: 'md'}}>13h00</Text>
                                <Text fontSize={{sm: 'xs', md: 'sm'}}>até</Text>
                                <Text fontWeight='bold' fontSize={{sm: 'sm', md: 'md'}}>13h30</Text>
                            </Box>
                            <Box p={4}>
                                <Text fontWeight='bold' fontSize={{sm: 'sm', md: 'md'}}>Gabriel Alves</Text>
                                <Text fontSize={{sm: 'xs', md: 'sm'}} color='gray.400'>Primeiro atendimento</Text>
                            </Box>
                            <Grid
                                templateColumns='1fr 1fr'
                                ml={8}
                                gap={2}
                                p={4}

                                display={{sm: 'none', xl: 'grid'}}
                            >
                                <Tag colorScheme='cadetBlue' size='sm'>Corte</Tag>
                                <Tag colorScheme='cadetBlue' size='sm'>Lavagem</Tag>
                                <Tag colorScheme='cadetBlue' size='sm'>Hidratação</Tag>
                                <Tag colorScheme='cadetBlue' size='sm'>Finalização</Tag>
                            </Grid>
                            <Text
                                ml='auto'
                                px={4}
                                fontWeight='bold'
                                fontSize={{sm: 'sm', md: 'md', lg: 'lg'}}
                                color='cadetBlue.500'
                            >
                                R$ 286,00
                            </Text>
                        </Grid>
                        <Grid
                            templateColumns={{sm: '1fr', lg: '1fr 1fr'}}
                            gap={2}
                            fontSize='sm'
                        >
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(14, 0, 0),
                                        endDate: new Date().setHours(15, 30, 0),
                                        customer: 'Matheus Farias',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'próximo'
                                    });
                                    onOpen()
                                }}
                                badgeText='próximo'
                                badgeColor='cadetBlue'
                                startHour='14:00'
                                endHour='15:30'
                                customer='Matheus Farias'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(15, 30, 0),
                                        endDate: new Date().setHours(16, 30, 0),
                                        customer: 'Victória Andrade',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'próximo'
                                    });
                                    onOpen()
                                }}
                                badgeText='próximo'
                                badgeColor='cadetBlue'
                                startHour='15:30'
                                endHour='16:30'
                                customer='Victória Andrade'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(16, 30, 0),
                                        endDate: new Date().setHours(17, 0, 0),
                                        customer: 'Patrícia Costa',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'próximo'
                                    });
                                    onOpen()
                                }}
                                badgeText='próximo'
                                badgeColor='cadetBlue'
                                startHour='16:30'
                                endHour='17:00'
                                customer='Patrícia Costa'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(17, 0, 0),
                                        endDate: new Date().setHours(18, 0, 0),
                                        customer: 'Danilo Norcia',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'próximo'
                                    });
                                    onOpen()
                                }}
                                badgeText='próximo'
                                badgeColor='cadetBlue'
                                startHour='17:00'
                                endHour='18:00'
                                customer='Danilo Norcia'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(18, 0, 0),
                                        endDate: new Date().setHours(18, 30, 0),
                                        customer: 'Matheus Farias',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'próximo'
                                    });
                                    onOpen()
                                }}
                                badgeText='próximo'
                                badgeColor='cadetBlue'
                                startHour='18:00'
                                endHour='18:30'
                                customer='Matheus Farias'
                            />
                            <Appointment 
                                onClick={() => {
                                    setAppointment({
                                        startDate: new Date().setHours(18, 30, 0),
                                        endDate: new Date().setHours(19, 30, 0),
                                        customer: 'Victória Andrade',
                                        jobs: [85.90, 35.90, 105.90, 25.90],
                                        totalValue: '253,60',
                                        status: 'próximo'
                                    });
                                    onOpen()
                                }}
                                badgeText='próximo'
                                badgeColor='cadetBlue'
                                startHour='18:30'
                                endHour='19:30'
                                customer='Victória Andrade'
                            />
                        </Grid>
                    </Box>
                    {isLargerThanLg && <ImportantTasks />}
                </Grid>
            </PageWrapper>
            {isOpen && <ViewAppointment isOpen={isOpen} onClose={onClose} appointment={appointment} />}
        </>
    )
}