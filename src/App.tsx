import { useState } from 'react';
import Navigation from './components/Navigation';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import StepsBar from './components/StepsBar';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: '',
    email: '',
    tel: '',
    plan: '',
    planMonthlyCost: 0,
    yearlyMultiplier: 10,
    period: 'monthly',
    addOns: {
      onlineServices: {
        description: 'Online Services',
        monthlyPrice: 1,
        isAdded: false
      },
      largerStorage: {
        description: 'Larger Storage',
        monthlyPrice: 2,
        isAdded: false
      },
      customizableProfile: {
        description: 'Customizable Profile',
        monthlyPrice: 2,
        isAdded: false
      }
    }
  });

  const [isStepOneSubmitted, setIsStepOneSubmitted] = useState(false);

  function handleStepOneInputError() {
    setIsStepOneSubmitted(true);
  }

  return (
    <>
      <GlobalStyle />
      <StyledMain>
        <StepsBar step={step} />
        {step === 1 && (
          <Step1
            data={data}
            setData={setData}
            isStepOneSubmitted={isStepOneSubmitted}
          />
        )}
        {step === 2 && (
          <Step2
            data={data}
            setData={setData}
          />
        )}
        {step === 3 && (
          <Step3
            data={data}
            setData={setData}
          />
        )}
        {step === 4 && (
          <Step4
            data={data}
            setStep={setStep}
          />
        )}
        {step === 5 && <Step5 />}
        <Navigation
          step={step}
          setStep={setStep}
          data={data}
          handleStepOneInputError={handleStepOneInputError}
        />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  @media all and (min-width: 1440px) {
    position: relative;
    background-color: #fff;
    width: 94rem;
    height: 60rem;
    border-radius: 1rem;
  }
`;

export default App;
