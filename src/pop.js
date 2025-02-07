import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, Link } from '@mui/material';
import {useNavigate} from "react-router-dom"
const CookieConsentPopup = () => {
  const [open, setOpen] = useState(true);
  const navigate= useNavigate()

  const handleAccept = () => {
    setOpen(false);
    console.log("accepted")
    localStorage.setItem("cookie", "accepted")
    // Add your cookie consent logic here
  };

  const handleReject = () => {
    setOpen(false);
     localStorage.setItem("cookie", "rejected")
    // Add your cookie rejection logic here
  };

  const handleShowPurposes = () => {
    // Show purposes or additional details logic
    navigate("/privacy-policy")
  
  };

  return (
   <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <img src= "https://lonescore.com/sportsup.png" alt="Logo" style={{ marginRight: 8, width: 50 }} />
          <Typography variant="h6">LoneScore - We Care About Your Privacy</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" gutterBottom>
          At <strong>LoneScore</strong>, we and our partners store and/or access information on your device, such as unique IDs in cookies, to process personal data. You can accept or manage your preferences below, including the right to object where legitimate interest is used. These choices will be signaled to our partners and won’t impact your browsing experience.
        </Typography>
        <Typography variant="body2" gutterBottom>
          <strong>We and our partners process data to provide:</strong>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Use precise geolocation data, actively scan device characteristics for identification, store and/or access information on your device, provide personalized advertising and content, measure ad and content performance, and gather audience insights for development.
        </Typography>
        
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleReject}>
          Reject All
        </Button>
        <Button variant="contained" onClick={handleAccept} color="primary">
          I Accept
        </Button>
        <Button onClick={handleShowPurposes}>
          Show Purposes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CookieConsentPopup;
