import React from 'react'
import { IconButton, useDisclosure,Image,Text } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

const Profile = ({user,children=true}) => {

  const pic = 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <div>
    {
     children ? (<span onClick={onOpen}>{children}</span>)
:(
    <IconButton
    display={{base:"flex"}}
    icon={<ViewIcon/>} 
    onClick={onOpen}
    ></IconButton>
)}

 <Modal size="lg"
 iscentered
 isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
        height="410px"
        >
          <ModalHeader
          fontSize="40px"
          fontFamily="work sans"
          display="flex"
          justifyContent="center"
          >Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          >
           <Image
           borderRadius="full"
           boxSize="150px"
           src={pic}
           alt='prem'
           >

           </Image>
           <Text
           fontSize={{base:"28px",md:"30px"}}
           fontFamily="work sans">
              PremJadhav378@gmail.com
           </Text>
         
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default Profile
