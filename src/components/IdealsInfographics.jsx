import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ideal1 from "../assets/images/idealogies/Mindset that unites different castes..png";
import ideal2 from "../assets/images/idealogies/Politics without religious discrimination..jpg";
import ideal3 from "../assets/images/idealogies/Tradition that reveres linguistic diversity.jpg";
import ideal4 from "../assets/images/idealogies/Society that protects our traditions and culture..png";
import ideal5 from "../assets/images/idealogies/Nationalism that does not neglect regional aspirations.jpeg";
import ideal6 from "../assets/images/idealogies/Relentless fight against corruption.jpeg";
import ideal7 from "../assets/images/idealogies/Development that preserves the environment.jpg";

const ideals = [
  {
    text: "Mindset that unites different castes.",
    description:
      "A progressive vision that transcends caste boundaries, fostering unity through shared values of justice, opportunity, and dignity for all. It emphasizes equal representation, social harmony, and mutual respect across communities, challenging deep-rooted discrimination.",
    image: ideal1,
  },
  {
    text: "Politics without religious discrimination.",
    description:
      "An inclusive political approach that treats all faiths with equal respect, ensuring that governance is secular, fair, and focused on human values rather than religious divides. It promotes peace and coexistence, rejecting the misuse of religion for political gain.",
    image: ideal2,
  },
  {
    text: "Tradition that reveres linguistic diversity.",
    description:
      "A cultural ethos that celebrates India's multilingual richness, recognizing each language as a vessel of heritage and identity. It supports the preservation and promotion of all languages, fostering pride without promoting superiority or division.",
    image: ideal3,
  },
  {
    text: "Society that protects our traditions and culture.",
    description:
      "A society rooted in its timeless values and practices, yet open to progress. It safeguards the arts, rituals, folk customs, and heritage that define our identity, while promoting critical thinking and evolution in cultural expression.",
    image: ideal4,
  },
  {
    text: "Nationalism that does not neglect regional aspirations.",
    description:
      "A balanced patriotism that embraces India's unity while respecting the uniqueness of each state. It ensures regional voices are heard, aspirations addressed, and local cultures represented within the national framework—strengthening federalism.",
    image: ideal5,
  },
  {
    text: "Relentless fight against corruption.",
    description:
      "An uncompromising stance against injustice and misuse of power at all levels. It demands transparency, accountability, and integrity in governance, law enforcement, and public life—empowering citizens to hold the system accountable.",
    image: ideal6,
  },
  {
    text: "Development that preserves the environment.",
    description:
      "A model of growth that respects nature, aiming for sustainable progress. It promotes green technologies, responsible urban planning, and ecological conservation, ensuring that future generations inherit a thriving, livable planet.",
    image: ideal7,
  },
];

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 1rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Circle = styled.div`
  position: relative;
  width: 520px;
  height: 520px;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 340px;
    height: 340px;
  }
  @media (max-width: 480px) {
    width: 98vw;
    height: 98vw;
    min-width: 260px;
    min-height: 260px;
  }
  backdrop-filter: blur(6px);
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 1px;
  @media (max-width: 700px) {
    width: 90px;
  }
`;

const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  border-radius: 5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 1.2rem;
  transform: translate(-50%, -50%) scale(1);
  animation: ${fadeIn} 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.18s, box-shadow 0.18s;
  z-index: 2;
  overflow: hidden;
  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
    box-shadow: 0 12px 36px 0 rgba(211, 47, 47, 0.18);
  }
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.12);
    z-index: 1;
    border-radius: 5rem;
    box-shadow: 0 2px 16px 0 rgba(211, 47, 47, 0.08);
  }
  > span {
    position: relative;
    z-index: 2;
    color: #ffffff;
    font-weight: 800;
    text-shadow: 0 2px 8px #fff8, 0 1px 2px #0008;
  }
  @media (max-width: 700px) {
    width: 90px;
    height: 90px;
    font-size: 0.7rem;
    padding: 0.4rem;
    border-radius: 1.2rem;
  }
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 0.55rem;
    padding: 0.2rem;
    border-radius: 0.7rem;
  }
`;

const CenterTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 210px;
  height: 210px;
  background: linear-gradient(120deg, #fff 60%, #f8f8f8 100%);
  border-radius: 50%;
  box-shadow: 0 8px 32px 0 rgba(211, 47, 47, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #d32f2f;
  transform: translate(-50%, -50%);
  z-index: 3;
  border: 3px solid #fff;
  backdrop-filter: blur(6px);
  padding: 1rem;
  @media (max-width: 700px) {
    width: 90px;
    height: 90px;
    font-size: 0.6rem;
    padding: 0.1rem;
  }
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 0.4rem;
    padding: 0.1rem;
  }
`;

