import {Box,Image,Text,Input,InputGroup,InputLeftElement,HStack, SimpleGrid,Heading, VStack, GridItem,Grid,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow, Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    PopoverCloseButton,Button,IconButton,
    PopoverAnchor,} from "@chakra-ui/react"
import {Search2Icon,ArrowDownIcon,StarIcon,AddIcon} from "@chakra-ui/icons"
import { left } from "@popperjs/core";
import styles from "./Home.module.css"
import Dataarray from "../Database/database"


function AddtoFavourate(){
   return(
  
 alert("This Picture is added to your Favourate List.")
    
    
   )
}
function Add(){
return(
    alert("This Picture is added to your Watch List.")
)
}

function Download(){
return(
    alert("You will notify when file is download.")
)
}

function Home(){
    return(
        <>




     <Box w="100%">
          
     <Box size='md' w='50%' p='5' lineHeight={10} margin='auto'>
            <Text>Editorials</Text>
            <Heading>Explore Unsplash photos</Heading>
            <Text>Unsplash has over a million free high-resolution photos. Explore these popular photo categories on Unsplash. All photos here are free to download and use under the Unsplash License.</Text>
            <Heading as='h4' size='md'>Browse thousands of free images on Unsplash</Heading>
           </Box>


            </Box>
 

            <Grid templateColumns='repeat(3, 1fr)'  gap={3}>
            {Dataarray.map((img)=>(
                <Grid sx={{margin:'auto'}}>
               
                <GridItem mt='10'>
                <Box bg='teal.50' boxSize={470} >
                <Image boxSize='sm' src={img.YVj9w_src} m='auto'></Image>
                <Text fontWeight={30}>Image By:{img.N2odk}</Text>
                <Box>
                <HStack spacing='24px' justifyContent='space-evenly' mt='2'>


                 <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<AddIcon />}
                  onClick={Add}
                />

                  <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<StarIcon />}
                  onClick={AddtoFavourate}
                 
                />

                  <IconButton
                  variant='outline'
                  colorScheme='teal'
                  aria-label='Call Sage'
                  fontSize='20px'
                  icon={<ArrowDownIcon />}
                  onClick={Download}
                />









  
</HStack>
                </Box>
                </Box>
               
                
               
                </GridItem>
                
                
               
               
                </Grid>
               
            ))}
                    
            </Grid>
        </>  
        

 





    )
}

export default Home;