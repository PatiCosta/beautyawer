import { FormControl, FormLabel, forwardRef, Input } from "@chakra-ui/react";

export const DatePickerInput = forwardRef(({value, onClick, label}, ref) => (
    <FormControl display='flex' alignItems='end'>
      <FormLabel fontWeight='semibold' color='cadetBlue.500' fontSize={{sm: 'sm', md: 'md'}}>{label}</FormLabel>
      <Input size={{sm: 'sm', md: 'md'}} variant={{sm: 'flushed', md: 'flushed'}} onClick={onClick} ref={ref} value={value} />
    </FormControl>
  ))