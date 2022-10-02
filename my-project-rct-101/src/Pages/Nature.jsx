
import {Heading,Grid,GridItem,Box,Image,Text,HStack,IconButton, } from "@chakra-ui/react"
import data_nature from "../Database/data_nature"
import {AddIcon,StarIcon,ArrowDownIcon} from "@chakra-ui/icons"
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




function Nature(){
    return(
        // <Heading>Wallpaper Page</Heading>

<Box>
        <Grid templateColumns='repeat(3, 1fr)'  gap={3}>
        {data_nature.map((img)=>(
            <Grid sx={{margin:'auto'}}>
           
            <GridItem mt='10'>
            <Box bg='teal.50' boxSize={450} >
            <Image boxSize='sm' src={img.YVj9w_src} m='auto'></Image>
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


</Box>
    )
}
export default Nature