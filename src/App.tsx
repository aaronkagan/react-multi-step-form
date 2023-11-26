import { useState } from 'react';
import Navigation from './components/Navigation';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import StepsBar from './components/StepsBar';
import GlobalStyle from './components/GlobalStyle';

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
        yearlyPrice: 10,
        isAdded: false
      },
      largerStorage: {
        description: 'Larger Storage',
        monthlyPrice: 2,
        yearlyPrice: 20,
        isAdded: false
      },
      customizableProfile: {
        description: 'Customizable Profile',
        monthlyPrice: 1,
        yearlyPrice: 20,
        isAdded: false
      }
    }
  });

  return (
    <>
      <GlobalStyle />
      <main>
        <StepsBar step={step} />
        {step === 1 && (
          <Step1
            data={data}
            setData={setData}
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
        {step === 4 && <Step4 data={data} />}
        {step === 5 && <Step5 />}
        <Navigation
          step={step}
          setStep={setStep}
        />
      </main>
    </>
  );
}

export default App;
