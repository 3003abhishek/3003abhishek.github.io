import { Box, Center, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react';
import "./DownArrow.css";
import "./Skills.css";
import html from "../skills_pic/html logo.jpg";
import css from "../skills_pic/css logo.jpg";
import javascript from "../skills_pic/javascript logo.jpg";
import react from "../skills_pic/react logo.jpg";
import redux from "../skills_pic/redux logo.jpg";
import npm from "../skills_pic/npm logo.jpg";
import typeScript from "../skills_pic/typeScript logo.jpg";
import chakra from "../skills_pic/chakra logo.jpg";
import node from "../skills_pic/node logo.jpg";
import express from "../skills_pic/express logo.jpg";
import mongoDB from "../skills_pic/mogoDB logo.jpg";
import postman from "../skills_pic/postman logo.jpg";
import hereko from "../skills_pic/hereko logo.jpg";
import cyclic from "../skills_pic/cyclic logo.jpg";
import git from "../skills_pic/git logo.jpg";


export const Skills = ({ skillsRef }) => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

    return(
        <Container mt={250} ref={skillsRef}>
            
            <Center>
                <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} alignContent='center'>Skills</Heading>
            </Center>

            <Center>
                <Heading color='White'>Front End</Heading>
            </Center>
            
            {isLargerThan600 ? 
                <Center>
                    <SimpleGrid columns={4} spacing={10} minW={600}>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={html} alt="html" />
                            <Text background='none' marginLeft='5px'>HTML 5</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={css} alt="css" />
                            <Text background='none' marginLeft='5px'>CSS 3</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={javascript} alt="js" />
                            <Text background='none' marginLeft='5px'>Javascript</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={react} alt="react" />
                            <Text background='none' marginLeft='5px'>React</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={redux} alt="redux" />
                            <Text background='none' marginLeft='5px'>Redux</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={npm} alt="npm" />
                            <Text background='none' marginLeft='5px'>Npm</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={typeScript} alt="typeScript" />
                            <Text background='none' marginLeft='5px'>TypeScript</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={chakra} alt="chakra" />
                            <Text background='none' marginLeft='5px'>Chart js</Text>
                        </Box>
                    </SimpleGrid>
                </Center> :
                <Center>
                    <SimpleGrid columns={1} spacing={10} minW={120}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={html} alt="html" />
                            <Text background='none' marginLeft='5px'>HTML 5</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={css} alt="css" />
                            <Text background='none' marginLeft='5px'>CSS 3</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={javascript} alt="js" />
                            <Text background='none' marginLeft='5px'>Javascript</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={react} alt="react" />
                            <Text background='none' marginLeft='5px'>React</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={redux} alt="redux" />
                            <Text background='none' marginLeft='5px'>Redux</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={npm} alt="npm" />
                            <Text background='none' marginLeft='5px'>Npm</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={typeScript} alt="tailwind" />
                            <Text background='none' marginLeft='5px'>TypeScript</Text>
                        </Box>
                        <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                            <img className="skillsLogo" src={chakra} alt="chart" />
                            <Text background='none' marginLeft='5px'>Chakra</Text>
                        </Box>
                    </SimpleGrid>
                </Center> }
            

            <Center mt={20}>
                <Heading color='White'>Back End</Heading>
            </Center>
            
            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={4} spacing={10} minW={600}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={node} alt="node" />
                        <Text background='none' marginLeft='5px'>Node js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={express} alt="express" />
                        <Text background='none' marginLeft='5px'>Express js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={mongoDB} alt="mongodb" />
                        <Text background='none' marginLeft='5px'>MongoDb</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={postman} alt="postman" />
                        <Text background='none' marginLeft='5px'>Postman</Text>
                    </Box>
                </SimpleGrid>
            </Center> :
            <Center>
                <SimpleGrid columns={1} spacing={10} minW={120}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={node} alt="node" />
                        <Text background='none' marginLeft='5px'>Node js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={express} alt="express" />
                        <Text background='none' marginLeft='5px'>Express js</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={mongoDB} alt="mongodb" />
                        <Text background='none' marginLeft='5px'>MongoDb</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={postman} alt="postman" />
                        <Text background='none' marginLeft='5px'>Postman</Text>
                    </Box>
                </SimpleGrid>
            </Center> }

            <Center mt={20}>
                <Heading color='White'>Hosting Platform</Heading>
            </Center>

            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={2} spacing={10} minW={300}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={hereko} alt="heroku" />
                        <Text background='none' marginLeft='5px'>Heroku</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={cyclic} alt="cyclic" />
                        <Text background='none' marginLeft='5px'>Cyclic.sh</Text>
                    </Box>
                </SimpleGrid>
            </Center> :
            <Center>
                <SimpleGrid columns={1} spacing={10} minW={150}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={hereko} alt="heroku" />
                        <Text background='none' marginLeft='5px'>Heroku</Text>
                    </Box>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={cyclic} alt="heroku" />
                        <Text background='none' marginLeft='5px'>Cyclic.sh</Text>
                    </Box>
                </SimpleGrid>
            </Center> }

            <Center mt={20}>
                <Heading color='White'>Version Control</Heading>
            </Center>

            {isLargerThan600 ? 
            <Center>
                <SimpleGrid columns={1} spacing={0} minW={150}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={git} alt="git" />
                        <Text background='none' marginLeft='5px'>GIT</Text>
                    </Box>
                </SimpleGrid>
            </Center>
            :
            <Center>
                <SimpleGrid columns={1} spacing={0} minW={120}>
                    <Box background='linear-gradient(to bottom right, #6889FF, #C668FF)' color='black' display='flex' justifyContent='center' border='0px solid #6889FF'>
                        <img className="skillsLogo" src={git} alt="git" />
                        <Text background='none' marginLeft='5px'>GIT</Text>
                    </Box>
                </SimpleGrid>
            </Center>
            }
            
        </Container>
    )
};