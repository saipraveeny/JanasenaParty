import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as LogoTitle } from "../assets/logos/logo_title.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavbarBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 2vw;
  background: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius} 0 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
  margin-bottom: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const LogoSvg = styled(LogoTitle)`
  height: 44px;
  width: auto;
  display: block;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 992px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  padding: 0.4rem 1.2rem;
  border-radius: 999px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  text-decoration: none;
  &:hover,
  &.active {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.1);
    text-decoration: none;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  @media (max-width: 992px) {
    display: none;
  }
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
  display: block;
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

const ActionLink = styled(Link)`
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
    text-decoration: none;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToIdeals = (e) => {
    e.preventDefault();
    if (isMenuOpen) toggleMenu();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("ideals-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      document
        .getElementById("ideals-section")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <NavbarBar>
      <Left>
        <LogoWrap>
          <Link to="/">
            <LogoSvg />
          </Link>
        </LogoWrap>
      </Left>
      <Right>
        <Menu>
          <MenuItem as={Link} to="/" className="active">
            Home
          </MenuItem>
          <MenuItem
            as="a"
            href="#ideals-section"
            onClick={handleScrollToIdeals}
          >
            Our Ideals
          </MenuItem>
          <MenuItem
            as="a"
            href="http://janasenanewsletter.com/news"
            target="_blank"
            rel="noopener noreferrer"
          >
            Janasena News Letter
          </MenuItem>
        </Menu>
        <ActionButtonsWrapper>
          <ActionLink to="/membership">Get Membership</ActionLink>
          <ActionLink to="/savve">NRI Connect</ActionLink>
          <ActionLink to="/donate">Donate</ActionLink>
        </ActionButtonsWrapper>
        <HamburgerButton onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </HamburgerButton>
      </Right>
      <DropdownMenu isOpen={isMenuOpen}>
        <MenuSection>
          <SectionTitle>Menu</SectionTitle>
          <ActionButtons>
            <ActionLink as={Link} to="/" className="active">
              Home
            </ActionLink>
            <ActionLink
              as="a"
              href="#ideals-section"
              onClick={handleScrollToIdeals}
            >
              Our Ideals
            </ActionLink>
            <ActionLink
              href="http://janasenanewsletter.com/news"
              target="_blank"
              rel="noopener noreferrer"
            >
              Janasena News Letter
            </ActionLink>
          </ActionButtons>
        </MenuSection>

        <MenuSection>
          <SectionTitle>Quick Actions</SectionTitle>
          <ActionButtons>
            <ActionLink to="/membership">Get Membership</ActionLink>
            <ActionLink to="/savve">NRI Connect</ActionLink>
            <ActionLink to="/donate">Donate</ActionLink>
            <ActionLink to="#">President's Office</ActionLink>
          </ActionButtons>
        </MenuSection>

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
            <SocialIcon
              href="https://www.facebook.com/janasenaparty/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={16} />
            </SocialIcon>
            <SocialIcon
              href="https://x.com/JanaSenaParty"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/janasenaparty/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </SocialIcon>
            <SocialIcon
              href="https://www.youtube.com/@JanaSenaParty/featured"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube size={16} />
            </SocialIcon>
          </SocialLinks>
        </MenuSection>
      </DropdownMenu>
    </NavbarBar>
  );
};

export default Navbar;
