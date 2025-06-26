import React, { useState } from "react";
import styled from "styled-components";
import leaderImg from "../assets/images/JANASENA_DP_2.jpg";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #fff 60%, #f8f8f8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2rem 0;
`;

const SAVVEContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 2.5rem auto 0 auto;
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.13);
  overflow: hidden;
  @media (max-width: 900px) {
    flex-direction: column;
    border-radius: 1.2rem;
    margin: 1.2rem 0.5rem 0 0.5rem;
  }
`;

const LeftPanel = styled.div`
  background: #d32f2f;
  color: #fff;
  flex: 1.1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  position: relative;
  @media (max-width: 900px) {
    flex: none;
    padding: 2rem 1rem 1.2rem 1rem;
  }
`;

const LeaderImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #fff;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.13);
  margin-bottom: 1.2rem;
  background: #fff;
`;

const RightPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  background: #fff;
  @media (max-width: 900px) {
    padding: 1.5rem 0.7rem 1.2rem 0.7rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #d32f2f;
  margin-bottom: 0.2rem;
  text-align: left;
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #d32f2f;
  margin-bottom: 1.2rem;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 2rem;
  max-width: 700px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.04);
  padding: 1.2rem 0.5rem 0.5rem 0.5rem;
`;

const Input = styled.input`
  flex: 1 1 220px;
  min-width: 220px;
  max-width: 340px;
  padding: 0.9rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  color: #222;
  background: #fafafa;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #d32f2f;
  }
`;

const Select = styled.select`
  flex: 1 1 220px;
  min-width: 220px;
  max-width: 340px;
  padding: 0.9rem 1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  color: #222;
  background: #fafafa;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #d32f2f;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex: 1 1 220px;
  min-width: 220px;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #d32f2f;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #d32f2f;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 60px;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.7rem;
  font-size: 1rem;
  font-weight: 500;
  color: #222;
  background: #fafafa;
  outline: none;
  padding: 0.9rem 1rem;
  margin-top: 0.5rem;
  resize: vertical;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #d32f2f;
  }
`;

const SubmitButton = styled.button`
  background: #d32f2f;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  margin-top: 1.2rem;
  transition: background 0.18s, color 0.18s, transform 0.12s;
  &:hover,
  &:focus {
    background: #b71c1c;
    color: #fff;
    transform: translateY(-2px) scale(1.04);
  }
`;

const SAVVE = () => {
  const [form, setForm] = useState({});
  return (
    <PageWrapper>
      <SAVVEContainer>
        <LeftPanel>
          <LeaderImage src={leaderImg} alt="Leader" />
        </LeftPanel>
        <RightPanel>
          <Title>
            Join Sri Aurobindo Viswa Veena (SAVVE) for Election Impact!
          </Title>
          <Subtitle>Empower Your Roots:</Subtitle>
          <Description>
            Join Sri Aurobindo Viswa Veena (SAVVE) to make a significant impact
            in the upcoming 2024 Andhra Pradesh elections by returning home and
            contributing your skills and global perspectives. This call to
            action is an invitation to be part of a collective effort towards
            progress and prosperity in your homeland. Register with SAVVE to
            mobilize, inspire and work towards a vision of a better future for
            Andhra Pradesh, embodying the change you wish to see.
          </Description>
          <Subtitle>JANASENA PARTY – NRI SUPPORTERS</Subtitle>
          <Form autoComplete="off">
            <Input placeholder="Phone number" />
            <Input placeholder="Enter your email" />
            <Input placeholder="Enter your full name" />
            <RadioGroup>
              <span>Is this your WhatsApp Number</span>
              <RadioLabel>
                <input type="radio" name="whatsapp" /> Yes
              </RadioLabel>
              <RadioLabel>
                <input type="radio" name="whatsapp" /> No
              </RadioLabel>
            </RadioGroup>
            <Input placeholder="Enter your country" />
            <Input placeholder="Enter your age" />
            <Input placeholder="Profession" />
            <Input placeholder="Facebook Id" />
            <Input placeholder="Twitter Id" />
            <Input placeholder="Enter your city" />
            <RadioGroup>
              <span>Willing to come to India?</span>
              <RadioLabel>
                <input type="radio" name="cometoindia" /> Yes
              </RadioLabel>
              <RadioLabel>
                <input type="radio" name="cometoindia" /> No
              </RadioLabel>
            </RadioGroup>
            <Select>
              <option>Select your state</option>
              {/* Add state options here */}
            </Select>
            <Select>
              <option>Select your district</option>
              {/* Add district options here */}
            </Select>
            <Select>
              <option>Select your constituency</option>
              {/* Add constituency options here */}
            </Select>
            <CheckboxGroup>
              <span>Areas of Expertise</span>
              <CheckboxLabel>
                <input type="checkbox" /> Technology Development
              </CheckboxLabel>
              <CheckboxLabel>
                <input type="checkbox" /> Social Media
              </CheckboxLabel>
              <CheckboxLabel>
                <input type="checkbox" /> Electioneering work
              </CheckboxLabel>
              <CheckboxLabel>
                <input type="checkbox" /> Event Organising
              </CheckboxLabel>
              <CheckboxLabel>
                <input type="checkbox" /> Others
              </CheckboxLabel>
            </CheckboxGroup>
            <Input placeholder="How long have you been in the party?" />
            <TextArea placeholder="Notes" />
            <SubmitButton type="button">Submit</SubmitButton>
          </Form>
        </RightPanel>
      </SAVVEContainer>
    </PageWrapper>
  );
};

export default SAVVE;
