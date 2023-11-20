import { useState } from 'react';

function App() {
  const [step, setStep] = useState(1);

  return (
    <main>
      <StepsBar />
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

const StepsBar = () => {
  return (
    <aside>
      <div>
        <span>1</span>
        <div>
          <span>Step 1</span>
          <span>Your info</span>
        </div>
      </div>
      <div>
        <span>2</span>
        <div>
          <span>Step 2</span>
          <span>Select plan</span>
        </div>
      </div>
      <div>
        <span>3</span>
        <div>
          <span>Step 3</span>
          <span>Add ons</span>
        </div>
      </div>
      <div>
        <span>4</span>
        <div>
          <span>Step 4</span>
          <span>Summary</span>
        </div>
      </div>
    </aside>
  );
};

const Navigation = ({ step, setStep }) => {
  const handlePreviousStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNextStep = () => {
    if (step < 5) setStep((s) => s + 1);
  };

  return (
    <section>
      <div>
        <button onClick={handlePreviousStep}>Go back</button>
        <button onClick={handleNextStep}>Next Step</button>
      </div>
    </section>
  );
};

const Step1 = () => {
  return <h1>Step 1</h1>;
};

const Step2 = () => {
  return <h1>Step 2</h1>;
};

const Step3 = () => {
  return <h1>Step 3</h1>;
};

const Step4 = () => {
  return <h1>Step 4</h1>;
};

const Step5 = () => {
  return <h1>Step 5</h1>;
};
