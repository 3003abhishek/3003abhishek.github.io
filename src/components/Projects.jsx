import { Center, Container, Heading, Box, SimpleGrid, Image, Link, Text } from "@chakra-ui/react";
import "./DownArrow.css";
import { useMediaQuery } from '@chakra-ui/react';
import liveStyle_pic from "../projects_pic/liveStyle_pic.png"
import mmt_pic from "../projects_pic/make_my_trip_pic.png"
import indegiogo from "../projects_pic/indiegogo_pic.png";
import mioneese from "../projects_pic/mioneese_pic.png";
import "./Video.css";
// import { useState } from "react";
// import { DemoVideoOne, DemoVideoThree } from "./DemoVideo";
import "./Projects.css";
import { m } from "framer-motion";

export const Projects = ({ projectRef }) => {
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
    // const [showVideoOne, setShowVideoOne] = useState(false);
    // const [showVideoTwo, setShowVideoTwo] = useState(false);
    // const [showVideoThree, setShowVideoThree] = useState(false);

    // const closeDemoVideoOne = () => {
    //     setShowVideoOne(false);
    // }

    // const closeDemoVideoTwo = () => {
    //     setShowVideoTwo(false);
    // }

    // const closeDemoVideoThree = () => {
    //     setShowVideoThree(false);
    // }

    return(
        <> 
            {isLargerThan1200 ? 
            <Container mt={150} mb={150} ref={projectRef}>
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
            </Center>
            {/* minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }} */}
            <Center mt={60} ml={30} mr={30}>
                <SimpleGrid columns={2} spacing={30} >
                    <Container className="projectCard">
                        <Box borderRadius='20px'>
                            <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300}  height={300} src={indegiogo} alt="Indegiogo" />
                        </Box>
                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text  className="projectDescText">A front-end clone of indegiogo application developed by 5 members in time span of 5 days.
                                    We have added features like filter products, view product graph, set SIP amount, OTP mail validation etc. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">Express</Text>
                                <Text className="techStack">MongoDb</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/3003abhishek/daily-wound-486/tree/fw20_1113_day-6" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://imaginative-starlight-13302e.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link href="https://drive.google.com/file/d/1npQbY0OcgdCbI0WxxDnwAyVpn5JNStmj/view?usp=sharing" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                    </Container>

                    <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300} height={300} src={liveStyle_pic} alt="adidas-project" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A front-end clone of adidas webpage developed by 4 members in time span of 6 days.
                                    We have added features like filter products, toggle product images, delete a product from cart, payment validation etc. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/Sandeeprawat313/UNIT--2-group-project-.git" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://luxury-fenglisu-f82f7e.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link href="https://drive.google.com/file/d/1lJ14pJXu3r0Bye1Y7p3IOt5UxMmQXIC4/view?usp=sharing" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                    </Container>

                    <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300} height={300} src={mmt_pic} alt="nordstrom-project" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A full-stack clone of Make My Trip webpage developed by 4 members in time span of 6 days.
                                    We have added features like email verification, filter products, toggle product images, delete a product from cart, validations etc. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">React</Text>
                                <Text className="techStack">Redux</Text>
                                <Text className="techStack">Express</Text>
                                <Text className="techStack">MongoDb</Text>
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/Ashmit-1131/close-pear-4936" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://nomadic-travel-company.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link href="https://drive.google.com/file/d/1fbC_NNJzvA_1CnrcFcT71LrhYybGV1hz/view" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                    </Container>

                    <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300} height={300} src={mioneese} alt="game-of-tic-tac-toe" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Frontend clone of Freshy.com which is food delivery site that mainly focuses on the calorie intake. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">React</Text>
                                {/* <Text className="techStack">Redux</Text> */}
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/3003abhishek/Mionesee-399/tree/main/my-project" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://mionesee.netlify.app/" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>   
                                <Link href="https://drive.google.com/file/d/1e2bYNkt8rYT6etl8IY5Bd1cqQMVil7wy/view?usp=sharing" textDecoration='none' fontSize='14px' minW='100px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link> 
                            </Box>
                        </Box>
                    </Container>

                </SimpleGrid>
                </Center>
                </Container>

                :

                <Container mt={150} mb={150} ref={projectRef}>
                <Center>
                    <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Projects</Heading>
                </Center>
                {/* minW={300} borderRadius='20px' _hover={{ boxShadow: '0 0 8px #6889FF' }} */}
                <Center mt={60} ml={30} mr={30}>
                    <SimpleGrid columns={1} spacing={30}>
                        <Container className="projectCard">
                            <Box borderRadius='20px'>
                                <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300} height={300} src={indegiogo} alt="groww-project" />
                            </Box>
                            <Box mt={-4} p={10} className="projectButton">
                                <Box className="projectDescBox">
                                    <Text className="projectDescText">A frontend clone of Indiegogo  developed by 5 members in time span of 5 days.
                                        We have added features like filter products, view product graph, set SIP amount, OTP mail validation etc. 
                                    </Text>
                                </Box>

                                <Box display='flex' className="techStackBox" justifyContent='center'>
                                    <Text className="techStack">HTML</Text>
                                    <Text className="techStack">CSS</Text>
                                    <Text className="techStack">JS</Text>
                                   
                                    
                                </Box>

                                <Box className="buttonBox">
                                    <Link href="https://github.com/3003abhishek/daily-wound-486/tree/fw20_1113_day-6" textDecoration='none' fontSize='14px' minW='50px' ml={20} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://imaginative-starlight-13302e.netlify.app/" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                    <Link href="https://drive.google.com/file/d/1npQbY0OcgdCbI0WxxDnwAyVpn5JNStmj/view?usp=sharing" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                                </Box>
                            </Box>
                            {/* {showVideoOne ? <DemoVideoOne closeDemoVideoOne={closeDemoVideoOne} /> : null} */}
                        </Container>

                        <Container className="projectCard">
                            <Box borderRadius='20px'> 
                                <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300} height={300} src={liveStyle_pic} alt="adidas-project" />
                            </Box>

                            <Box mt={-4} p={10} className="projectButton">
                                <Box className="projectDescBox">
                                    <Text className="projectDescText">A front-end clone of LifeStyle Store webpage developed by 4 members in time span of 6 days.
                                        We have added features like filter products, toggle product images, delete a product from cart, payment validation etc. 
                                    </Text>
                                </Box>

                                <Box display='flex' className="techStackBox" justifyContent='center'>
                                    <Text className="techStack">HTML</Text>
                                    <Text className="techStack">CSS</Text>
                                    <Text className="techStack">JS</Text>
                                </Box>

                                <Box className="buttonBox">
                                    <Link href="https://github.com/Sandeeprawat313/UNIT--2-group-project-.git" textDecoration='none' fontSize='14px' ml={20} minW='50px' color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Code
                                    </Link>
                                    <Link href="https://luxury-fenglisu-f82f7e.netlify.app/" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                        border='2px solid #C668FF' target='_blank'
                                        _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                        >Website
                                    </Link>    
                                    <Link href="https://drive.google.com/file/d/1lJ14pJXu3r0Bye1Y7p3IOt5UxMmQXIC4/view?usp=sharing" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                                </Box>
                            </Box>
                            {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                        </Container>

                        <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300} height={300} src={mmt_pic} alt="nordstrom-project" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">A full-stack clone of Make my trip webpage developed by 4 members in time span of 5 days.
                                    We have added features like email verification, filter products, toggle product images, delete a product from cart, validations etc. 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">React</Text>
                                <Text className="techStack">Redux</Text>
                                <Text className="techStack">Express</Text>
                                <Text className="techStack">MongoDb</Text>
                            </Box> 

                            <Box className="buttonBox">
                                <Link href="https://github.com/Ashmit-1131/close-pear-4936" textDecoration='none' fontSize='14px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank' minW='50px'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://nomadic-travel-company.netlify.app/" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link href="https://drive.google.com/file/d/1fbC_NNJzvA_1CnrcFcT71LrhYybGV1hz/view" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link>
                            </Box>
                        </Box>
                        {/* {showVideoThree ? <DemoVideoThree closeDemoVideoThree={closeDemoVideoThree} /> : null} */}
                    </Container>

                        <Container className="projectCard">
                        <Box borderRadius='20px'> 
                            <Image borderRadius='20px 20px 0px 0px' width={"100%"} minW={300} height={300} src={mioneese} alt="Mionesee" />
                        </Box>

                        <Box mt={-4} p={10} className="projectButton">
                            <Box className="projectDescBox">
                                <Text className="projectDescText">Front-end clone of Freshy.com developed using React . 
                                </Text>
                            </Box>

                            <Box display='flex' className="techStackBox" justifyContent='center'>
                                <Text className="techStack">HTML</Text>
                                <Text className="techStack">CSS</Text>
                                <Text className="techStack">JS</Text>
                                <Text className="techStack">React</Text>
                                
                            </Box>

                            <Box className="buttonBox">
                                <Link href="https://github.com/3003abhishek/Mionesee-399/tree/main/my-project" textDecoration='none' fontSize='14px' minW='50px' ml={20} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Code
                                </Link>
                                <Link href="https://mionesee.netlify.app/" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}
                                    >Website
                                </Link>    
                                <Link href="https://drive.google.com/file/d/1e2bYNkt8rYT6etl8IY5Bd1cqQMVil7wy/view?usp=sharing" textDecoration='none' fontSize='14px' minW='50px' ml={10} color='#C668FF' p={8} 
                                    border='2px solid #C668FF' target='_blank'
                                    _hover={{ cursor: 'pointer', background:'#C668FF', color:'black' }}>
                                    Demo
                                </Link> 
                            </Box>
                        </Box>
                    </Container>
                
                    </SimpleGrid>
                    </Center>
                </Container>
                }
        </>
    )
};