import React from "react";
import styled from "styled-components";
import { FaUsers, FaHandHoldingUsd, FaArrowRight } from "react-icons/fa";

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 2.5rem auto;
  background: #d32f2f;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.07);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 4px solid #d32f2f;
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    border-radius: 0.8rem;
  }
`;

const Card = styled.div`
  flex: 1 1 0;
  min-width: 280px;
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: transparent;
  @media (max-width: 900px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    &:last-child {
      border-bottom: none;
    }
  }
`;

const Divider = styled.div`
  width: 1px;
  background: rgba(255, 255, 255, 0.18);
  margin: 0 0.5rem;
  @media (max-width: 900px) {
    width: 100%;
    height: 1px;
    margin: 0.5rem 0;
  }
`;

const IconWrap = styled.div`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1.2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #fff;
`;

const CenterTitle = styled(Title)`
  color: #ffd700;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 1.5rem;
`;

const Phone = styled.div`
  font-size: 2.1rem;
  font-weight: 800;
  color: #ffd700;
  margin: 0.5rem 0 1rem 0;
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  background: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: color 0.18s;
  &:hover {
    color: #ffd700;
    text-decoration: underline;
  }
`;

const JoinButton = styled.a`
  display: inline-block;
  background: #fff;
  color: #d32f2f;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.8rem 2.2rem;
  border-radius: 0.3rem;
  margin: 1rem 0 0 0;
  text-decoration: none;
  transition: background 0.18s, color 0.18s;
  &:hover {
    background: #ffd700;
    color: #d32f2f;
  }
`;

const JoinCards = () => (
  <Section>
    <Card>
      <IconWrap>
        <FaUsers />
      </IconWrap>
      <Title>Volunteer for JanaSena</Title>
      <Description>
        Together lets bring a positive change in the society. Volunteer with us
        and make a difference
      </Description>
      <CTA href="#">
        CLICK HERE <FaArrowRight />
      </CTA>
    </Card>
    <Divider />
    <Card>
      <CenterTitle>Let's Strengthen JanaSena Party</CenterTitle>
      <Description>
        Please enroll as a Member of JanaSena Party by giving a missed call to
      </Description>
      <Phone>+91 9394022222</Phone>
      <div>or</div>
      <JoinButton href="#">JOIN ONLINE</JoinButton>
    </Card>
    <Divider />
    <Card>
      <IconWrap>
        <FaHandHoldingUsd />
      </IconWrap>
      <Title>Donations</Title>
      <Description>
        JanaSena Party's continuous fight for Social Balance and everyone's
        development needs your support.
      </Description>
      <CTA href="#">
        DONATE NOW <FaArrowRight />
      </CTA>
    </Card>
  </Section>
);

export default JoinCards;
