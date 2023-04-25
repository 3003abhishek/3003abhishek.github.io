
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

const SkillBox = ({ image, label }) => {
  return (
    <Box textAlign='center'>
      <Box w='80px' h='80px' borderRadius='50%' display='inline-block' mb='5'>
        <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
      </Box>
      <Text color='white' fontWeight='bold'>{label}</Text>
    </Box>
  );
};

export const Skills = ({ skillsRef }) => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Container mt={20} ref={skillsRef}>
      <Center>
        <Heading color='#6889FF' borderBottom='2px solid #C668FF' width={100} textAlign='center'>
          Skills
        </Heading>
      </Center>

      <Box mt={16}>
        <Center>
          <Heading color='white' as='h2' size='md'>
            Front End
          </Heading>
        </Center>

        <Center mt={8}>
          <SimpleGrid columns={isLargerThan600 ? 4 : 1} spacing={10} minW={isLargerThan600 ? 600 : 120}>
            <SkillBox image={html} label='HTML 5' />
            <SkillBox image={css} label='CSS 3' />
            <SkillBox image={javascript} label='JavaScript' />
            <SkillBox image={react} label='React' />
            <SkillBox image={redux} label='Redux' />
            <SkillBox image={npm} label='Npm' />
            <SkillBox image={typeScript} label='TypeScript' />
            <SkillBox image={chakra} label='Chart js' />
          </SimpleGrid>
        </Center>
      </Box>

      <Box mt={16}>
        <Center>
          <Heading color='white' as='h2' size='md'>
            Back End
          </Heading>
        </Center>

        <Center mt={8}>
          <SimpleGrid columns={isLargerThan600 ? 4 : 1} spacing={10} minW={isLargerThan600 ? 600 : 120}>
            <SkillBox image={node} label='Node.js' />
            <SkillBox image={express} label='Express.js' />
            <SkillBox image={mongoDB} label='MongoDB'/>
<SkillBox image={postman} label='Postman' />
</SimpleGrid>
</Center>
</Box>

php
Copy code
  <Box mt={16}>
    <Center>
      <Heading color='white' as='h2' size='md'>
        Other Tools
      </Heading>
    </Center>

    <Center mt={8}>
      <SimpleGrid columns={isLargerThan600 ? 4 : 1} spacing={10} minW={isLargerThan600 ? 600 : 120}>
        <SkillBox image={hereko} label='Heroku' />
        <SkillBox image={cyclic} label='Cyclic CI/CD' />
        <SkillBox image={git} label='Git' />
      </SimpleGrid>
    </Center>
  </Box>

  <Box mt={20} textAlign='center'>
    <Text color='white'>
      <i>Note: The skill level displayed here is based on my personal assessment of my proficiency with each tool. It does not necessarily reflect industry standards or actual skill level.</i>
    </Text>
  </Box>

  <Box mt={16} textAlign='center'>
    <a href='#portfolio'>
      <div className='arrow'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </a>
  </Box>
</Container>
);
};
