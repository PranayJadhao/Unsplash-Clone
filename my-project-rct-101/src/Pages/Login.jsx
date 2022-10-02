import { VStack,Container,Image, Grid,FormControl,FormLabel, GridItem,Heading,Text,Box,Button, Input } from "@chakra-ui/react";
import {Link} from "react-router-dom"



function Login(){
return(

    <Container maxW='2xl'  lineHeight={10}>
        <VStack size='2xl'>
        <Image  boxSize='100' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAAAOVBMVEX///8AAACHh4dZWVlTU1Pt7e3p6elAQEBISEiurq7Kysr19fW2trYyMjI1NTX5+fmamppvb2+hoaF424cHAAAAmklEQVR4nO3WSxKCMABEQcQAUf7c/7BegGRhRbNI936q3nK6DgAAAAD4n3l5pS1zpapxfaStY62qKVM1qVKlSpUqVapUqVLVXNWWqdpqVe3vnL1SFQC04Ijh1jlkRsN5P4pHoao+cVZitiomVr0qVapUqVKlSpUqVaqar/qOKlWqVKlSpUqVKlWq2qm6wrOccBWqAgAAAADg1z79PBXPnLczwAAAAABJRU5ErkJggg=='></Image>
        <Heading as='h3'>Login</Heading>
        <Text>Welcome Back</Text>

        <Box size='2xl'>
        <FormControl>

     
            <Grid templateColumns='repeat(3, 1fr)' gap={4} w='100%'>
                <GridItem colSpan={3}>
                    <Button bg='#1778F2' color='white'>Login with Facebook</Button>
                </GridItem>
           <GridItem colSpan={3}>
           <Text>OR</Text>
           </GridItem>

            <GridItem colSpan={3}>
            <FormLabel>Email</FormLabel>
            <Input type='text' />
            </GridItem>

            <GridItem colSpan={3}>
            <FormLabel>Password</FormLabel>
            <Input type='text' />
            </GridItem>

            <GridItem colSpan={3} w='full'>
           <Link to={`/`}><Button w='full' bg='black' color='white' >Login</Button></Link>
        
    </GridItem>

            </Grid>
            </FormControl>
        </Box>
        </VStack>
    </Container>
)
}

export default Login;