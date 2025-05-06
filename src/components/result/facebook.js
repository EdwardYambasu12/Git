import React from 'react';
import styled from 'styled-components';

const FollowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3b5998;
  padding: 50px 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const FollowButton = styled.a`
  background-color: #ffffff;
  color: #3b5998;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3b5998;
    color: #ffffff;
  }
`;

const FacebookLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const FollowFacebookPage = () => {
  return (
    <FollowContainer>
      <Title>Follow Our Facebook Page</Title>
      <Description>
        Stay updated with the latest news, exclusive offers, and exciting content! 
        Join our community on Facebook today.
      </Description>
      <FollowButton href="https://web.facebook.com/profile.php?id=61554580514197" target="_blank">
        <FacebookLogo src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" />
        Follow Us
      </FollowButton>
    </FollowContainer>
  );
};

export default FollowFacebookPage;
