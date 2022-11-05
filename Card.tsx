import {Box, Center, Input} from "@chakra-ui/react";
import {login} from "../services/login";
import DButton from "./DButton" 

export const Card = () => {
  return (
  
  <><Box backgroundColor="#98630B" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <DButton
          onClick={login} />
      </Center>
    </Box><Box backgroundColor="#8B0B98" borderRadius="25px" padding="15px">
        <Center>
          <h1>ABRA SUA CONTA AGORA!</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <DButton
            onClick={login} />
        </Center>
      </Box></>
        
        
      
    
      
  );
  };