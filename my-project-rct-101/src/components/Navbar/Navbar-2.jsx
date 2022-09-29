import {Container,Box,HStack,Image,Input,Text,Button} from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css"

const links=[
  { path: "/editorials", title: "Editorials" },
  { path: "/featuredTravel", title: "Featured Travel" },
  { path: "/currentEvents", title: "Current Events" },
  { path: "/wallpaper", title: "Wallpaper" },
  { path: "/3dRenders", title: "3D renders" },
  { path: "/textureAndPatterns", title: "Textures & patterns" },
  { path: "/experimental", title: "Experimental" },
  { path: "/architecture", title: "Architecture" },
  { path: "/nature", title: "Nature" },
  { path: "/bussinessAndWork", title: "Bussiness & Work" },
  { path: "/fashion", title: "Fashion" }
]



function Navbar2() {
    return (
        <Box  boxSize='90%'  ml='5%' >
          <HStack spacing='40px' alignItems='center'>
          <Box
  
  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // width: "45%",
        margin: "auto",
       
      }}
      boxSize='90%'
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
          </HStack>
        </Box>
    )
    }
    export default Navbar2;