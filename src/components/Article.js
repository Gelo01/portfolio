import React from "react";
import styled from "styled-components";

import { workInfo } from "./Context";
import HeroText from "./hero/HeroText";
import HeroDiss from "./hero/HeroDiss";
import HeroSvg from "./hero/HeroSvg";

import Work from "./assets/work.svg";

const Article = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <HeroText text={workInfo.text} />
            <HeroDiss disc={workInfo.disc} />
          </Col>
          <Col2>
            <HeroSvg photo={Work} alt='worker' />
          </Col2>
        </Row>
      </Container>
    </>
  );
};

export default Article;

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1366px) {
    width: 90%;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Col = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 0px;
  flex-direction: column;
  justify-content: flex-start;
`;

const Col2 = styled.div`
  width: 100%;
  display: flex;
  margin: 25px 0px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
