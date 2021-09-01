import React from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/core'

const Input: React.FC<ChakraInputProps> = (props) => {
  return (
    <ChakraInput
      height="50px"
      backgroundColor="#bfbfbf"
      focusBorderColor="#000000"
      borderRadius="sm"
      {...props}

    />
  )
}

export default Input;