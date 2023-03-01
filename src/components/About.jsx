import { Box, Center, SimpleGrid, Image, Text, Link } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import "./DownArrow.css";
import "./ResumeButton.css";
import "./About.css";
import profile from "../images/profile pic.jpeg"

export const AboutMe = ({ skillsRef, aboutRef }) => {
    const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

    return (
        <Center mt={60} ref={aboutRef}>

            {isLargerThan900 ? 
            <SimpleGrid columns={2} spacing={0}>
                <Box>
                    <Image 
                        boxSize='500px'
                        height='650px'
                        objectFit='cover'
                        borderRadius='50% '
                        ml={100}
                        src={profile} alt='Abhishek Jha' />
                </Box>
                <Box color='white' mr={200} mt={150} minW={500}>
                    <Text fontFamily='helvetica' className='textStyle'>
                        {/* Hi I'm<strong style={{fontSize: "50px", color:"#6889FF"}}>Abhishek Jha</strong>  */}
                        Hi I'm Abhishek Jha
                    </Text>
                    
                    <Text fontSize='18px'>
                        A <strong style={{color:"#6889FF"}}>Full Stack Web Developer</strong> based in India. A creative coder who specializes in MERN stack. I make it my mission to design pixel-perfect websites or applications with optimized code that run blazing fast.
                    </Text>

                    <Link margin="auto" className='link' href="https://drive.google.com/uc?export=download&id=1VTMMOMyo0oJbkQMJwPYYc5SQXUIbxS7S" download="fw19_0566-Abhishek-Jha-Resume" target='_blank'>
                        <span>Resume</span>
                        <div class="wave"></div>
                    </Link>
                </Box>
            </SimpleGrid> 
            :
            <SimpleGrid columns={1} spacing={0}>
            <Box>
                <Image 
                    boxSize='300px'
                    height='650px'
                    objectFit='cover'
                    borderRadius='50'
                    src={profile} alt='Abhishek Jha' />
            </Box>
            <Box color='white' minW={300}>
                <Text fontFamily='helvetica' className='textStyle' fontSize={20}>
                    {/* Hi I'm<strong style={{fontSize: "40px", color:"#6889FF"}}>Abhishek Jha</strong> */}
                    Hi I'm Abhishek Jha
                </Text>
                
                <Text fontSize='14px' paddingLeft={15} paddingRight={15}>
                    A <strong style={{color:"#6889FF"}}>Full Stack Web Developer</strong> based in India. A creative coder who specializes in MERN stack. I make it my mission to design pixel-perfect websites or applications with optimized code that run blazing fast.
                </Text>

                <Link margin="auto" className='link' href="https://drive.google.com/uc?export=download&id=1VTMMOMyo0oJbkQMJwPYYc5SQXUIbxS7S" download="fw19_0566-Abhishek-Jha-Resume" target='_blank' >
                    <span>Resume</span>
                    <div class="wave"></div>
                </Link>
            </Box>
        </SimpleGrid>
            }
            {/* <Box mt={400} pos="absolute">
                <BsChevronDoubleDown 
                    color='#C668FF'    
                    size={40} 
                    cursor='pointer' 
                    className='bounce'
                    onClick={() => {
                        skillsRef.current.scrollIntoView(
                            {
                                behavior: "smooth",
                            }
                        )
                    }}
                />
            </Box> */}

        </Center>
    );
};

