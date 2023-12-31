import styled from 'styled-components';

interface NavigationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  data: {
    name: string;
    email: string;
    tel: string;
    plan: string;
    planMonthlyCost: number;
    yearlyMultiplier: number;
    period: string;
    addOns: {
      onlineServices: {
        description: string;
        monthlyPrice: number;
        isAdded: boolean;
      };
      largerStorage: {
        description: string;
        monthlyPrice: number;
        isAdded: boolean;
      };
      customizableProfile: {
        description: string;
        monthlyPrice: number;
        isAdded: boolean;
      };
    };
  };
  handleStepOneInputError: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  step,
  setStep,
  data,
  handleStepOneInputError
}) => {
  const handlePreviousStep = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNextStep = () => {
    if (step === 1) handleStepOneInputError();
    if (step === 1 && data.name && data.email && data.tel) setStep(2);
    if (step === 2 && data.plan) setStep(3);
    if (step >= 3 && step <= 4) setStep((s) => s + 1);
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
    cursor: pointer;
    font: inherit;

    &:hover {
      color: #022959;
    }
  }

  .next {
    background-color: #022959;
    border: none;
    color: #fff;
    border-radius: 0.4rem;
    cursor: pointer;
    width: 9.7rem;
    height: 4rem;
    font: inherit;

    &:hover {
      background-color: #164a8a;
    }
  }

  .next.confirm {
    background-color: #483eff;
  }

  .next.confirm:hover {
    background-color: #928cff;
  }

  @media all and (min-width: 1440px) {
    position: absolute;
    max-width: unset;
    width: 45rem;
    left: unset;
    right: 10rem;
    bottom: 1.6rem;
    transform: unset;
    font-size: 1.6rem;

    .container {
      width: 100%;
      max-width: 45rem;
      margin: 0;
    }

    .previous {
    }

    .next {
      width: 12.3rem;
      height: 4.8rem;
      border-radius: 0.8rem;
    }
  }
`;

export default Navigation;
