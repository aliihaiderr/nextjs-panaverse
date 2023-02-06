'use client';
import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
    StackProps
  } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

interface FeatureProps extends StackProps{
    blackh:string;
    blueh:string;
}

export function MainHeader(props:FeatureProps){
   const {blackh,blueh,children} =props;
   const router =useRouter();
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
                py={{ base: 20, md: 28 }}
                mt={'175px'}>

                <Heading
                    fontWeight={500}
                    fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                    lineHeight={'100%'}>
                    {blackh}{' '}
                    <Text as={'span'} color={'blue.400'}>
                    {blueh}
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'} fontSize={'20px'}>
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
      </Container>

      </motion.div>
    )
  }


