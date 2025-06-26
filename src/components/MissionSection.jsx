import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 2rem 0;
  padding: 2.5rem 1rem;
  background: ${({ theme }) => theme.colors.glass};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.92;
`;

const MissionSection = () => (
  <Section>
    <Title>JanaSena Mission</Title>
    <Subtitle>
      In Democracy for people to live happily, Political accountability should
      be mandated.
    </Subtitle>
  </Section>
);

export default MissionSection;
