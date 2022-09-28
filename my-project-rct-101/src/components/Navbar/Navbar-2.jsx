import {Container,Box,HStack,Image,Input,Text,Button} from "@chakra-ui/react"

function Navbar2() {
    return (
         <Box boxSize='100%'  ml='5%'  >
        <HStack spacing='40px' alignItems='center'>
  <Text >
    Editorial
  </Text>
  <Text>
    Featured Travel
  </Text>
  <Text>
    Current Events
  </Text>
  <Text >
    Wallpaper
  </Text>
  <Text>
    3D renders
  </Text>
  <Text>
    Textures & patterns
  </Text>
  <Text >
    Experimental
  </Text>
  <Text>
    Architecture
  </Text>
  <Text>
    Nature
  </Text>
  <Text >
    Bussiness & Work
  </Text>
  <Text>
    Fashion
  </Text>
  {/* <Text>
    Film
  </Text> */}
</HStack>
       
        </Box>
    )
    }
    export default Navbar2;