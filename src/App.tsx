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
  const [plan, setPlan] = useState('');
  const [payPeriod, setPayPeriod] = useState('monthly');

  return (
    <>
      <GlobalStyle />
      <main>
        <StepsBar step={step} />
        {step === 1 && <Step1 />}
        {step === 2 && (
          <Step2
            plan={plan}
            setPlan={setPlan}
            payPeriod={payPeriod}
            setPayPeriod={setPayPeriod}
          />
        )}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
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
