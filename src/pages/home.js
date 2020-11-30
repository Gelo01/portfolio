import React from "react";
import styled from "styled-components";

import Made from "../components/Made";
import Section from "../components/Section";
import LandPage from "../components/LandPage";
import HomeReach from "../components/contactme/HomeReach";
import BackgroundSvg from "../components/assets/ascii-pattern-tall.svg";
import Service from "../components/Service";

const home = () => {
  return (
    <>
      <Container>
        <LandPage />
      </Container>
      {/*   */}
      <Container1>
        <Section />
        <Service />
      </Container1>
      {/*   */}
      <Container>
        <HomeReach />
      </Container>
      {/*   */}
      <Container2>
        <Made />
      </Container2>
    </>
  );
};

export default home;

const Container = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${BackgroundSvg});
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
`;

const Container1 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background: url(${BackgroundSvg});
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  will-change: transform;
`;

const Container2 = styled.div`
  z-index: 0;
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: url(${BackgroundSvg});
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;