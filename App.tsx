import { Layout } from './components/Layout';
import { 
  
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import {Card} from './components/Card'





function App() {
  return (
  
   <ChakraProvider> 
    <Layout>
      <Box padding='25px'>
        <Card />
      </Box>
    </Layout>
  </ChakraProvider>
   
  );
}

export default App;
