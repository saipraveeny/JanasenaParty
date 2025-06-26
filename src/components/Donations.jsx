import React, { useState } from "react";
import styled from "styled-components";
import leaderImg from "../assets/images/JANASENA_DP_2.jpg"; // 2024 image for the big circle
import logoImg from "../assets/logos/JSP.png"; // Replace with actual logo if available

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(120deg, #fff 60%, #f8f8f8 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 2rem 0;
`;

const DonationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
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
  flex: 1.2;
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
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 5px solid #fff;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.13);
  margin-bottom: 1.2rem;
  background: #fff;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: #fff;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.08);
  @media (max-width: 900px) {
    position: static;
    margin-bottom: 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.1rem;
  font-weight: 800;
  margin: 0.5rem 0 0.2rem 0;
  color: #fff;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
  margin: 0 0 1.2rem 0;
  text-align: center;
`;

const RightPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  background: #fff;
  @media (max-width: 900px) {
    padding: 1.5rem 0.7rem 1.2rem 0.7rem;
  }
`;

const AmountInput = styled.input`
  width: 100%;
  max-width: 320px;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1rem 1.2rem;
  border: 2px solid #d32f2f;
  border-radius: 0.7rem;
  margin-bottom: 1.2rem;
  outline: none;
  color: #d32f2f;
  background: #fff8;
  transition: border 0.18s;
  &:focus {
    border: 2px solidrgb(0, 0, 0);
  }
`;

const QuickAmounts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.2rem;
  justify-content: center;
`;

const AmountButton = styled.button`
  background: #d32f2f;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.7rem 2.2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.12s;
  margin-bottom: 0.2rem;
  &:hover,
  &:focus {
    background: rgb(2, 2, 2);
    color: #d32f2f;
    transform: translateY(-2px) scale(1.04);
  }
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1.2rem 0 1.5rem 0;
  justify-content: center;
`;

const ToggleLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: #d32f2f;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const Radio = styled.input`
  accent-color: #d32f2f;
  width: 1.1rem;
  height: 1.1rem;
`;

const DonateButton = styled.button`
  width: 100%;
  max-width: 320px;
  background: linear-gradient(
    90deg,
    #d32f2f 60%,
    rgba(255, 255, 255, 0.53) 100%
  );
  color: #fff;
  font-size: 1.3rem;
  font-weight: 800;
  border: none;
  border-radius: 0.7rem;
  padding: 1.1rem 0;
  margin-top: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 16px 0 rgba(211, 47, 47, 0.08);
  transition: background 0.18s, color 0.18s, transform 0.12s;
  &:hover,
  &:focus {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.53) 60%,
      #d32f2f 100%
    );
    color: #d32f2f;
    transform: translateY(-2px) scale(1.03);
  }
`;

const InfoText = styled.div`
  font-size: 0.98rem;
  color: #607d8b;
  margin-top: 1.2rem;
  text-align: center;
`;

const Donations = () => {
  const [amount, setAmount] = useState(1000);
  const [donateType, setDonateType] = useState("monthly");
  const quickAmounts = [100, 1000, 2000, 5000, 10000];

  return (
    <PageWrapper>
      <DonationContainer>
        <LeftPanel>
          <Logo src={logoImg} alt="JanaSena Logo" />
          <LeaderImage src={leaderImg} alt="Leader" />
          <Title>నా సేన కోసం నా వంతు</Title>
          <Subtitle>Naa Sena Kosam Naa Vanthu</Subtitle>
          <div
            style={{
              fontWeight: 500,
              fontSize: "1.05rem",
              marginTop: "0.7rem",
              textAlign: "center",
            }}
          >
            My Janasena, My Contribution!
          </div>
        </LeftPanel>
        <RightPanel>
          <AmountInput
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Donate ₹ *"
          />
          <QuickAmounts>
            {quickAmounts.map((val) => (
              <AmountButton key={val} onClick={() => setAmount(val)}>
                {val}
              </AmountButton>
            ))}
            <AmountButton onClick={() => setAmount(0)}>Other</AmountButton>
          </QuickAmounts>
          <ToggleRow>
            <ToggleLabel>
              <Radio
                type="radio"
                name="donateType"
                checked={donateType === "monthly"}
                onChange={() => setDonateType("monthly")}
              />
              Donate Monthly
            </ToggleLabel>
            <ToggleLabel>
              <Radio
                type="radio"
                name="donateType"
                checked={donateType === "oneTime"}
                onChange={() => setDonateType("oneTime")}
              />
              Donate One Time
            </ToggleLabel>
          </ToggleRow>
          <DonateButton>Next</DonateButton>
          <InfoText>
            We Appreciate You For Coming Forward To Be A Part Of Building A
            Better Society!
          </InfoText>
        </RightPanel>
      </DonationContainer>
    </PageWrapper>
  );
};

export default Donations;
