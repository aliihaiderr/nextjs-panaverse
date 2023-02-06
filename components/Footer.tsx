'use client';
import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  Image,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram, FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/'}>Home</Link>
            <Link href={'/about'}>About Us</Link>
            <Link href={'/contactus'}>Contact Us</Link>
            <Link href={'/course'}>Course</Link>
            <Link href={'/blog'}>Blog</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align={'flex-start'}>
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.1] }}
            transition={{ duration: 0.3 }}
            >
            <Link href='/'>
            <Image 
              src='/icon/panalogo.png' 
              alt='panaicon'
              height={{base: '120px', lg: 'full'}}
              width={{base: 'full', lg: 'full'}}
              />
            </Link>
            </motion.div>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 Panaverse DAO. All Rights Reserved</Text>
          <Stack direction={'row'} spacing={6}>
              <SocialButton label={'GitHub'} href={'https://github.com/panaverse'}>
                <FaGithub />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/panaverse/'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/Panaverse_edu'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'Facebook'} href={'https://www.facebook.com/groups/panaverse'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'https://www.youtube.com/@panaverse'}>
                <FaYoutube />
              </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}