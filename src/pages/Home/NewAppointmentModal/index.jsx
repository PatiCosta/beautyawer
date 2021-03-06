import { useCallback, useState } from "react"
import { 
    Button, 
    Icon, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    useDisclosure, 
    Flex, 
    Text, 
    FormControl, 
    FormLabel, 
    Select, 
    Input,
    Box,
    Grid,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react"
import {
  HandSoap, 
  FlowerLotus, 
  Palette, 
  Crown, 
  Drop, 
  Scissors, 
  Shower, 
  CalendarPlus, 
  CaretDoubleUp, 
  CaretDoubleDown, 
  Circle, 
  SmileyWink, 
  Browser, 
  PaintBucket
} from 'phosphor-react'
import DatePicker from 'react-datepicker'
import {ptBR} from 'date-fns/locale'

import {DatePickerInput} from './DatePickerInput'

import "../../../styles/react-datepicker.css";
import { JobsCheckbox } from "./JobsCheckbox"

function Product({icon, product}) {
  return (
    <Flex
      borderTopWidth="1px"
      // borderRadius='md'
      boxShadow="xl"
      p={2}

      flexDirection='column'
      justifyContent='space-between'
    >
        <Box
            // bgColor='ghostWhite'
            // p={3}
            color='ghostWhite'
            // borderRadius='50%'
            w='fit-content'
            m='auto'
            my={2}
          >
            {icon}
        </Box>
        <Flex textAlign='center' flex='1' flexDirection='column' justifyContent='space-between'>
            <Text fontWeight='bold' fontSize='sm' mb={2}>{product}</Text>
            <Circle size={12} weight='fill' style={{margin: 'auto'}} />
            <Flex alignItems='center' justifyContent='center' my={4}>
              <NumberInput size='sm' defaultValue={1} min={0} flex='.4' variant='flushed'>
                <NumberInputField pl={4} />
                <NumberInputStepper>
                  <NumberIncrementStepper
                    // bg='green.200'
                    // _active={{ bg: 'green.300' }}
                    children={<CaretDoubleUp size={12} />}
                  />
                  <NumberDecrementStepper
                    // bg='pink.200'
                    // _active={{ bg: 'pink.300' }}
                    children={<CaretDoubleDown size={12} />}
                  />
                </NumberInputStepper>
              </NumberInput>
              <Text ml={2}>dose</Text>
            </Flex>
        </Flex>
    </Flex>
  )
}

export function NewAppointmentModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [totalValue, setTotalValue] = useState(0)
    const [jobs, setJobs] = useState([])

    const handleCheckJob = useCallback((checkedValues) => {
        const formattedValues = checkedValues.map(value => Number(value))
        setJobs(formattedValues)

        const totalValue = formattedValues
        .reduce(((accumulator, currentValue) => accumulator + currentValue ), 0)

        setTotalValue(totalValue.toFixed(2).replace('.', ','))
    }, [])

    return (
      <>
        <Button size='sm' colorScheme='cadetBlue' onClick={onOpen}>
            <Icon as={CalendarPlus} h={5} w={5} mr={{sm: 0, lg: 2}} /> 
            <Text display={{base: 'none', sm: 'none', lg: 'inline-block'}}>agendamento</Text>
        </Button>
  
        {isOpen && <Modal isOpen={isOpen} onClose={onClose} size={{base: 'full', md: '3xl'}}>
          <ModalOverlay />
          <ModalContent bgColor='gunmetal.400' color='ghostWhite.500'>
            <ModalHeader>Novo agendamento</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                alignItems='center'
                flexDirection={{base: 'column', sm: 'row'}}
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  timeInputLabel="Hor??rio:"
                  dateFormat="dd/MM/yyyy h:mm aa"
                  showTimeInput
                  locale={ptBR}
                  customInput={<DatePickerInput label='In??cio' />}
                />
                <Text fontWeight='bold' mx={{sm: 4, md: 6}} my={{base: 2, sm: 0}} fontSize={{sm: 'sm', md: 'md'}}>at??</Text>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  timeInputLabel="Hor??rio:"
                  dateFormat="dd/MM/yyyy h:mm aa"
                  showTimeInput
                  locale={ptBR}
                  customInput={<DatePickerInput label='Fim' />}
                />
              </Flex>
              <FormControl mt={6} display='flex' alignItems='end'>
                <FormLabel fontWeight='semibold' color='cadetBlue.500' htmlFor='customer' fontSize={{sm: 'sm', md: 'md'}}>Cliente</FormLabel>
                <Select variant='flushed' id='customer' placeholder='Selecione o cliente'>
                  <option>Gabriel Alves</option>
                  <option>Matheus Farias</option>
                  <option>Patr??cia Costa</option>
                  <option>Fernando Fen??lio</option>
                  <option>Raphael Souza</option>
                  <option>Vict??ria Andrade</option>
                  <option>Lucas Camargo</option>
                </Select>
              </FormControl>
              <Text mt={8} fontWeight='semibold' color='cadetBlue.500' fontSize={{sm: 'sm', md: 'md'}}>Servi??os</Text>
              <JobsCheckbox 
                handleCheck={handleCheckJob}
                jobsData={[
                    {
                        name: 'Corte',
                        value: 85.90,
                        icon: <Scissors size={20} />
                    },
                    {
                        name: 'Hidrata????o',
                        value: 105.90,
                        icon: <Drop size={20} weight="fill" />
                    },
                    {
                        name: 'Nutri????o',
                        value: 155.90,
                        icon: <Drop size={20} weight="fill" />
                    },
                    {
                        name: 'Lavagem',
                        value: 35.90,
                        icon: <Shower size={20} weight="fill" />
                    },
                    {
                        name: 'Finaliza????o',
                        value: 25.90,
                        icon: <Crown size={20} weight="fill" />
                    },
                    {
                        name: 'Colora????o',
                        value: 285.90,
                        icon: <Palette size={20} weight="fill" />
                    },
                    {
                        name: 'Colora????o Fantasia',
                        value: 385.90,
                        icon: <Palette size={20} weight="fill" />
                    },
                    {
                        name: 'Descolora????o',
                        value: 295.90,
                        icon: <Palette size={20} weight="fill" />
                    },
                    {
                        name: 'Botox',
                        value: 185.90,
                        icon: <Drop size={20} weight="fill" />
                    },

                ]}
              />
              <Text fontWeight='semibold' color='cadetBlue.500' mt={8} fontSize={{sm: 'sm', md: 'md'}}>Produtos</Text>
              {jobs.length <= 0 || jobs.every(job => job === 85.9)
                ?
                <Flex alignItems='center' mt={4}>
                  <Text mr={1} fontSize={{sm: 'sm', md: 'md'}}>Adicione servi??os para checar os produtos!</Text>
                  <SmileyWink size={20} weight="fill"/>
                </Flex>
                :
                <Grid 
                    gridTemplateColumns={{sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
                    gap={4}
                    mt={4}
                >
                  {jobs.some(job => job === 105.90) &&
                    <Product 
                      product="Creme hidrata????o profunda L'Or??al"
                      icon={<Browser size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 155.90) &&
                    <Product 
                      product="Creme nutri????o profunda L'Or??al"
                      icon={<Browser size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 35.90) &&
                    <Product 
                      product="Shampoo energizante Daterra"
                      icon={<HandSoap size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 35.90) &&
                    <Product 
                      product="Condicionador energizante Daterra"
                      icon={<HandSoap size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 25.90) &&
                    <Product 
                      product="Leave-in Daterra"
                      icon={<FlowerLotus size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 285.90) &&
                    <Product 
                      product="Keraton Loiro 50"
                      icon={<PaintBucket size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 385.90) &&
                    <Product 
                      product="Kamale??o Color Polvo"
                      icon={<PaintBucket size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 295.90) &&
                    <Product 
                      product="??gua Oxigenada"
                      icon={<Drop size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 295.90) &&
                    <Product 
                      product="Tonalizante branco Kamale??o Color"
                      icon={<PaintBucket size={24} weight="duotone" />}
                    />
                  }
                  {jobs.some(job => job === 185.90) &&
                    <Product 
                      product="L'Or??al Fiberceutic"
                      icon={<Browser size={24} weight="duotone" />}
                    />
                  }
                </Grid>
              }
              <Flex mt={8} justifyContent='end'>
                <FormControl display='flex' alignItems='end' w='fit-content'>
                    <FormLabel fontWeight='semibold' color='cadetBlue.500'>Valor total R$</FormLabel>
                    <Input variant='flushed' value={totalValue} w='55%' onChange={(e) => setTotalValue(e.target.value)} />
                </FormControl>
              </Flex>
            </ModalBody>
            <ModalFooter>
                <Button mr={3} onClick={onClose} colorScheme='gunmetal'>
                    Cancelar
                </Button>
                <Button colorScheme='cadetBlue'>
                    Adicionar
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>}
      </>
    )
}