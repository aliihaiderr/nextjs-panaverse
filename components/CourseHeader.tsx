'use client';
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image,
    HStack,StackProps
  } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

interface FeatureProps extends StackProps{
    blackh:string;
    blueh:string;
    src:string;
}

export function CourseHeader(props:FeatureProps){
    const {blackh,blueh,src,children} =props;
    const router =useRouter();
    
    return (
      <Container maxW={'5xl'}>
        <HStack>
            <Flex w={'full'}>
                <Image src={src} alt='PNG'
                height={{base:'10rem' , sm: '14rem', md: '18rem'}}
                />
            </Flex>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>

                <Heading
                    fontWeight={500}
                    fontSize={{ base: '2xl', md: '3xl' }}
                    lineHeight={'100%'}>
                    {blackh}{' '}
                    <Text as={'span'} color={'blue.400'}>
                    {blueh}
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'5xl'} textAlign={'justify'} >
                    {children}
                </Text>
                <Stack spacing={6} direction={'row'}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'blue'}
                    bg={'blue.400'}
                    _hover={{ bg: 'blue.600' }}
                    onClick={() => {
                      window.location.href = 'https://portal.piaic.org/signup';
                    }}
                    >
                    Get Enrolled
                    </Button>
                </motion.div>
                </Stack>

            </Stack>
        </HStack>
      </Container>
    )
  }

