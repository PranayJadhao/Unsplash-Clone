import {Container,InputLeftElement,InputGroup,Box,HStack,Image,Input,Text,Button} from "@chakra-ui/react"
import {Search2Icon,HamburgerIcon} from "@chakra-ui/icons"
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css"

const links = [

  { path: "/explore", title: "Explore" },
  { path: "/advertise", title: "Advertise" },
  { path: "/blog", title: "Blog" },
  { path: "/login", title: "Login" },
  { path: "/signup", title: "Signup" },
  { path: "/add", title: "Add Photo" },
];



function Navbar1() {
return (
<Box  boxSize='90%'  ml='5%' >
<HStack spacing='40px' alignItems='center'>

<Box>
<Image  boxSize='70px' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAMAAABmfEh9AAAAOVBMVEX///8AAACHh4dZWVlTU1Pt7e3p6elAQEBISEiurq7Kysr19fW2trYyMjI1NTX5+fmamppvb2+hoaF424cHAAAAmklEQVR4nO3WSxKCMABEQcQAUf7c/7BegGRhRbNI936q3nK6DgAAAAD4n3l5pS1zpapxfaStY62qKVM1qVKlSpUqVapUqVLVXNWWqdpqVe3vnL1SFQC04Ijh1jlkRsN5P4pHoao+cVZitiomVr0qVapUqVKlSpUqVaqar/qOKlWqVKlSpUqVKlWq2qm6wrOccBWqAgAAAADg1z79PBXPnLczwAAAAABJRU5ErkJggg=="></Image>
</Box>

<Box>
<InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input type='text' variant='filled' placeholder='Search photos' borderRadius={50} htmlSize={50} width='auto' mr='10px'/>
  </InputGroup>
</Box>



 
  <Box
  
  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "45%",
        margin: "auto",
       
      }}
  >
    {links.map((link)=>(
 
      <NavLink
       className={({ isActive }) => {
            return isActive ? styles.active : styles.default;
          }}
          key={link.path}
          to={link.path}
          end
      ><Box>{link.title}</Box></NavLink>
    ))}
    
  </Box>

<Button>
  Submit
</Button>
 <HamburgerIcon/>

</HStack>











   
     </Box>
)
}
export default Navbar1;