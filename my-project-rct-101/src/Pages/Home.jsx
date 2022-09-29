import {Box,Image,Text,Input,InputGroup,InputLeftElement,HStack, SimpleGrid,Heading, VStack, GridItem,Grid,Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,Button,
    PopoverAnchor,} from "@chakra-ui/react"
import {Search2Icon,ArrowDownIcon,StarIcon,AddIcon} from "@chakra-ui/icons"
import { left } from "@popperjs/core";
import styles from "./Home.module.css"
import Dataarray from "../Database/database"


function AddtoFavourate(){
   return(
        console.log('gvg')
    // <StarIcon w='30px' h='30px' color='red.500' >
    
    // </StarIcon>
    
   )
}


function Home(){
    return(
        <>




     <Box w="100%">
            <Image className="home-image" sx={{position:"relative"}} boxSize='100%' height={500} src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></Image>
            {/* <Input className="home-text" sx={{position:"absolute", top:"60%", left:"25%"}} htmlSize={100} width='auto'  variant='filled'></Input> */}
            
            <Heading sx={{color:"white",position:"absolute", top:"300px", left:"25%"}} as='h1' size='3xl'>unsplash</Heading>
            <Heading sx={{color:"white",position:"absolute", top:"370px", left:"25%"}} size='sm'><span>The internet’s source for visuals.</span><br></br><span>Powered by creators everywhere.</span></Heading>
            <Text  sx={{color:"white",position:"absolute", top:"470px", left:"25%"}}>Trending:flower,wallpapers,backgrounds,happy,love</Text>
           


            <Box sx={{position:"absolute", top:"425px", left:"25%"}}   variant='filled'>
        <InputGroup>
            <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
            />
            <Input type='text' variant='filled'  htmlSize={100} width='auto'  placeholder='Search photos' />
        </InputGroup>
        </Box>
            </Box>
 

            <Grid templateColumns='repeat(3, 1fr)'  gap={3}>
            {Dataarray.map((img)=>(
                <Grid sx={{margin:'auto'}}>
               
                <GridItem mt='10'>
                <Box bg='teal.50' boxSize={450} >
                <Image boxSize='sm' src={img.YVj9w_src} m='auto'></Image>
                <Text>Image By:{img.N2odk}</Text>
                <Box>
                <HStack spacing='24px' justifyContent='space-evenly' mt='2'>
                <Popover>
  <PopoverTrigger>
    <Button><AddIcon></AddIcon></Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>
  <StarIcon w='20px' h='20px' color='gray.500' onClick={AddtoFavourate}>
    
  </StarIcon>
  <AddIcon w='20px' h='20px'></AddIcon>
  <ArrowDownIcon w='20px' h='20px' >
    
  </ArrowDownIcon>
</HStack>
                </Box>
                </Box>
               
                
               
                </GridItem>
                
                
               
                {/* <Text>{img.lXK9Z}</Text> */}
                </Grid>
               
            ))}
                    
            </Grid>
        </>  
        
/* <Box
  
  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "45%",
        margin: "auto",
       
      }}
  >
    {array.map((link)=>(
 
      <Box
     
      ><Box>{link.title}</Box></Box>
    ))}
    
  </Box> */
        





//  {links.map((link)=>(
 
//     <NavLink
//      className={({ isActive }) => {
//           return isActive ? styles.active : styles.default;
//         }}
//         key={link.path}
//         to={link.path}
//         end
//     ><Box>{link.title}</Box></NavLink







    )
}

export default Home;