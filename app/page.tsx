import { HomeHeader,CourseIntro } from "@/components/HomeComponents";
import { Headings } from "@/components/Headings";
import StudentTestimonials from "@/components/Feedback"

export default function Home() {
  return (
    <>
    <HomeHeader blackh="Get Certified Web 3 &" blueh="Metaverse Developer" src=''>
    A One & Quarter Years Panaverse DAO Earn As You Learn Program Getting Ready For 
    The Next Generation Of The Internet Consolidated With Specialized Courses        
    </HomeHeader>
    
     <Headings blackh="DRIVE YOUR CAREER TO DIGITAL" blueh="TRANSFORMATION">
     A career in digital transformation requires skills in technology, A business strategy & innovation, making it a high-demand and rewarding field       
     </Headings>

     <CourseIntro blackh='Experience ' blueh='Web 3.0 & Metaverse' src='/icon/headset.png'>
     The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse
     will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, ambient computing, and more.         
     </CourseIntro>

     <CourseIntro blackh='The Program in a Nutshell ' blueh='Earn While You Learn' src='/icon/wallet.png'>
     In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program`s beginning        
     </CourseIntro>

     <Headings blackh="The Outcome For" blueh="Participants of the Program" >
     The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences,
     and APIs) that are marketed globally by the Panaverse DAO and, if they like, 
     will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). 
     This would give Pakistani professionals and students a fantastic opportunity to better their financial 
     situation while also giving the economy a much-needed boost by expanding software exports.
     </Headings>

     <StudentTestimonials />
    </>
  )
}