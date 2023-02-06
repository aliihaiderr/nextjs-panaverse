'use client';
import { Headings } from "@/components/Headings"
import { CommunityCard } from "@/components/CommunityCard";
import { Stack,HStack,Image, Center} from "@chakra-ui/react"


export default function About(){
    return(
    <>
     
      <Headings blackh="PANAVERSE DAO" blueh=" ABOUT US">
                Panaverse DAO (Decentralized Autonomous Organization) is a leading & fastly growing community that 
                provides a platform for individuals and organizations to connect, collaborate and create a better future. 
                With its innovative course, Panaverse empowers its members to bring their ideas 
                to IT sector and make a positive impact in the world. Whether it`s for personal growth, community 
                building, or global change, Panaverse is dedicated to helping its users achieve their goals. 
                With a diverse and supportive community, Panaverse is more than just a platform – it`s a 
                movement for positive change. Panaverse also offers a comprehensive one & quarter year course on the cutting-edge technologies.
                This course is designed to provide its participants with the necessary skills and knowledge to thrive in the ever-evolving technology landscape. 
                The curriculum covers a wide range of topics and includes hands-on experience, expert instructors, 
                and opportunities for professional networking.
      </Headings>
      
      <Headings blackh="Community" blueh="Founder & Contributors">
          The Panaverse community was founded by a team of visionary leaders who saw the potential 
          for using technology for positive change. The community has since grown with the contributions 
          of a diverse group of individuals and organizations who share the same passion for creating a 
          better future. The community’s founders and contributors are dedicated to empowering individuals 
          and organizations to bring their ideas to life and make a positive impact on the world.
      </Headings>

      <CommunityCard qh="Zia Ullah Khan" src="sirzia.jpg" link="https://www.linkedin.com/in/ziaukhan/?originalSubdomain=pk">
      COO PIAIC & Contributor
      </CommunityCard>

      <Stack spacing={{md: '15px', lg:'30px' }}
        direction={{ base: 'column', lg: 'row' }}
        ml={'30px'}
        >
        <CommunityCard qh="HIRA KHAN" src="misshira.jpg" link="https://www.linkedin.com/in/hira-khan-76523540/?originalSubdomain=pk">
        Community Founder
        </CommunityCard>
        <CommunityCard qh="ZEESHAN HANIF" src="sirzeeshan.jpg" link="https://www.linkedin.com/in/zeeshanhanif/?originalSubdomain=pk">
        Community Founder
        </CommunityCard>
        <CommunityCard qh="DANIYAL NAGORI" src="sirdaniyal.jpg" link="https://www.linkedin.com/in/daniyalnagori/?originalSubdomain=pk">
        Community Contributor
        </CommunityCard>
        <CommunityCard qh="ADIL ALTAF" src="siradil.jpg" link="https://www.linkedin.com/in/adilaltaf/">
        Community Contributor
        </CommunityCard>
      </Stack>

   

      <Headings blackh=" Strategic" blueh="Partners ">
          Panverse DAO Powered By PanaCloud & Saylani Trust
      </Headings>

      <Center>
          <HStack spacing={'50px'} mb={'30px'}>
            <Image 
              src="/icon/panacloud.png" 
              alt="PNG"
              height={{base: '80px', lg: '80px'}}
              width={{base: 'full', lg: 'full'}}
              />
            <Image 
              src="/icon/saylani.png" 
              alt="PNG" 
              height={{base: '80px', lg: '80px'}}
              width={{base: 'full', lg: 'full'}}
              />
          </HStack>
      </Center>
    
    </>
    )
}