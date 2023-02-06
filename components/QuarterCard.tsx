'use client';
import { StackProps,Center,Box,useColorModeValue,Image,Stack,Heading,Text,Button} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface FeatureProps extends StackProps {
    qh:string;
    src: string;
    link:string;
  }

export function QuarterCard(props: FeatureProps) {
    const { qh,src,link, children} = props;
    const router = useRouter();
    const handleClick=()=>{
        router.push(`${link}`)
    }
    return (
        <motion.div
        whileHover={{ scale: [null, 1.2, 1.1] }}
        transition={{ duration: 0.3 }}
        >
        <Center py={12} >
            <Box
                textAlign={'center'}
                role={'group'}
                p={6}
                maxW={{base:'280px',md:'340px'}}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={{base: '120px', md: '200px'}}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${src})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                    filter: 'blur(20px)',
                    },
                }}>
                <Image
                    rounded={'lg'}
                    align='center'
                    height={{base: '160px', md: '200px', lg: '230px'}}
                    width={{base: '200px', md: '200px', lg: '282px'}}
                    objectFit={'cover'}
                    src={src}
                    alt={'PNG'}
                />
                </Box>
                <Stack pt={10} align={'center'}>
                <Heading fontSize={{base: '1xl', lg: '2xl'}} fontFamily={'body'} fontWeight={500}>
                    {qh}
                </Heading>
                <Text fontWeight={500} color={'blue.500'}>
                    {children}
                </Text>
                <Stack direction={'row'} align={'center'}>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >   
                <Button rounded={'full'}  px={6} onClick={handleClick}>
                    Learn More
                </Button>
                </motion.div>

                </Stack>
                </Stack>
            </Box>
        </Center>
        </motion.div>
    );
  }