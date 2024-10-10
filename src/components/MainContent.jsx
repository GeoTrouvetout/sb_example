import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

// Styled components for illustrations (placeholder)
const Illustration = styled('div')(({ theme }) => ({
  width: '100%',
  height: 200,
  backgroundColor: theme.palette.grey[200],
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

function MainContent() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Welcome to Our Company
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
        We are a leading innovator in [Your Industry]. Our mission is to [Your Mission Statement].
      </Typography>
      
      <Grid container spacing={4}>
        {[
          { title: "Our Vision", content: "We envision a world where [your vision statement]." },
          { title: "Our Products", content: "Discover our range of innovative solutions designed to [benefit statement]." },
          { title: "Our Impact", content: "See how we're making a difference in [industry/world/community]." }
        ].map((section, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', borderRadius: 4 }}>
              <Illustration>Illustration {index + 1}</Illustration>
              <Typography variant="h5" component="h3" gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body1">
                {section.content}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainContent;