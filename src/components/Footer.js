import React from "react";
import styled from "styled-components";
import { BiCoffeeTogo } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <Content>
        <Wrapper>
          <Text>if you liked my work how about you</Text>
          <Btn href='https://www.buymeacoffee.com/jagarkin' target={"_blank"}>
            Invite me for a coffee &#160;
            <CoffeIcon />
          </Btn>
        </Wrapper>
      </Content>
    </>
  );
};

export default Footer;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1366px) {
    width: 90%;
  }
`;

const Text = styled.h1`
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  font-size: 1.3rem;
  margin: 1rem 0rem;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-family: "Indie Flower", cursive;
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-weight: 600;
  padding: 12px 42px;
  margin-bottom: 2rem;
  color: var(--text);
  text-transform: capitalize;
  transition: 0.35s ease-in-out;
  border: 2px solid var(--text);
  font-family: "Indie Flower", cursive;

  &:hover {
    color: var(--bg);
    border-radius: 50px;
    border: 2px solid #ff4136;
    background-color: #ff4136;
  }
`;

const CoffeIcon = styled(BiCoffeeTogo)`
  font-size: 1.4rem;
`;
