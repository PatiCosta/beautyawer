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
    Flex, 
    Text, 
    FormControl, 
    FormLabel, 
    Select, 
    Input,
    Box,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Grid
} from "@chakra-ui/react"
import { CalendarCheck, Browser, CaretDoubleDown, CaretDoubleUp, Circle, Crown, Drop, FlowerLotus, HandSoap, PaintBucket, Palette, Scissors, Shower, SmileyWink } from "phosphor-react"
import DatePicker from 'react-datepicker'
import {ptBR} from 'date-fns/locale'

import {DatePickerInput} from '../Home/NewAppointmentModal/DatePickerInput'

import "../../styles/react-datepicker.css";
import { JobsCheckbox } from "../Home/NewAppointmentModal/JobsCheckbox"

function Product({icon, product, status}) {
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
              <NumberInput size='sm' defaultValue={1} min={0} flex='.4' variant='flushed' isDisabled={status === 'completo'}>
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

export function ViewAppointment({isOpen, onClose, appointment}) {
    const [startDate, setStartDate] = useState(appointment.startDate)
    const [endDate, setEndDate] = useState(appointment.endDate)
    const [totalValue, setTotalValue] = useState(appointment.totalValue)

    const [jobs, setJobs] = useState(appointment.jobs)

    const handleCheckJob = useCallback((checkedValues) => {
        const formattedValues = checkedValues.map(value => Number(value))
        setJobs(formattedValues)

        const totalValue = formattedValues
        .reduce(((accumulator, currentValue) => accumulator + currentValue ), 0)

        setTotalValue(totalValue.toFixed(2).replace('.', ','))
    }, [])

    return (
      <>
        {isOpen && <Modal isOpen={isOpen} onClose={onClose} size={{sm: 'full', md: '3xl'}}>
          <ModalOverlay />
          <ModalContent bgColor='gunmetal.400' color='ghostWhite.500'>
            <ModalHeader>Visualizar agendamento</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex
                alignItems='center'
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  timeInputLabel="Horário:"
                  dateFormat="dd/MM/yyyy h:mm aa"
                  showTimeInput
                  locale={ptBR}
                  customInput={<DatePickerInput label='Início' />}
                  disabled={appointment.status === 'completo'}
                />
                <Text fontWeight='bold' mx={{sm: 4, md: 6}} fontSize={{sm: 'sm', md: 'md'}}>até</Text>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  timeInputLabel="Horário:"
                  dateFormat="dd/MM/yyyy h:mm aa"
                  showTimeInput
                  locale={ptBR}
                  customInput={<DatePickerInput label='Fim' />}
                  disabled={appointment.status === 'completo'}
                />
              </Flex>
              <FormControl mt={6} display='flex' alignItems='end' isDisabled={appointment.status === 'completo'}>
                <FormLabel fontWeight='semibold' color='cadetBlue.500' htmlFor='customer' fontSize={{sm: 'sm', md: 'md'}}>Cliente</FormLabel>
                <Select variant='flushed' id='customer' defaultValue={appointment.customer} placeholder='Selecione o cliente'>
                  <option value='Gabriel Alves'>Gabriel Alves</option>
                  <option value='Danilo Norcia'>Danilo Norcia</option>
                  <option value='Matheus Farias'>Matheus Farias</option>
                  <option value='Patrícia Costa'>Patrícia Costa</option>
                  <option value='Fernando Fenólio'>Fernando Fenólio</option>
                  <option value='Raphael Souza'>Raphael Souza</option>
                  <option value='Victória Andrade'>Victória Andrade</option>
                  <option value='Lucas Camargo'>Lucas Camargo</option>
                </Select>
              </FormControl>
              <Text fontWeight='semibold' color='cadetBlue.500' mt={8} fontSize={{sm: 'sm', md: 'md'}}>Serviços</Text>
              <JobsCheckbox 
                handleCheck={handleCheckJob}
                isDisabled={appointment.status === 'completo'}
                jobsData={[
                  {
                      name: 'Corte',
                      value: 85.90,
                      icon: <Scissors size={20} />
                  },
                  {
                      name: 'Hidratação',
                      value: 105.90,
                      icon: <Drop size={20} weight="fill" />
                  },
                  {
                      name: 'Nutrição',
                      value: 155.90,
                      icon: <Drop size={20} weight="fill" />
                  },
                  {
                      name: 'Lavagem',
                      value: 35.90,
                      icon: <Shower size={20} weight="fill" />
                  },
                  {
                      name: 'Finalização',
                      value: 25.90,
                      icon: <Crown size={20} weight="fill" />
                  },
                  {
                      name: 'Coloração',
                      value: 285.90,
                      icon: <Palette size={20} weight="fill" />
                  },
                  {
                      name: 'Coloração Fantasia',
                      value: 385.90,
                      icon: <Palette size={20} weight="fill" />
                  },
                  {
                      name: 'Descoloração',
                      value: 295.90,
                      icon: <Palette size={20} weight="fill" />
                  },
                  {
                      name: 'Botox',
                      value: 185.90,
                      icon: <Drop size={20} weight="fill" />
                  },

                ]}
                defaultValue={appointment.jobs}
              />
              <Text fontWeight='semibold' color='cadetBlue.500' mt={8} fontSize={{sm: 'sm', md: 'md'}}>Produtos</Text>
              {jobs.length <= 0 || jobs.every(job => job === 85.9)
                ?
                <Flex alignItems='center' mt={4}>
                  <Text mr={1} fontSize={{sm: 'sm', md: 'md'}}>Adicione serviços para checar os produtos!</Text>
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
                      product="Creme hidratação profunda L'Oréal"
                      icon={<Browser size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 155.90) &&
                    <Product 
                      product="Creme nutrição profunda L'Oréal"
                      icon={<Browser size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 35.90) &&
                    <Product 
                      product="Shampoo energizante Daterra"
                      icon={<HandSoap size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 35.90) &&
                    <Product 
                      product="Condicionador energizante Daterra"
                      icon={<HandSoap size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 25.90) &&
                    <Product 
                      product="Leave-in Daterra"
                      icon={<FlowerLotus size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 285.90) &&
                    <Product 
                      product="Keraton Loiro 50"
                      icon={<PaintBucket size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 385.90) &&
                    <Product 
                      product="Kamaleão Color Polvo"
                      icon={<PaintBucket size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 295.90) &&
                    <Product 
                      product="Água Oxigenada"
                      icon={<Drop size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 295.90) &&
                    <Product 
                      product="Tonalizante branco Kamaleão Color"
                      icon={<PaintBucket size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                  {jobs.some(job => job === 185.90) &&
                    <Product 
                      product="L'Oréal Fiberceutic"
                      icon={<Browser size={24} weight="duotone" />}
                      status={appointment.status}
                    />
                  }
                </Grid>
              }
              <Flex mt={8} justifyContent='end'>
                <FormControl display='flex' alignItems='end' w='fit-content' isDisabled={appointment.status === 'completo'}>
                    <FormLabel fontWeight='semibold' color='cadetBlue.500'>Valor total R$</FormLabel>
                    <Input variant='flushed' value={totalValue} w='55%' onChange={(e) => setTotalValue(e.target.value)} />
                </FormControl>
              </Flex>
            </ModalBody>
            <ModalFooter
              display='flex'
              alignItems='center'
              justifyContent='space-between'
            >
              <Flex>
                {appointment.status === 'completo'
                  ?
                  <Button colorScheme='cadetBlue' mr={2} isDisabled>
                      <Icon as={CalendarCheck} h={5} w={5} mr={2} />
                      Confirmado
                  </Button>
                  :
                  <Button colorScheme='tartOrange' mr={2}>
                      Confirmar agendamento
                  </Button>
                }
                <Button mr={3} onClick={onClose} colorScheme='gunmetal'>
                    Cancelar
                </Button>
              </Flex>
              {appointment.status !== 'completo' && <Button colorScheme='cadetBlue'>
                  Salvar
              </Button>}
              {appointment.status === 'completo' && <Button colorScheme='gunmetal'>
                  Fechar
              </Button>}
            </ModalFooter>
          </ModalContent>
        </Modal>}
      </>
    )
}