import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setTimeout(() => {
        setMessages(msgs => [...msgs, { text: `You said: ${input}`, sender: 'bot' }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
      {isOpen ? (
        <Paper 
          elevation={3} 
          sx={{ 
            width: 300, 
            height: 400, 
            display: 'flex', 
            flexDirection: 'column',
            borderRadius: 4, // Increased border radius for the entire chatbot
            overflow: 'hidden' // Ensures child elements don't overflow the rounded corners
          }}
        >
          <Box 
            sx={{ 
              p: 2, 
              bgcolor: 'primary.main', 
              color: 'white', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center'
            }}
          >
            <Typography variant="h6">Chat with us</Typography>
            <IconButton color="inherit" onClick={toggleChat} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
            {messages.map((msg, index) => (
              <Typography 
                key={index} 
                sx={{ 
                  mb: 1, 
                  textAlign: msg.sender === 'user' ? 'right' : 'left',
                  backgroundColor: msg.sender === 'user' ? 'primary.light' : 'grey.200',
                  color: msg.sender === 'user' ? 'white' : 'text.primary',
                  p: 1,
                  borderRadius: 2,
                  display: 'inline-block',
                  maxWidth: '80%'
                }}
              >
                {msg.text}
              </Typography>
            ))}
          </Box>
          <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, display: 'flex' }}>
            <TextField
              fullWidth
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              variant="outlined"
              sx={{ 
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3 // Rounded corners for the input field
                }
              }}
            />
            <Button 
              type="submit" 
              variant="contained" 
              sx={{ 
                ml: 1,
                borderRadius: 3 // Rounded corners for the send button
              }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      ) : (
        <Button
          variant="contained"
          color="primary"
          startIcon={<ChatIcon />}
          onClick={toggleChat}
          sx={{ 
            borderRadius: 3, // Rounded corners for the chat button
            px: 2,
            py: 1
          }}
        >
          Chat with us
        </Button>
      )}
    </Box>
  );
}

export default Chatbot;