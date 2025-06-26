import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #fff 60%, #f8f8f8 100%);
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.13);
  border-radius: 1.5rem;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  min-width: 400px;
  max-width: 450px;
  width: 100%;
  animation: ${fadeIn} 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1.5px solid rgba(211, 47, 47, 0.08);
  position: relative;
  @media (max-width: 480px) {
    padding: 1.2rem 0.5rem 1.2rem 0.5rem;
    min-width: 0;
    max-width: 98vw;
  }
`;

const Tabs = styled.div`
  display: flex;
  border-radius: 1.2rem 1.2rem 0 0;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.04);
`;

const Tab = styled.button`
  flex: 1;
  padding: 1rem 0.5rem;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "#23272f"};
  color: ${({ active, theme }) => (active ? theme.colors.white : "#fff")};
  font-weight: 500;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  letter-spacing: 0.5px;
  &:first-child {
    border-radius: 1.2rem 0 0 0;
  }
  &:last-child {
    border-radius: 0 1.2rem 0 0;
  }
`;

const FormTitle = styled.h2`
  color: #d32f2f;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FloatingLabelGroup = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

const FloatingInput = styled.input`
  width: 100%;
  padding: 1.1rem 0.9rem 0.5rem 0.9rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.7rem;
  background: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  font-weight: 500;
  color: #222;
  outline: none;
  transition: border 0.18s, box-shadow 0.18s;
  &:focus {
    border: 1.5px solid #d32f2f;
    box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.08);
  }
  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: 0.3rem;
    left: 0.9rem;
    font-size: 0.85rem;
    color: #d32f2f;
    background: rgba(255, 255, 255, 0.9);
    padding: 0 0.3rem;
    border-radius: 0.4rem;
  }
`;

const FloatingSelect = styled.select`
  width: 100%;
  padding: 1.1rem 0.9rem 0.5rem 0.9rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.7rem;
  background: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  font-weight: 500;
  color: #222;
  outline: none;
  transition: border 0.18s, box-shadow 0.18s;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23212121%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.3-5.5-12.8z%22/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.9rem top 50%;
  background-size: 0.65em auto;

  &:focus {
    border: 1.5px solid #d32f2f;
    box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.08);
  }
  & + label {
    top: 0.3rem !important;
    left: 0.9rem !important;
    font-size: 0.85rem !important;
    color: #d32f2f !important;
    background: rgba(255, 255, 255, 0.9) !important;
    padding: 0 0.3rem !important;
    border-radius: 0.4rem !important;
  }
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: 1.1rem;
  left: 1rem;
  font-size: 1.05rem;
  color: #888;
  pointer-events: none;
  transition: all 0.18s;
  background: transparent;
`;

const RequestOTPButton = styled.button`
  width: 100%;
  background: #d32f2f;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 0.7rem;
  padding: 0.9rem 0;
  margin-top: 0.5rem;
  box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.08);
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  &:hover {
    background: #b71c1c;
    color: #fff;
    box-shadow: 0 4px 16px 0 rgba(211, 47, 47, 0.13);
  }
`;

const BottomLink = styled.div`
  text-align: center;
  margin-top: 1.2rem;
  font-size: 1rem;
  color: #607d8b;
  a {
    color: #1976d2;
    text-decoration: underline;
    transition: color 0.18s;
    &:hover {
      color: #d32f2f;
    }
  }
`;

const Membership = () => {
  const [tab, setTab] = useState(0);
  const [phone, setPhone] = useState("");
  const [voterId, setVoterId] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const renderForm = () => {
    if (tab === 1) {
      // NRI Membership Form
      return (
        <Form key="nri-form" autoComplete="off">
          <FloatingLabelGroup>
            <FloatingSelect
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CAN">Canada</option>
              <option value="AUS">Australia</option>
              <option value="UAE">United Arab Emirates</option>
            </FloatingSelect>
            <FloatingLabel htmlFor="country">Select Country</FloatingLabel>
          </FloatingLabelGroup>
          <FloatingLabelGroup>
            <FloatingInput
              type="tel"
              id="nri-phone"
              placeholder=" "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <FloatingLabel htmlFor="nri-phone">Phone Number</FloatingLabel>
          </FloatingLabelGroup>
          <FloatingLabelGroup>
            <FloatingInput
              type="email"
              id="nri-email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FloatingLabel htmlFor="nri-email">Email</FloatingLabel>
          </FloatingLabelGroup>
          <FloatingLabelGroup>
            <FloatingInput
              type="text"
              id="nri-voterid"
              placeholder=" "
              value={voterId}
              onChange={(e) => setVoterId(e.target.value)}
              required
            />
            <FloatingLabel htmlFor="nri-voterid">Voter ID</FloatingLabel>
          </FloatingLabelGroup>
          <RequestOTPButton type="submit">REQUEST OTP</RequestOTPButton>
        </Form>
      );
    }

    // Default form (Already Member)
    return (
      <Form key="default-form" autoComplete="off">
        <FloatingLabelGroup>
          <FloatingInput
            type="text"
            id="phone"
            placeholder=" "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <FloatingLabel htmlFor="phone">Phone or MembershipID</FloatingLabel>
        </FloatingLabelGroup>
        <FloatingLabelGroup>
          <FloatingInput
            type="text"
            id="voterid"
            placeholder=" "
            value={voterId}
            onChange={(e) => setVoterId(e.target.value)}
            required
          />
          <FloatingLabel htmlFor="voterid">Voter ID</FloatingLabel>
        </FloatingLabelGroup>
        <RequestOTPButton type="submit">REQUEST OTP</RequestOTPButton>
      </Form>
    );
  };

  return (
    <PageWrapper>
      <Card>
        <Tabs>
          <Tab active={tab === 0} onClick={() => setTab(0)}>
            Already Member? login here
          </Tab>
          <Tab active={tab === 1} onClick={() => setTab(1)}>
            NRI Membership
          </Tab>
        </Tabs>
        <FormTitle>Membership Enrolment Form</FormTitle>
        {renderForm()}
        <BottomLink>
          Not a registered Voter? <a href="#">Please click here</a>
        </BottomLink>
      </Card>
    </PageWrapper>
  );
};

export default Membership;
