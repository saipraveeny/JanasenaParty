import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ActionsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 2.5rem 0 2rem 0;
`;

const ActionButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: ${({ theme }) => theme.colors.glass};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.15rem;
  font-weight: 700;
  padding: 1.1rem 2.2rem;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.15s;
  min-width: 220px;
  justify-content: center;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-3px) scale(1.04);
  }
  @media (max-width: 600px) {
    min-width: 140px;
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

const ActionButtons = () => (
  <ActionsWrapper>
    <ActionButton to="/membership">
      <Icon>📝</Icon>Get Membership
    </ActionButton>
    <ActionButton to="/volunteer">
      <Icon>🤝</Icon>Become a Volunteer
    </ActionButton>
    <ActionButton to="#">
      <Icon>📧</Icon>Get Email Updates
    </ActionButton>
    <ActionButton to="/donate">
      <Icon>💖</Icon>Make a Donation
    </ActionButton>
  </ActionsWrapper>
);

export default ActionButtons;
