'use client';
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function StudentTestimonials() {
  return (
    <Box bg={useColorModeValue('gray.200', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>What Our Students Speak About Us</Heading>
          <Text>We have experience in educating youth in technology for 25 years.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Student Engagement and Interactivity</TestimonialHeading>
              <TestimonialText>
                  Overall satisfaction with the course structure, duration, and outcomes.
                  Level of interactivity and engagement during the classes.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                  '/img-hamza.jpg'
              }
              name={'Ali Hamza'}
              title={'Web Developer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Effective Course Outcomes</TestimonialHeading>
              <TestimonialText>
              Quality and effectiveness of the teaching methods used.
              Adequacy of course materials, including reading materials and assignments.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                  '/img-ali.jpeg'
              }
              name={'Ali Haider'}
              title={'Software  Engineer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Course Materials</TestimonialHeading>
              <TestimonialText>
              Relevance of the course content to current industry trends and future prospects.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/img-zubair.jpg'
              }
              name={'Zubair'}
              title={'Frontend Developer'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}