import styled from 'styled-components';

const Navigation = ({ step, setStep }) => {
  const handlePreviousStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNextStep = () => {
    if (step < 5) setStep((s) => s + 1);
  };

  return (
    <>
      {step !== 5 && (
        <StyledNav>
          <div className="container">
            {step !== 1 ? (
              <button
                className="previous"
                onClick={handlePreviousStep}
              >
                Go Back
              </button>
            ) : (
              // Empty div for consistent positioning
              <div></div>
            )}
            {step === 4 ? (
              <button
                className="next confirm"
                onClick={handleNextStep}
              >
                Confirm
              </button>
            ) : (
              <button
                className="next"
                onClick={handleNextStep}
              >
                Next Step
              </button>
            )}
          </div>
        </StyledNav>
      )}
    </>
  );
};

const StyledNav = styled.nav`
  font-size: 1.4rem;
  font-weight: 500;
  height: 7.2rem;
  width: 100%;
  background-color: #fff;
  bottom: 0;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    max-width: 42.5rem;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .previous {
    color: #9699aa;
    background: none;
    border: none;
  }

  .next {
    background-color: #022959;
    border: none;
    color: #fff;
    border-radius: 0.4rem;
    cursor: pointer;
    width: 9.7rem;
    height: 4rem;
  }

  .next.confirm {
    background-color: #483eff;
  }

  .next.confirm:hover {
    background-color: #928cff;
  }
`;

export default Navigation;
