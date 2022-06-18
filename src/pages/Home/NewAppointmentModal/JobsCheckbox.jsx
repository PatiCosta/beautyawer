import { Badge, Box, Flex, Grid, Text, useCheckbox, useCheckboxGroup } from "@chakra-ui/react"
import { forwardRef, useCallback } from "react"

function CheckBoxCard(props) {
    const { getInputProps, getCheckboxProps } = useCheckbox(props)

    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          borderWidth="1px"
          borderLeftRadius="3xl"
          borderRightRadius='md'
          boxShadow="sm"
          _checked={{
            bg: "cadetBlue.800",
            borderColor: "cadetBlue.800",
            color: 'ghostWhite'
          }}
          _disabled={{
            opacity: '0.8'
          }}
          p={2}
        >
          {props.children}
        </Box>
      </Box>
    )
}

const JobsCheckboxBase = ({jobsData, handleCheck, defaultValue, isDisabled}, ref) => {
  const handleChange = useCallback((e) => {
    handleCheck(e)
  }, [handleCheck])

  const { getCheckboxProps } = useCheckboxGroup({
      name: "job_id",
      defaultValue: defaultValue ? defaultValue : null,
      onChange: handleChange,
      ref: ref
  })

  return (
      <Grid 
            gridTemplateColumns={{sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
            gap={4}
            mt={4}
        >
      {jobsData.map((job) => {
          const checkbox = getCheckboxProps({ value: job.value })
          return (
              <CheckBoxCard key={job.name} {...checkbox} isDisabled={isDisabled}>
                  <Flex alignItems='center'>
                    <Flex
                        bgColor='ghostWhite'
                        p={3}
                        color='cadetBlue.800'
                        borderRadius='50%'
                        alignItems='center'
                      >
                        {job.icon}
                    </Flex>
                    <Box textAlign='center' ml={4} flex='1'>
                        <Text fontWeight='bold' fontSize='sm'>{job.name}</Text>
                        <Badge variant="subtle" colorScheme='cadetBlue'>
                            {
                                new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(job.value)
                            }
                        </Badge>
                    </Box>
                  </Flex>
              </CheckBoxCard>
          )
      })}
      </Grid>
  )
}

export const JobsCheckbox = forwardRef(JobsCheckboxBase)