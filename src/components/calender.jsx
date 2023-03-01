import React from 'react';
import { Container,Box, Center, SimpleGrid, Image, Text, Link } from '@chakra-ui/react';
export const Calender = () => {
    return (
        <Container>
            <Box>
                <h1>Github</h1>
            </Box>
            <Image
                src='https://ghchart.rshah.org/021F34/3003abhishek'
                alt='calender'
                style={{ width: '80%', display: 'block', margin: 'auto' }}
            />
               
               <Image
                src='https://github-readme-streak-stats.herokuapp.com/?user=3003abhishek&'
                alt='calender'
                style={{ width: '40%', display: 'block', margin: 'auto',marginTop:"40px" }}
            />

                <Image
                src='https://github-readme-stats.vercel.app/api?username=3003abhishek&show_icons=true&locale=en'
                alt='calender'
                style={{ width: '40%', display: 'block', margin: 'auto',marginTop:"40px" }}
            />


               <Image
                src=' https://github-readme-stats.vercel.app/api/top-langs?username=3003abhishek&show_icons=true&locale=en&layout=compact'
                alt='calender'
                style={{ width: '40%', display: 'block', margin: 'auto',marginTop:"40px" }}
            />
              
              
        </Container>
    );
};
