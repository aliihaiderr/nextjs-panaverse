'use client';
import { MainHeader } from "@/components/MainHeader";
import { Headings , ProgramStudy } from "@/components/Headings";
import { CourseHeader } from "@/components/CourseHeader";
import { QuarterCard } from "@/components/QuarterCard";

import { Stack} from "@chakra-ui/react";



  export default function Course(){
    return(
        <>

        <MainHeader blackh="Certified Web 3.0 and Metaverse Developer" blueh="A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar">
              Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
        </MainHeader>

        <ProgramStudy />

        <Headings blackh="Core Courses" blueh="Common in All Specializations">
          Every participant of the program will start by completing three core courses.  
        </Headings>

        <Stack spacing={{md: '15px', lg:'30px' }}
          direction={{ base: 'column', md: 'row' }}
          ml={{base:'0px',lg:'220px'}}
          >
            <QuarterCard src='/icon/javascript.png' qh="Quarter I" link="/more">
            CS-101: OOP Using TypeScript
            </QuarterCard>
            <QuarterCard src='/icon/develop.png' qh="Quarter II" link="/more">
            W2-201: Develop Planet-Scale Apps
            </QuarterCard>
            <QuarterCard src='/icon/dollar.png' qh="Quarter III" link="/more">
            $-101: Dollar Making Bootcamp
            </QuarterCard>
        </Stack>

        <Headings blackh="Specialized" blueh="Tracks">
          After completing the first three quarters the participants will select one or more specializations consisting of two courses each.
        </Headings>

        <CourseHeader blackh='Web 3.0 (Blockchain) &' blueh='Metaverse Specialization' src='/icon/blockchain.png'>
        This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
        </CourseHeader>
        
        <Stack spacing={{md: '15px', lg:'30px' }}
          direction={{ base: 'column', md: 'row' }}
          ml={{base:'0px',lg:'400'}}
          >
            <QuarterCard src='/icon/web3.png' qh="Quarter IV" link="/more">
            W3-351: Develop Smart Contracts & Web 3.0 Dapps
            </QuarterCard>
            <QuarterCard src='/icon/vr.png' qh="Quarter V" link="/more">
            MV-361: Develop Open Virtual & Augmented Metaverse Experiences
            </QuarterCard>
        </Stack>

        <CourseHeader blackh='Artificial Intelligence (AI) &' blueh='Deep Learning Specialization' src='/icon/mind.png'>
        The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
        </CourseHeader>
        
        <Stack spacing={{md: '15px', lg:'30px' }}
          direction={{ base: 'column', md: 'row' }}
          ml={{base:'0px',lg:'400'}}
          >
            <QuarterCard src='/icon/python.png' qh="Quarter IV" link="/more">
            AI-351: Develop AI APIs & Python Programming
            </QuarterCard>
            <QuarterCard src='/icon/ai.png' qh="Quarter V" link="/more">
            AI-361: Deep Learning with Tensorflow and MLOps
            </QuarterCard>
        </Stack>

        <CourseHeader blackh='Cloud Native Computing' blueh='Specialization' src='/icon/cloud.png'>
        The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
        </CourseHeader>
        
        <Stack spacing={{md: '15px', lg:'30px' }}
          direction={{ base: 'column', md: 'row' }}
          ml={{base:'0px',lg:'400'}}
          >
            <QuarterCard src='/icon/k8s.png' qh="Quarter IV" link="/more">
            CN-351: Certified Kubernetes Application Developer (CKAD)
            </QuarterCard>
            <QuarterCard src='/icon/devcloud.png' qh="Quarter V" link="/more">
            CN-361: Developing Multi-Cloud APIs Using CDK For Terraform
            </QuarterCard>
        </Stack>

        <CourseHeader blackh='Ambient Computing &' blueh='IoT Specialization' src='/icon/smart-home.png'>
        The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.
        </CourseHeader>
        
        <Stack spacing={{md: '15px', lg:'30px' }}
          direction={{ base: 'column', md: 'row' }}
          ml={{base:'0px',lg:'400'}}
          >
            <QuarterCard src='/icon/device.png' qh="Quarter IV" link="/more">
            AC-351: Ambient Computing with Voice Assistants & Matter Devices
            </QuarterCard>
            <QuarterCard src='/icon/programming.png' qh="Quarter V" link="/more">
            AC-361: Embedded Programming using C and Rust
            </QuarterCard>
        </Stack>

        <CourseHeader blackh='Genomics &' blueh='Bioinformatics Specialization' src='/icon/genome.png'>
        Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.
        </CourseHeader>
        
        <Stack spacing={{md: '15px', lg:'30px' }}
          direction={{ base: 'column', md: 'row' }}
          ml={{base:'0px',lg:'400'}}
          >
            <QuarterCard src='/icon/biopython.png' qh="Quarter IV" link="/more">
            Bio-351: Python for Biologists
            </QuarterCard>
            <QuarterCard src='/icon/biopython.png' qh="Quarter V" link="/more">
            Bio-361: Bioinformatics with Python
            </QuarterCard>
        </Stack>

        <CourseHeader blackh='Network Programmability &' blueh='Automation Specialization' src='/icon/connected-world.png'>
        More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
         </CourseHeader>
        
        <Stack spacing={{md: '15px', lg:'30px' }}
          direction={{ base: 'column', md: 'row' }}
          ml={{base:'0px',lg:'400'}}
          >
            <QuarterCard src='/icon/cisco.png' qh="Quarter IV" link="/more">
            NPA-351: CCNA 200-301 Network Certification
            </QuarterCard>
            <QuarterCard src='/icon/net-pro.png' qh="Quarter V" link="/more">
            NPA-361: Network Programmability & Automation
            </QuarterCard>
        </Stack>
        </> 
    )
  }