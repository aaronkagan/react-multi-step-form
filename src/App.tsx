import { useState } from 'react';
import Navigation from './components/Navigation';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import StepsBar from './components/StepsBar';

function App() {
  const [step, setStep] = useState(1);

  return (
    <main>
      <StepsBar step={step} />
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
      {step === 5 && <Step5 />}
      <Navigation
        step={step}
        setStep={setStep}
      />
    </main>
  );
}

export default App;
