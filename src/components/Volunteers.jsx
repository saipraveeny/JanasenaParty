import React from "react";
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

const TopSection = styled.div`
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

const LeaderImageSection = styled.div`
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

const TeluguBox = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  border-left: 2px solid #d32f2f;
  @media (max-width: 900px) {
    border-left: none;
    border-top: 2px solid #d32f2f;
    padding: 1.5rem 0.7rem 1.2rem 0.7rem;
  }
`;

const TeluguMessage = styled.div`
  font-size: 1.1rem;
  color: #232323;
  margin-bottom: 1.5rem;
  white-space: pre-line;
  font-family: inherit;
`;

const TeluguSignature = styled.div`
  font-size: 1rem;
  color: #d32f2f;
  margin-bottom: 1.2rem;
  text-align: right;
`;

const InterestedButton = styled.button`
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

const FormSection = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 2.5rem auto 0 auto;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(31, 38, 135, 0.07);
  padding: 2.5rem 2rem;
  @media (max-width: 900px) {
    padding: 1.2rem 0.5rem;
    margin: 1.2rem 0.5rem 0 0.5rem;
  }
`;

const FormTitle = styled.h2`
  color: #d32f2f;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
`;

const VolunteerForm = styled.form`
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
  font-weight: 600;
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
  font-weight: 600;
  color: #222;
  background: #fafafa;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #d32f2f;
  }
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
  font-weight: 600;
  color: #d32f2f;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 150px;
  width: 342px;
`;

const RadioLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #d32f2f;
  display: flex;
  align-items: center;
  gap: 0.4rem;
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

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  width: 100%;
  margin-bottom: 0.7rem;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0.7rem;
  }
`;

const CheckboxRow = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

const Volunteers = () => {
  return (
    <PageWrapper>
      <TopSection>
        <LeaderImageSection>
          <LeaderImage src={leaderImg} alt="Leader" />
        </LeaderImageSection>
        <TeluguBox>
          <TeluguMessage>
            {`ప్రియమైన జనసైనికులారా,

సదా వంశపారంపర్యాన్ని కాపాడుకోవడం సమయం అనస్వమైంద, 
అన్యాయాన్ని తిప్పి కొట్టి, బలహీన సమాజాన్ని రక్షించటం, రీలీని సమయం అనస్వమైంద,
పవర్ బిల్లు తక్కువ చేయడం, రైతు సమస్యలు పరిష్కరించడం సమయం అనస్వమైంద,

మానవత్వాన్ని తెలుగు ప్రజలందరికి చాటిచెప్పే సమయం అనస్వమైంద,
ఎన్నికల రణరంగంలో యోధులుగా పోరాడదామా... నాతో కలిసి నడిచే సమయం అనస్వమైంద.

- మీ జనసేనాని
  పవన్ కళ్యాణ్

రా సైనికా .. కదలిరా సైనికా .. జనసేనానిలో అడుగువేయ్`}
          </TeluguMessage>
          <TeluguSignature>- మీ జనసేనాని పవన్ కళ్యాణ్</TeluguSignature>
          <InterestedButton>I'm Interested</InterestedButton>
        </TeluguBox>
      </TopSection>
      <FormSection>
        <FormTitle>Volunteer For Janasena</FormTitle>
        <VolunteerForm autoComplete="off">
          <FormRow>
            <Input placeholder="పేరు" />
            <Select>
              <option>వయస్సు</option>
            </Select>
          </FormRow>
          <FormRow>
            <RadioGroup>
              <span>ఇది మీ వాట్సాప్ నంబర్ యా?</span>
              <RadioLabel>
                <input type="radio" name="whatsapp" /> అవును
              </RadioLabel>
              <RadioLabel>
                <input type="radio" name="whatsapp" /> కాదు
              </RadioLabel>
            </RadioGroup>
            <Input placeholder="ఫోన్ నంబర్" />
            <FormRow>
              <Input placeholder="ఈ-మెయిల్" />
              <Select>
                <option>వృత్తి</option>
              </Select>
            </FormRow>
          </FormRow>
          <FormRow>
            <Select>
              <option>రాష్ట్రం</option>
            </Select>
            <Select>
              <option>జిల్లా</option>
            </Select>
            <FormRow>
              <Select>
                <option>మండలం</option>
              </Select>
              <Select>
                <option>అసెంబ్లీ నియోజకవర్గం</option>
              </Select>
            </FormRow>
          </FormRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              ప్రచారానికి ప్రణాళిక తయారు చేయడం
            </CheckboxLabel>
          </CheckboxRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              సమస్యలపై పరిశోధన చేయడం
            </CheckboxLabel>
          </CheckboxRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              ఇంటింటికి వెళ్లి జనసేన విధానాలు వివరించడం
            </CheckboxLabel>
          </CheckboxRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              వ్యాఖ్యానాలు తయారు చేయడం, ప్రచారం చేయడం
            </CheckboxLabel>
          </CheckboxRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              సామాజిక మాధ్యమాల్లో ప్రచారం చేయడం
            </CheckboxLabel>
          </CheckboxRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              న్యాయ సహాయం (కౌన్సిలింగ్, కేసుల పరిశీలన)
            </CheckboxLabel>
          </CheckboxRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              స్వచ్ఛంద సేవలు (రక్తదానం, ఆరోగ్య శిబిరాలు, సహాయం)
            </CheckboxLabel>
          </CheckboxRow>
          <CheckboxRow>
            <CheckboxLabel>
              <input type="checkbox" />
              ఇతర సేవలు, సూచనలు
            </CheckboxLabel>
          </CheckboxRow>
          <FormRow>
            <RadioGroup>
              <span>మీరు గతంలో స్వచ్ఛందంగా పనిచేశారా?</span>
              <RadioLabel>
                <input type="radio" name="volunteeredBefore" /> అవును
              </RadioLabel>
              <RadioLabel>
                <input type="radio" name="volunteeredBefore" /> కాదు
              </RadioLabel>
            </RadioGroup>
          </FormRow>
          <SubmitButton type="button">submit</SubmitButton>
        </VolunteerForm>
      </FormSection>
    </PageWrapper>
  );
};

export default Volunteers;
