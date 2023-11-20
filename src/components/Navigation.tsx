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

export default Navigation;