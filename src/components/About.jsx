import { Box, Center, SimpleGrid, Image, Text, Link } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';
import { BsChevronDoubleDown } from 'react-icons/bs';

import { Button } from '@chakra-ui/react';
import { FaFilePdf } from 'react-icons/fa';

import "./DownArrow.css";
import "./ResumeButton.css";
import "./About.css";
import profile from "../images/profile pic.jpg"

export const AboutMe = ({ skillsRef, aboutRef }) => {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');


  const handleDownload = () => {
    window.location.href = "https://drive.google.com/file/d/1sCN0Fj3TAkpkPzrB-EwMq3k5P4JJev1M/view?usp=sharing";
  };

  return (
    <Center mt={60} ref={aboutRef}>
      <SimpleGrid columns={isLargerThan1200 ? 2 : 1} spacing={0}>
        <Box>
          <Image
            boxSize={isLargerThan1200 ? "500px" : "300px"}
            height="650px"
            objectFit="cover"
            borderRadius="50% "
            ml={isLargerThan1200 ? 100 : 0}
            mr={isLargerThan1200 ? 0 : 2}
            src={profile}
            alt="Abhishek Jha"
          />
        </Box>
        <Box color="white" mt={isLargerThan1200 ? 150 : 6} minW={isLargerThan1200 ? 500 : 300}>
          <Text fontFamily="helvetica" className="textStyle" fontSize={isLargerThan1200 ? 25 : 20}>
            Hi I'm Abhishek Jha
          </Text>

          <Text fontSize={isLargerThan1200 ? 18 : 14} pl={isLargerThan1200 ? 0 : 4} pr={isLargerThan1200 ? 10 : 4}>
            A <strong style={{ color: "#6889FF" }}>Full Stack Web Developer</strong> based in India. A creative
            coder who specializes in MERN stack. I make it my mission to design pixel-perfect websites or applications
            with optimized code that run blazing fast.
          </Text>

         




      <Box mt={4} onClick={handleDownload}>
      <Button
    as="a"
    href="https://drive.google.com/u/0/uc?id=1sCN0Fj3TAkpkPzrB-EwMq3k5P4JJev1M&export=download"
    target="_blank"
    rel="noopener noreferrer"
    leftIcon={<FaFilePdf />}
    colorScheme="red"
    color="red"
    size="md"
    _hover={{ bg: 'blue.600' }}
    download="fw19_0566-Abhishek-Jha-Resume.pdf"
  >
    Download Resume
  </Button>
      </Box>
  








        </Box>
      </SimpleGrid>

      
    </Center>
  );
};
