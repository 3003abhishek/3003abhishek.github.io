import { Box, Center, SimpleGrid } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export const Header = ({ homeRef,aboutRef, skillsRef, projectRef, contactRef }) => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)');


    const handleDownload = () => {
        const driveUrl = "https://drive.google.com/file/d/1sCN0Fj3TAkpkPzrB-EwMq3k5P4JJev1M/view";
        const downloadUrl = "https://drive.google.com/u/0/uc?id=1sCN0Fj3TAkpkPzrB-EwMq3k5P4JJev1M&export=download";
        window.open(driveUrl, "_blank");
        window.location.href = downloadUrl;
      };

    return (
            <>
            {isLargerThan600 ?
            <Center height={60} pos='sticky' top='0' justifyContent='left'>
                <SimpleGrid justifyContent={"space-between"} columns={6} spacing={12} ml={100}>

                <Box className='nav_text' color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            homeRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Home</Box>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            aboutRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>About</Box>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            skillsRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Skills</Box>
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            projectRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Projects</Box>
                   
                    <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            contactRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Contact</Box>

        


                <Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={handleDownload}>
                    

                       Resume

                        </Box>




                </SimpleGrid> 
                </Center>
                :
                <Center height={60} pos='sticky' top='0'  minW={300}>
                <SimpleGrid columns={6} spacing={2} fontSize={10} >

                <Box color='#C668FF'  marginLeft={4} _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            homeRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Home</Box>
                    <Box color='#C668FF'  marginLeft={4}  _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            aboutRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>About</Box>
                    <Box color='#C668FF'  marginLeft={4}  _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            skillsRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Skills</Box>
                    <Box color='#C668FF'  marginLeft={4} _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            projectRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Projects</Box>
                    
                    <Box color='#C668FF' marginLeft={4} _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={() => {
                            contactRef.current.scrollIntoView(
                                {
                                    behavior: "smooth",
                                }
                            )
                        }}>Contact</Box>


             


<Box color='#C668FF' _hover={{ cursor: 'pointer', borderBottom: '2px solid #6889FF' }}
                        onClick={handleDownload}>
                    

                       Resume

                        </Box>

                </SimpleGrid>
                </Center>
            }
            </>    
    );
}




