import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Icon, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import {
    PresentationChart,
    Package,
    HandSoap,
    CalendarBlank,
    Circle,
    Coins,
    SignOut,
    Scissors,
    Sliders,
    Sun,
    Truck,
    UsersThree,
    List
} from 'phosphor-react'
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Notifications } from "./Notifications";


function NavButton({linkTo, title, icon}) {
    const location = window.location.href.replace('https://https://beautyawer.vercel.app/', '')

    return (
        <Button
            colorScheme='gunmetal'
            color={location.includes(linkTo) ? 'tartOrange.500' : 'ghostWhite.500'}
            w='100%'
            size='sm'
            my={2}

            display='flex'
            justifyContent='left'

            as={Link}
            to={`/${linkTo}`}
        >
            {icon}
            <Text fontWeight='light' ml={4}>{title}</Text>
        </Button>
    )
}

export function Nav() {
    const location = window.location.href.replace('https://https://beautyawer.vercel.app', '')
    console.log(location)
    console.log((location === 'https://https://beautyawer.vercel.app'))
    const isLargerThanLg = useBreakpointValue({ base: false, xl: true })
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    if(isLargerThanLg) {
        return (
            <Flex
                w='14vw'
                h='100vh'
                boxShadow='dark-lg'
                px={2}
                py={4}
    
                direction='column'
                justifyContent='flex-start'
                alignItems='center'
    
                position='fixed'
            >
                <Box
                    position='relative'
                    width='130px'
                    height='100px'
                    // m='auto'
                >
                    <Text 
                        color='ghostWhite.500' 
                        fontSize='5xl' 
                        fontWeight='lighter'
                        lineHeight='none'
    
                        textAlign='left'
                    >
                        BEAUTY
                    </Text>
                    <Text 
                        color='tartOrange.500' 
                        fontWeight='semibold'
                        fontSize='x-small'
    
                        letterSpacing='3px'
                        transform='rotate(270deg)'
    
                        position='absolute'
                        top='10'
                        right='-8'
    
                    >
                        by awer.co
                    </Text>
                </Box>
                <Box
                    py={12}
                >
                    <Text color='ghostWhite.500' fontSize='xl' textAlign='center' >Olá Alexandre!</Text>
                    <Flex my={2}>
                        <Button
                            colorScheme='gunmetal'
                            color={(location === 'https://https://beautyawer.vercel.app') ? 'tartOrange.500' : 'ghostWhite.500'}
                            size='sm'
                            mr={2}
    
                            as={Link}
                            to={`/`}
                        >
                            <Icon as={Sun} h={5} w={5} mr={2} mb={.5} />
                            <Text fontWeight='light'>Meu dia</Text>
                        </Button>
                        <Notifications />
                    </Flex>
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                    >
                        <Icon as={Sliders} h={5} w={5} mr={2} mb={.5} />
                        <Text fontWeight='light'>Preferências</Text>
                    </Button>
                </Box>
                <Flex w='100%' justifyContent='center' alignItems='center'>
                    <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                    <Icon as={Circle} h={3} w={3} color='ghostWhite.500' mx={2} />
                    <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                </Flex>
                <Box mt={4}>
                    <NavButton linkTo='calendar' title='Agenda' icon={<CalendarBlank size={20} />} />
                    {/* <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        <Icon as={FiCalendar} h={4} w={4} mr={4} mb={.5} />
                        <Text fontWeight='light'>Agendamentos</Text>
                    </Button> */}
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        <Coins size={20} />
                        <Text fontWeight='light' ml={4}>Fluxo de caixa</Text>
                    </Button>
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        <Package size={20} />
                        <Text fontWeight='light' ml={4}>Estoque</Text>
                    </Button>
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        <Scissors size={20} />
                        <Text fontWeight='light' ml={4}>Serviços</Text>
                    </Button>
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        <UsersThree size={20} />
                        <Text fontWeight='light' ml={4}>Clientes</Text>
                    </Button>
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        {/* <Icon as={FiBox} h={4} w={4} mr={4} mb={.5} /> */}
                        <HandSoap size={20} />
                        <Text fontWeight='light' ml={4}>Produtos</Text>
                    </Button>
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        <Truck size={20} />
                        <Text fontWeight='light' ml={4}>Fornecedores</Text>
                    </Button>
                    <Button
                        colorScheme='gunmetal'
                        w='100%'
                        size='sm'
                        my={2}
    
                        display='flex'
                        justifyContent='left'
                    >
                        <PresentationChart size={20} />
                        <Text fontWeight='light' ml={4}>Resultados</Text>
                    </Button>
                </Box>
                <Button
                    colorScheme='gunmetal'
                    w='100%'
                    size='sm'
                    mt='auto'
                >
                    <Icon as={SignOut} h={5} w={5} mr={4} mb={.5} />
                </Button>
            </Flex>
        )
    }

    return (
        <>
            <Button ref={btnRef} colorScheme='tartOrange' size='sm' mr={2} onClick={onOpen}>
                <List size={16} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
            <DrawerOverlay />
            <DrawerContent bgColor='gunmetal.500'>
                <DrawerCloseButton color='ghostWhite.500' />
                <DrawerBody>
                    <Flex
                        px={2}
                        py={4}
                        h='100vh'
            
                        direction='column'
                        justifyContent='flex-start'
                        alignItems='center'
                    >
                        <Box
                            position='relative'
                            width='130px'
                            height='100px'
                            // m='auto'
                        >
                            <Text 
                                color='ghostWhite.500' 
                                fontSize='5xl' 
                                fontWeight='lighter'
                                lineHeight='none'
            
                                textAlign='left'
                            >
                                BEAUTY
                            </Text>
                            <Text 
                                color='tartOrange.500' 
                                fontWeight='semibold'
                                fontSize='x-small'
            
                                letterSpacing='3px'
                                transform='rotate(270deg)'
            
                                position='absolute'
                                top='10'
                                right='-8'
            
                            >
                                by awer.co
                            </Text>
                        </Box>
                        <Box
                            py={12}
                        >
                            <Text color='ghostWhite.500' fontSize='xl' textAlign='center' >Olá Alexandre!</Text>
                            <Flex my={2}>
                                <Button
                                    colorScheme='gunmetal'
                                    color={(location === 'http://localhost:3000/') ? 'tartOrange.500' : 'ghostWhite.500'}
                                    size='sm'
                                    mr={2}
            
                                    as={Link}
                                    to={`/`}
                                >
                                    <Icon as={Sun} h={5} w={5} mr={2} mb={.5} />
                                    <Text fontWeight='light'>Meu dia</Text>
                                </Button>
                                <Notifications />
                            </Flex>
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                            >
                                <Icon as={Sliders} h={5} w={5} mr={2} mb={.5} />
                                <Text fontWeight='light'>Preferências</Text>
                            </Button>
                        </Box>
                        <Flex w='100%' justifyContent='center' alignItems='center'>
                            <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                            <Icon as={Circle} h={3} w={3} color='ghostWhite.500' mx={2} />
                            <Box bgColor='ghostWhite.500' h='1px' flex='1'></Box>
                        </Flex>
                        <Box mt={4}>
                            <NavButton linkTo='calendar' title='Agenda' icon={<CalendarBlank size={20} />} />
                            {/* <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                <Icon as={FiCalendar} h={4} w={4} mr={4} mb={.5} />
                                <Text fontWeight='light'>Agendamentos</Text>
                            </Button> */}
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                <Coins size={20} />
                                <Text fontWeight='light' ml={4}>Fluxo de caixa</Text>
                            </Button>
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                <Package size={20} />
                                <Text fontWeight='light' ml={4}>Estoque</Text>
                            </Button>
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                <Scissors size={20} />
                                <Text fontWeight='light' ml={4}>Serviços</Text>
                            </Button>
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                <UsersThree size={20} />
                                <Text fontWeight='light' ml={4}>Clientes</Text>
                            </Button>
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                {/* <Icon as={FiBox} h={4} w={4} mr={4} mb={.5} /> */}
                                <HandSoap size={20} />
                                <Text fontWeight='light' ml={4}>Produtos</Text>
                            </Button>
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                <Truck size={20} />
                                <Text fontWeight='light' ml={4}>Fornecedores</Text>
                            </Button>
                            <Button
                                colorScheme='gunmetal'
                                w='100%'
                                size='sm'
                                my={2}
            
                                display='flex'
                                justifyContent='left'
                            >
                                <PresentationChart size={20} />
                                <Text fontWeight='light' ml={4}>Resultados</Text>
                            </Button>
                        </Box>
                        <Button
                            colorScheme='gunmetal'
                            w='100%'
                            size='sm'
                            mt='auto'
                        >
                            <Icon as={SignOut} h={5} w={5} mr={4} mb={.5} />
                        </Button>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
            </Drawer>
        </>
    )

}