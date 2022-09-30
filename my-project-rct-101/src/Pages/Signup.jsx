import React from "react";
import {Box,Flex,Image,Heading,Text,  FormControl,
    FormLabel,
    FormErrorMessage,Button,
    FormHelperText,Grid,Input,
    GridItem,
    Container,} from "@chakra-ui/react"
import {EmailIcon} from "@chakra-ui/icons"










function Signup(){
    return(
        <>
        <Flex justifyContent='space-evenly'>

      
    <Box>
        <Image boxSize={"xl"} src='https://images.unsplash.com/photo-1664421182297-568427dda2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></Image>
    
        <Image sx={{color:"black",position:"absolute", top:"150px", left:"13%"}} boxSize='100' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAAAOVBMVEX///8AAACHh4dZWVlTU1Pt7e3p6elAQEBISEiurq7Kysr19fW2trYyMjI1NTX5+fmamppvb2+hoaF424cHAAAAmklEQVR4nO3WSxKCMABEQcQAUf7c/7BegGRhRbNI936q3nK6DgAAAAD4n3l5pS1zpapxfaStY62qKVM1qVKlSpUqVapUqVLVXNWWqdpqVe3vnL1SFQC04Ijh1jlkRsN5P4pHoao+cVZitiomVr0qVapUqVKlSpUqVaqar/qOKlWqVKlSpUqVKlWq2qm6wrOccBWqAgAAAADg1z79PBXPnLczwAAAAABJRU5ErkJggg=='></Image>
    
        <Heading sx={{color:"black",position:"absolute", top:"300px", left:"15%"}} as='h1' size='3xl'>Creation <br></br>start Here</Heading>
            <Heading sx={{color:"black",position:"absolute", top:"470px", left:"15%",alignItems:'start'}} size='sm'><span>Access 4,396,064 free,</span><br></br><span> high-resolution photos you can’t find anywhere else</span></Heading>
            <Text  sx={{color:"black",position:"absolute", top:"650px", left:"15%"}}>Uploaded 2 days ago by Good Faces</Text>
    
    </Box>
    
    
    
    
    <Box>
    <Container size='xl'>

 
        <FormControl>
        <Heading>Join Unsplash</Heading>
        <Text>Already have an account?<span>Login</span></Text>

        <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Continue with Email
  </Button>
  <Heading>OR</Heading>

  <Grid templateColumns='repeat(2, 1fr)' gap={4}>
    <GridItem colSpan={1}>
    <FormLabel>First name</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={1}>
    <FormLabel>Last name</FormLabel>
  <Input type='text' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>Email address</FormLabel>
  <Input type='email' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>Username<span color="black.100">(only letters, numbers, and underscores)</span></FormLabel>
  <Input type='email' />
    </GridItem>

    <GridItem colSpan={2}>
    <FormLabel>Password<span> (min. 8 char)</span></FormLabel>
  <Input type='password' />
    </GridItem>

    <GridItem colSpan={2} w='full'>
        <Button w='full' bg='black' color='white'>Join</Button>
    </GridItem>
    
  </Grid>
        </FormControl>


        <Text>By joining, you agree to the <span color='blue'>Terms</span> and<span color='blue'> Privacy Policy.</span></Text>
        </Container>
    </Box>

  
    </Flex>
   
        </>
    )
}
export default Signup;