const BigNumber = styled.div`
  font-size: 2.8rem;
  font-weight: 900;
  color: #d32f2f;
  margin-bottom: 0.1em;
  text-shadow: 2px 2px 8px #a71c1c22;
  @media (max-width: 700px) {
    font-size: 1.3rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const DescriptionPanel = styled.div`
  width: 380px;
  height: 380px;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.glass};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.colors.glassBorder};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 520px;
    height: auto;
    min-height: 200px;
  }
`;

const PanelContent = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const IdealTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 1rem 0;
`;

const IdealDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.6;
  margin: 0;
`;

const PlaceholderText = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.7;
`;

const getCardPosition = (idx, total, radius) => {
  const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return {
    left: `calc(50% + ${x}px)`,
    top: `calc(50% + ${y}px)`,
  };
};

const FlipCardWrapper = styled.div`
  perspective: 900px;
  width: 98vw;
  max-width: 340px;
  margin: 0.7rem auto;
`;

const FlipCard = styled.div`
  width: 100%;
  height: 110px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 1.2rem;
  box-shadow: 0 4px 16px 0 rgba(211, 47, 47, 0.08);
  background: #fff;
  cursor: pointer;
  transform: ${({ flipped }) => (flipped ? "rotateY(180deg)" : "none")};
  & > div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const FlipCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  border-radius: 1.2rem;
  padding: 0;
  background: none;
  overflow: hidden;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 500;
  color: #232323;
  border-radius: 1.2rem;
  padding: 0.7rem 0.5rem;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(211, 47, 47, 0.08);
  transform: rotateY(180deg);
  z-index: 3;
`;

const MobileGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  margin: 0 auto;
  max-width: 360px;
`;

const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(50, 48, 48, 0.85);
  z-index: 1;
  border-radius: 5rem;
`;

const CardImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5rem;
  z-index: 0;
`;

const MobileTextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  padding: 0.5rem 0.7rem;
  border-radius: 0 0 1.2rem 1.2rem;
  z-index: 2;
  text-align: center;
`;

const IdealsInfographics = () => {
  const [activeIdeal, setActiveIdeal] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [flippedIdx, setFlippedIdx] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive radius for desktop
  let radius = 200;
  if (!isMobile && typeof window !== "undefined") {
    if (window.innerWidth < 700) radius = 110;
    if (window.innerWidth < 480) radius = 55;
  }

  if (isMobile) {
    return (
      <Wrapper>
        <MobileGrid>
          {ideals.map((ideal, idx) => (
            <FlipCardWrapper key={idx}>
              <FlipCard
                flipped={flippedIdx === idx}
                onClick={() => setFlippedIdx(flippedIdx === idx ? null : idx)}
              >
                <FlipCardFace style={{ position: "absolute" }}>
                  <CardImage
                    src={ideal.image}
                    alt={ideal.text}
                    style={{ borderRadius: "1.2rem" }}
                  />
                  <CardOverlay style={{ borderRadius: "1.2rem" }} />
                  <MobileTextOverlay>
                    <span
                      style={{
                        position: "relative",
                        zIndex: 2,
                        color: "#d32f2f",
                        fontWeight: 800,
                        textShadow: "0 2px 8px #fff8, 0 1px 2px #0008",
                      }}
                    >
                      {ideal.text}
                    </span>
                  </MobileTextOverlay>
                </FlipCardFace>
                <FlipCardBack>
                  <b style={{ color: "#d32f2f", fontWeight: 700 }}>
                    {ideal.text}
                  </b>
                  <br />
                  {ideal.description}
                </FlipCardBack>
              </FlipCard>
            </FlipCardWrapper>
          ))}
        </MobileGrid>
      </Wrapper>
    );
  }

  // Desktop (existing behavior)
  return (
    <Wrapper onMouseLeave={() => setActiveIdeal(null)}>
      <Circle>
        {ideals.map((ideal, idx) => (
          <Card
            key={idx}
            style={getCardPosition(idx, ideals.length, radius)}
            onMouseEnter={() => setActiveIdeal(ideal)}
          >
            <CardImage src={ideal.image} alt={ideal.text} />
            <CardOverlay />
            <span style={{ position: "relative", zIndex: 2 }}>
              {ideal.text}
            </span>
          </Card>
        ))}
        <CenterTitle>
          <BigNumber>7</BigNumber>
          IDEALS OF
          <br />
          JANASENA
        </CenterTitle>
      </Circle>
      <DescriptionPanel>
        {activeIdeal ? (
          <PanelContent key={activeIdeal.text}>
            <IdealTitle>{activeIdeal.text}</IdealTitle>
            <IdealDescription>{activeIdeal.description}</IdealDescription>
          </PanelContent>
        ) : (
          <PlaceholderText>Hover over an ideal to learn more.</PlaceholderText>
        )}
      </DescriptionPanel>
    </Wrapper>
  );
};

export default IdealsInfographics;
