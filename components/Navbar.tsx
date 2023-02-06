'use client';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Stack,
  HStack,
  Link,
  Image,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon  } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

// const Links = ['Home','About', 'Course', 'Blog'];
const Links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Course', href: '/course' },
  { name: 'Blog', href: '/blog' }
];

const NavLink = ({ children,href }: { children: ReactNode, href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}
    >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router=useRouter();
  return (
      <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4} position={'fixed'} top={'0'} width={'100%'}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box w={'100px'} h={'50px'}>
            <Link href='/'>
              <Image src='/icon/panalogo.png' alt='panaverse' />
            </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              {Links.map(({ name, href }) => (
                 <NavLink key={name} href={href}>{name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              rounded={'full'}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.600' }}
              px={6}
              onClick={()=>router.push('/contactus')}
              >
              Contact Us
            </Button>
            <Button onClick={toggleColorMode} rounded={'full'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
              {Links.map(({ name, href }) => (
                <NavLink key={name} href={href}>{name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}