import { Box, Flex, Grid, Icon, Tag, TagLabel, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import {Circle, CaretDoubleLeft, CaretDoubleRight} from 'phosphor-react'
import {isToday} from 'date-fns'

import { PageWrapper } from "../../components/PageWrapper";
import { AppointmentsOfTheDay } from "./AppointmentsOfTheDay";
import {NewAppointmentModal} from './NewAppointmentModal'
import { Nav } from "../../components/Nav";

function Day({day, quantityOfAppointments, startHourOfDay, endHourOfDay, noAppointments, onClick}) {
    const isDayToday = isToday(new Date(2022, 5, Number(day)))
    const isLargerThanMd = useBreakpointValue({ base: false, lg: true })

    return (
        <Box
            borderTop='2px solid'
            borderColor={isDayToday ? 'tartOrange.500' : 'ghostWhite.500'}
            color='ghostWhite.500'
            bgColor={isDayToday ? 'gunmetal.400' : 'gunmetal.500'}
            px={{base: 1, sm: 2, md: 4}}
            py={1}
            cursor={noAppointments ? 'auto' : 'pointer'}
            transition='all .2s ease'
            _hover={{
                bgColor: 'gunmetal.400'
            }}
            onClick={onClick}
        >
            <Text 
                fontSize={{sm: 'md', md: 'xl', lg: '4xl'}} 
                fontWeight='bold' 
                color={isDayToday ? 'tartOrange.500' : 'ghostWhite.500'}
            >
                {day}
            </Text>
            {isLargerThanMd 
                ?
                <Box
                    fontSize='xs'
                    py={1}
                >
                {noAppointments
                    ?
                    <Text fontWeight='bold' color='tartOrange.200'>Nenhum agendamento</Text>
                    :
                    <>
                    <Text fontWeight='bold'>{quantityOfAppointments} agendamentos</Text>
                    <Text>{startHourOfDay} até {endHourOfDay}</Text>
                    </>
                }
                </Box>
                :
                <Box my={1}>
                    {noAppointments
                        ?
                            <Tag size='sm' variant='solid' colorScheme='tartOrange'>
                                <Circle size={8} />
                                <TagLabel ml={1}>0</TagLabel>
                            </Tag>
                        :
                        <>                        
                            <Tag size='sm' variant='solid' colorScheme='cadetBlue'>
                                <Circle weight="fill" size={8} />
                                <TagLabel ml={1}>{quantityOfAppointments}</TagLabel>
                            </Tag>
                            <Text fontSize='xx-small'>{startHourOfDay} até {endHourOfDay}</Text>
                        </>
                    }
                </Box>
            }
        </Box>
    )
}

export function Calendar() {
    const { isOpen, onOpen, onClose} = useDisclosure()
    const isLargerThanLg = useBreakpointValue({ base: false, xl: true })

    return (
        <>
            <PageWrapper>
                <Box
                    py={6}
                    px={{base: 2, sm: 6}}
                    flex='1'

                    ml={isLargerThanLg ? '14vw' : 0}
                >
                    <Flex
                        alignItems='center'
                        justifyContent='space-between'
                        color='ghostWhite.500'
                    >
                        <Flex alignItems='center'>
                            {!isLargerThanLg && <Nav />}
                            <Text 
                                fontSize={{sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl'}} 
                                fontWeight='bold' 
                                mr={8} 
                                ml={2}
                            >
                                Jun 2022
                            </Text>
                            <Flex alignItems='center'>
                                <Icon 
                                    as={CaretDoubleLeft} 
                                    h={{sm: 6, md: 7}} 
                                    w={{sm: 6, md: 7}} 
                                    color='tartOrange.500' 
                                    cursor='pointer' 
                                    transition='all .4s ease'
                                    _hover={{
                                        color: 'tartOrange.700'
                                    }}
                                    mr={2}
                                />
                                <Circle size={14} weight='fill' />
                                <Icon 
                                    as={CaretDoubleRight} 
                                    h={{sm: 6, md: 7}} 
                                    w={{sm: 6, md: 7}} 
                                    color='tartOrange.500' 
                                    cursor='pointer' 
                                    transition='all .4s ease'
                                    _hover={{
                                        color: 'tartOrange.700'
                                    }}
                                    ml={2}
                                />
                            </Flex>
                        </Flex>
                        <NewAppointmentModal />
                    </Flex>
                    <Grid
                        templateColumns='repeat(7, 1fr)'
                        gap={{base: 1, sm: 2, md: 5}}
                        mt={4}
                    >
                        <Text color='ghostWhite.500' fontWeight='light' fontSize={{sm: 'xs', md: 'sm', lg: 'md'}}>Dom</Text>
                        <Text color='ghostWhite.500' fontWeight='light' fontSize={{sm: 'xs', md: 'sm', lg: 'md'}}>Seg</Text>
                        <Text color='ghostWhite.500' fontWeight='light' fontSize={{sm: 'xs', md: 'sm', lg: 'md'}}>Ter</Text>
                        <Text color='ghostWhite.500' fontWeight='light' fontSize={{sm: 'xs', md: 'sm', lg: 'md'}}>Qua</Text>
                        <Text color='ghostWhite.500' fontWeight='light' fontSize={{sm: 'xs', md: 'sm', lg: 'md'}}>Qui</Text>
                        <Text color='ghostWhite.500' fontWeight='light' fontSize={{sm: 'xs', md: 'sm', lg: 'md'}}>Sex</Text>
                        <Text color='ghostWhite.500' fontWeight='light' fontSize={{sm: 'xs', md: 'sm', lg: 'md'}}>Sáb</Text>
                        <Box></Box>
                        <Box></Box>
                        <Box></Box>
                        <Day onClick={onOpen} day='01' quantityOfAppointments='10' startHourOfDay='08:30' endHourOfDay='19:00' />
                        <Day onClick={onOpen} day='02' quantityOfAppointments='8' startHourOfDay='10:00' endHourOfDay='18:00' />
                        <Day onClick={onOpen} day='03' quantityOfAppointments='12' startHourOfDay='08:00' endHourOfDay='20:30' />
                        <Day onClick={onOpen} day='04' quantityOfAppointments='15' startHourOfDay='08:00' endHourOfDay='21:00' />
                        <Day onClick={onOpen} day='05' noAppointments />
                        <Day onClick={onOpen} day='06' quantityOfAppointments='5' startHourOfDay='12:15' endHourOfDay='17:00' />
                        <Day onClick={onOpen} day='07' quantityOfAppointments='6' startHourOfDay='11:00' endHourOfDay='15:45' />
                        <Day onClick={onOpen} day='08' quantityOfAppointments='2' startHourOfDay='08:00' endHourOfDay='09:00' />
                        <Day onClick={onOpen} day='09' quantityOfAppointments='11' startHourOfDay='08:45' endHourOfDay='19:30' />
                        <Day onClick={onOpen} day='10' quantityOfAppointments='9' startHourOfDay='10:30' endHourOfDay='19:00' />
                        <Day onClick={onOpen} day='11' quantityOfAppointments='13' startHourOfDay='08:00' endHourOfDay='20:15' />
                        <Day onClick={onOpen} day='12' noAppointments />
                        <Day onClick={onOpen} day='13' quantityOfAppointments='5' startHourOfDay='11:25' endHourOfDay='17:45' />
                        <Day onClick={onOpen} day='14' noAppointments />
                        <Day onClick={onOpen} day='15' quantityOfAppointments='4' startHourOfDay='13:20' endHourOfDay='18:00' />
                        <Day onClick={onOpen} day='16' quantityOfAppointments='7' startHourOfDay='09:00' endHourOfDay='16:40' />
                        <Day onClick={onOpen} day='17' quantityOfAppointments='3' startHourOfDay='14:15' endHourOfDay='17:00' />
                        <Day onClick={onOpen} day='18' quantityOfAppointments='10' startHourOfDay='09:00' endHourOfDay='18:35' />
                        <Day onClick={onOpen} day='19' noAppointments />
                        <Day onClick={onOpen} day='20' quantityOfAppointments='11' startHourOfDay='08:30' endHourOfDay='19:15' />
                        <Day onClick={onOpen} day='21' quantityOfAppointments='4' startHourOfDay='13:45' endHourOfDay='19:00' />
                        <Day onClick={onOpen} day='22' quantityOfAppointments='3' startHourOfDay='09:00' endHourOfDay='19:15' />
                        <Day onClick={onOpen} day='23' quantityOfAppointments='7' startHourOfDay='10:40' endHourOfDay='18:20' />
                        <Day onClick={onOpen} day='24' quantityOfAppointments='8' startHourOfDay='11:25' endHourOfDay='17:25' />
                        <Day onClick={onOpen} day='25' quantityOfAppointments='6' startHourOfDay='09:15' endHourOfDay='14:00' />
                        <Day onClick={onOpen} day='26' noAppointments />
                        <Day onClick={onOpen} day='27' quantityOfAppointments='5' startHourOfDay='10:00' endHourOfDay='15:45' />
                        <Day onClick={onOpen} day='28' quantityOfAppointments='9' startHourOfDay='08:45' endHourOfDay='16:00' />
                        <Day onClick={onOpen} day='29' noAppointments/>
                        <Day onClick={onOpen} day='30' quantityOfAppointments='8' startHourOfDay='12:00' endHourOfDay='19:30' />
                    </Grid>
                </Box>
            </PageWrapper>
            <AppointmentsOfTheDay isOpen={isOpen} onClose={onClose} />
        </>
    )
}