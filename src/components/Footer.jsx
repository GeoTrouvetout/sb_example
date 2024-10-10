import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;