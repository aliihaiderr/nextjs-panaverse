'use client';
import {
    Container,
    Heading,
    Stack,
    Text,
    Box,
    StackProps,
    useColorModeValue
  } from '@chakra-ui/react';
import { motion } from "framer-motion";


interface FeatureProps extends StackProps{
    blackh:string;
    blueh:string;
}


// core and specialization course header

export function Headings(props:FeatureProps){
    const {blackh,blueh,children} =props;
    return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01]
          }}
        >
        <Container maxW={'5xl'}>
              <Stack
                  textAlign={'center'}
                  align={'center'}
                  spacing={{ base: 8, md: 10 }}
                  py={{ base: 12, md: 24 }}
                  >
  
                  <Heading
                      fontWeight={500}
                      fontSize={{ base: '2xl', md: '4xl' }}
                      lineHeight={'100%'}>
                      {blackh}{' '}
                      <Text as={'span'} color={'blue.400'}>
                      {blueh}
                      </Text>
                  </Heading>
                  <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: '1xl', md: '20px' }} textAlign={'justify'}>
                      {children}
                  </Text>
  
              </Stack>
        </Container>
        </motion.div>
      )
    }


export function ProgramStudy(){
    return(
            <Stack align={'center'}>
                <Box
                    bg={useColorModeValue('gray.200', 'gray.700')}   
                    textAlign={'justify'}
                    borderRadius="12px"
                    overflow="hidden"
                    boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);"
                    p="60px"
            >  
                    <Heading  textAlign={'center'} fontSize={{ base: '1xl', md: '2xl' }} mb='15px'>
                            Programe Of Study
                    </Heading>
                    
                    <Text color={'gray.500'} maxW={'4xl'} fontSize={{ base: '1xl', md: '20px' }}>
                            This curriculum is intended for beginners who want to learn software development 
                            from the ground up. The first three quarters are shared by all specializations and are
                            dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack 
                            Web 2.0 development. It is going to be a year & quarter-long hybrid programme that includes 
                            both onsite and online classes and is divided into five quarters of 13 weeks each.
                            The emphasis will be on hands-on learning by educating students to produce projects.
                            To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m.
                            (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes 
                            complemented by online Zoom laboratories and recorded videos.  
                    </Text>
                </Box>
            </Stack>
      )
    }