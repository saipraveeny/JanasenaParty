import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const ideals = [
  {
    text: "Mindset that unites different castes.",
    description:
      "A progressive vision that transcends caste boundaries, fostering unity through shared values of justice, opportunity, and dignity for all. It emphasizes equal representation, social harmony, and mutual respect across communities, challenging deep-rooted discrimination.",
    bg: "linear-gradient(120deg, #fff8, #d32f2f22)",
  },
  {
    text: "Politics without religious discrimination.",
    description:
      "An inclusive political approach that treats all faiths with equal respect, ensuring that governance is secular, fair, and focused on human values rather than religious divides. It promotes peace and coexistence, rejecting the misuse of religion for political gain.",
    bg: "linear-gradient(120deg, #fff8, #21212122)",
  },
  {
    text: "Tradition that reveres linguistic diversity.",
    description:
      "A cultural ethos that celebrates India's multilingual richness, recognizing each language as a vessel of heritage and identity. It supports the preservation and promotion of all languages, fostering pride without promoting superiority or division.",
    bg: "linear-gradient(120deg, #fff8, #d32f2f22)",
  },
  {
    text: "Society that protects our traditions and culture.",
    description:
      "A society rooted in its timeless values and practices, yet open to progress. It safeguards the arts, rituals, folk customs, and heritage that define our identity, while promoting critical thinking and evolution in cultural expression.",
    bg: "linear-gradient(120deg, #fff8, #21212122)",
  },
  {
    text: "Nationalism that does not neglect regional aspirations.",
    description:
      "A balanced patriotism that embraces India's unity while respecting the uniqueness of each state. It ensures regional voices are heard, aspirations addressed, and local cultures represented within the national framework—strengthening federalism.",
    bg: "linear-gradient(120deg, #fff8, #d32f2f22)",
  },
  {
    text: "Relentless fight against corruption.",
    description:
      "An uncompromising stance against injustice and misuse of power at all levels. It demands transparency, accountability, and integrity in governance, law enforcement, and public life—empowering citizens to hold the system accountable.",
    bg: "linear-gradient(120deg, #fff8, #21212122)",
  },
  {
    text: "Development that preserves the environment.",
    description:
      "A model of growth that respects nature, aiming for sustainable progress. It promotes green technologies, responsible urban planning, and ecological conservation, ensuring that future generations inherit a thriving, livable planet.",
    bg: "linear-gradient(120deg, #fff8, #388e3c22)",
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
  width: 140px;
  height: 140px;
  background-size: cover;
  background-position: center;
  border-radius: 10rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 1rem;
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
    background: rgba(33, 33, 33, 0.45);
    z-index: 1;
    border-radius: 1.2rem;
  }
  > span {
    position: relative;
    z-index: 2;
  }
  @media (max-width: 700px) {
    width: 80px;
    height: 80px;
    font-size: 0.7rem;
    padding: 0.4rem;
  }
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
    font-size: 0.55rem;
    padding: 0.2rem;
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

const IdealsInfographics = () => {
  const [activeIdeal, setActiveIdeal] = useState(null);

  // Responsive radius
  let radius = 200;
  if (typeof window !== "undefined") {
    if (window.innerWidth < 700) radius = 110;
    if (window.innerWidth < 480) radius = 55;
  }
  return (
    <Wrapper onMouseLeave={() => setActiveIdeal(null)}>
      <Circle>
        {ideals.map((ideal, idx) => (
          <Card
            key={idx}
            bg={ideal.bg}
            style={getCardPosition(idx, ideals.length, radius)}
            onMouseEnter={() => setActiveIdeal(ideal)}
          >
            <span>{ideal.text}</span>
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
