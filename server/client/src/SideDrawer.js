import React, { useState } from 'react'
import { Box, Button, Tooltip,Text, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Input, useToast } from '@chakra-ui/react';
import {BellIcon, ChevronDownIcon} from '@chakra-ui/icons';
import { IconButton, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'; 
import Profile from './Profile'; 
import ChatLoading from './ChatLoading';

const SideDrawer =  () => {
   const {loading ,setloading} = useState(true); 
    const {isOpen,onOpen,onClose} = useDisclosure();
   const toast  = useToast(); 



    const handlesearch = async () =>{
        if(!search){
            toast({
        title: "Enter something in search",
        status:"warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return 
        }

        // try {
        //     const config ={
        //         headers:{
        //             Authorization:`Bearer ${user.token}`
        //         },

        //     };
        //     const {data}  = await axios.get(`/api/user?search=${search}`,config); 


            
        // } catch (error) {
            
        // }




 
    }

    
    const [search,setsearch]  = useState(); 
    // const [searchreslt,setsearchreslt] = useState([]); 
    // const [loading,setloading] = useState(false); 
    // const [loadingChat,setloadingChat] = useState(); 


  return (
    <>
    <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    bg="white"
    w="100%"
    p="5px 10px 5px 10px"
    boderWidth="5px"
    > 
        <Tooltip label='Search Users to Chat' hasArrow placement='bottom-end'>
        <Button variant='ghost' onClick={onOpen}> 
        <i class="fa-solid fa-magnifying-glass"> </i>
        <Text display={{base:"none",md:"flex"}} px='4'>Seacrh User</Text>
            </Button>   
            </Tooltip>
        <Text fontSize="2xl" fontfamily="Work sans">Talk-More</Text>
        <div>
        <Menu>
            <MenuButton p={1}>
                <BellIcon fontSize='2xl' m={1}/>
            </MenuButton>
            {/* {<MenuList/>} */}
            
             <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
            <Avatar size="sm" cursor='pointer' name='prem' />
            </MenuButton>
            <MenuList>
             <Profile>
            <MenuItem>My Profile</MenuItem>
            </Profile>
            <MenuDivider/>
            <MenuItem>Logout</MenuItem>  
        </MenuList>
        </Menu>

</div>
    </Box>

 
    <Drawer
     placement='left'
     onClose={onClose}
     isOpen={isOpen}>
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerHeader borderBotttomWidth="1px">
                Search Users
            </DrawerHeader>

             <DrawerBody>
            <Box
            display="flex"
            pb={2}
            >
         <Input 
         placeholder='Search By Name'
         mr={2}
         value={search}
         onChange={(e)=>setsearch(e.target.value)}
         />
        <Button 
        onClick={handlesearch}
        >Go </Button>
            </Box>
        {loading ? <ChatLoading/> : <span>Results</span>}

        </DrawerBody>

        </DrawerContent>

    </Drawer>

</>
    

  )
}

export default SideDrawer
