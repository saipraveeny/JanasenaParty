import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

const FooterWrapper = styled.footer`
  width: 100%;
  background: #d32f2f;
  border-radius: ${({ theme }) => theme.borderRadius}
    ${({ theme }) => theme.borderRadius} 0 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-top: 1px solid #b71c1c;
  margin-top: 2.5rem;
  padding: 2.5rem 1rem 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const CardsRow = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.07);
  padding: 2rem 2.5rem;
  min-width: 320px;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #d32f2f;
  @media (max-width: 480px) {
    padding: 1.2rem 0.7rem;
    min-width: 0;
    max-width: 98vw;
  }
`;

const CardTitle = styled.h2`
  color: #d32f2f;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

const CardSubtitle = styled.div`
  color: #333;
  font-size: 1.15rem;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const SubscribeInput = styled.input`
  border: 1.5px solid #e0e0e0;
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  margin-bottom: 0.7rem;
  width: 180px;
  background: #fff;
  color: #d32f2f;
  outline: none;
`;

const SubscribeButton = styled.button`
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  &:hover {
    background: #b71c1c;
    color: #fff;
  }
`;

const NotifyButton = styled.button`
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1.5rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.7rem;
  transition: background 0.18s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: #b71c1c;
    color: #fff;
  }
`;

const AppBadgeRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 0.5rem 0 0.5rem 0;
`;

const AppBadge = styled.a`
  background: #fff;
  color: #d32f2f;
  border-radius: 0.7rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s, background 0.18s, color 0.18s;
  border: 1px solid #fff;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px 0 rgba(211, 47, 47, 0.15);
    background: #f2f2f2;
    color: #d32f2f;
  }
`;

const InfoRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;

const InfoCol = styled.div`
  min-width: 220px;
  max-width: 320px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  color: #fff;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.2rem;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: #d32f2f;
  background: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px 0 rgba(211, 47, 47, 0.07);
  transition: background 0.18s, color 0.18s;
  &:hover {
    background: #f2f2f2;
    color: #d32f2f;
  }
`;

const Copyright = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 0.98rem;
  margin-top: 2rem;
  opacity: 0.9;
`;

const Footer = () => (
  <FooterWrapper>
    <CardsRow>
      <Card>
        <CardTitle>SUBSCRIBE TO OUR MAILING LIST</CardTitle>
        <CardSubtitle>
          Receive instant updates to mail from JanaSena
        </CardSubtitle>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SubscribeInput type="email" placeholder="your e-mail address" />
          <SubscribeButton>Subscribe!</SubscribeButton>
        </form>
      </Card>
      <Card>
        <CardTitle>SUBSCRIBE FOR NOTIFICATIONS</CardTitle>
        <CardSubtitle>
          Receive instant updates <b>WEB</b> or <b>MOBILE</b>
        </CardSubtitle>
        <NotifyButton>
          Notify Me{" "}
          <span role="img" aria-label="bell">
            🔔
          </span>
        </NotifyButton>
      </Card>
      <AppBadgeRow>
        <AppBadge
          href="https://play.google.com/store/apps/details?id=org.janasenaparty.troop"
          aria-label="Download on Google Play"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGoogleplay size={20} />
          Google Play
        </AppBadge>
        <AppBadge
          href="https://apps.apple.com/in/app/janasena-asthra/id1606892395"
          aria-label="Download on App Store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiAppstore size={20} />
          App Store
        </AppBadge>
      </AppBadgeRow>
    </CardsRow>
    <InfoRow>
      <InfoCol>
        <div style={{ fontWeight: 700 }}>Contact Us</div>
        <div>
          Plot No 11-1402, Sri Lakshmi Narasimha Colony, Mangalagiri,
          Guntur-522503
        </div>
        <div>Phone: 0864-5293140</div>
        <div>Mail: contact@janasenaparty.org</div>
      </InfoCol>
      <InfoCol>
        <div style={{ fontWeight: 700 }}>Quick Links</div>
        <div>Videos</div>
        <div>Gallery</div>
        <div>Membership</div>
        <div>Manifesto(English)</div>
      </InfoCol>
      <InfoCol>
        <div style={{ fontWeight: 700 }}>Copyrights</div>
        <div>© Copyrights 2025 JanaSena Party. All Rights Reserved.</div>
        <div>Privacy Policy | Disclaimer</div>
      </InfoCol>
    </InfoRow>
    <SocialRow>
      <SocialIcon
        href="https://www.facebook.com/janasenaparty/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook size={18} />
      </SocialIcon>
      <SocialIcon
        href="https://x.com/JanaSenaParty"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter size={18} />
      </SocialIcon>
      <SocialIcon
        href="https://www.instagram.com/janasenaparty/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram size={18} />
      </SocialIcon>
      <SocialIcon
        href="https://www.youtube.com/@JanaSenaParty/featured"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FaYoutube size={18} />
      </SocialIcon>
    </SocialRow>
    <Copyright>
      &copy; {new Date().getFullYear()} JanaSena Party. All Rights Reserved.
    </Copyright>
  </FooterWrapper>
);

export default Footer;
