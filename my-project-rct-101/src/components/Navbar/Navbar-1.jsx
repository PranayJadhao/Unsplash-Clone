import {Container,InputLeftElement,InputGroup,Box,HStack,Image,Input,Text,Button} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons"
function Navbar1() {
return (
     <Box boxSize='90%'  ml='5%' >
    <Box >
    <HStack spacing='40px' alignItems='center'>
    {/* <Box > */}
    <Image  boxSize='50px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAAAOVBMVEX///8AAACHh4dZWVlTU1Pt7e3p6elAQEBISEiurq7Kysr19fW2trYyMjI1NTX5+fmamppvb2+hoaF424cHAAAAmklEQVR4nO3WSxKCMABEQcQAUf7c/7BegGRhRbNI936q3nK6DgAAAAD4n3l5pS1zpapxfaStY62qKVM1qVKlSpUqVapUqVLVXNWWqdpqVe3vnL1SFQC04Ijh1jlkRsN5P4pHoao+cVZitiomVr0qVapUqVKlSpUqVaqar/qOKlWqVKlSpUqVKlWq2qm6wrOccBWqAgAAAADg1z79PBXPnLczwAAAAABJRU5ErkJggg=="></Image>
    {/* </Box> */}

    <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input type='text' variant='filled' placeholder='Search photos' borderRadius={50}/>
  </InputGroup>

<Box>
<HStack spacing='40px' alignItems='center'>
<Text>
  Explore
</Text>
<Text>
  Advertise
</Text>
<Text>
  Blog
</Text>
<Text>
Login
</Text>
<Text>
 Signup
</Text>
<Button>
  Submit
</Button>
</HStack>
</Box>
</HStack>
    </Box>
 
     </Box>
)
}
export default Navbar1;