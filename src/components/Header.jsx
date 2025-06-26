import React, { useState } from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const HeaderBar = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 2vw;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(12px);
  border-radius: 0 0 ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  min-width: 280px;
  padding: 1rem;
  z-index: 1001;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-10px)"};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
`;

const MenuSection = styled.div`
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LanguageDropdown = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  outline: none;
  width: 100%;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`;

const SocialIcon = styled.a`
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primary};
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ActionLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.2s, color 0.2s;
  font-size: 0.9rem;
  text-align: center;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderBar>
      <Left>
        <span style={{ fontSize: "1.1rem", fontWeight: 600, color: "#D32F2F" }}>
          JanaSena Party
        </span>
      </Left>
      <HamburgerButton onClick={toggleMenu} aria-label="Menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </HamburgerButton>
      <DropdownMenu isOpen={isMenuOpen}>
        <MenuSection>
          <SectionTitle>Language</SectionTitle>
          <LanguageDropdown>
            <option>English</option>
            <option>తెలుగు</option>
          </LanguageDropdown>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Social Links</SectionTitle>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <FaFacebook size={16} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <FaTwitter size={16} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram size={16} />
            </SocialIcon>
            <SocialIcon href="#" aria-label="YouTube">
              <FaYoutube size={16} />
            </SocialIcon>
          </SocialLinks>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Quick Actions</SectionTitle>
          <ActionButtons>
            <ActionLink href="#">Get Membership</ActionLink>
            <ActionLink href="#">NRI Connect</ActionLink>
            <ActionLink href="#">Donate</ActionLink>
            <ActionLink href="#">President's Office</ActionLink>
          </ActionButtons>
        </MenuSection>
      </DropdownMenu>
    </HeaderBar>
  );
};

export default Header;
