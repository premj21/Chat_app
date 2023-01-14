import { Box } from '@chakra-ui/react';
import React from 'react'
import { ChatState } from './context/Chatprovider'
import SideDrawer from './SideDrawer';
import MyChats from './MyChats'; 
import ChatBox from './ChatBox'

const Chatpg = () => {
  return (
    <div style={{width:'100%'}}>
    <SideDrawer/>
     <Box
     d='flex'
     justifyContent='spcae-between'
     w='100%'
     h='91.5vh'
     >
       <MyChats/>
      <ChatBox/>
     </Box>
     
    </div>
  )
}

export default Chatpg
