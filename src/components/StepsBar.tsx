import styled from 'styled-components';

interface StepsBarProps {
  step: number;
}
const StepsBar: React.FC<StepsBarProps> = ({ step }) => {
  return (
    <StyledAside>
      <div className="step-container">
        <span
          className="steps-circle"
          style={
            step >= 1 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          1
        </span>
        <div className="hidden-mobile ">
          <span className="step-text">Step 1</span>
          <span className="step-description">Your info</span>
        </div>
      </div>
      <div className="step-container">
        <span
          className="steps-circle"
          style={
            step >= 2 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          2
        </span>
        <div className="hidden-mobile ">
          <span className="step-text">Step 2</span>
          <span className="step-description">Select plan</span>
        </div>
      </div>
      <div className="step-container">
        <span
          className="steps-circle"
          style={
            step >= 3 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          3
        </span>
        <div className="hidden-mobile ">
          <span className="step-text">Step 3</span>
          <span className="step-description">Add ons</span>
        </div>
      </div>
      <div className="step-container">
        <span
          className="steps-circle"
          style={
            step >= 4 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          4
        </span>
        <div className="hidden-mobile ">
          <span className="step-text">Step 4</span>
          <span className="step-description">Summary</span>
        </div>
      </div>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  background-image: url('/public/assets/images/bg-sidebar-mobile.svg');
  background-size: cover;
  min-height: 17.2rem;
  display: flex;
  justify-content: center;
  gap: 1.6rem;

  .hidden-mobile {
    display: none;
  }

  .steps-circle {
    width: 3.3rem;
    height: 3.3rem;
    border-radius: 50%;
    font-size: 1.4rem;
    font-weight: 700;
    display: grid;
    place-items: center;
    margin-top: 3.7rem;
    border: 1px solid #fff;
  }

  @media all and (min-width: 1440px) {
    background-image: url('/public/assets/images/bg-sidebar-desktop.svg');
    flex-direction: column;
    min-width: 27.4rem;
    height: 56.8rem;
    padding: 4rem 3.2rem;
    justify-content: flex-start;
    gap: 3.1rem;
    position: absolute;
    z-index: 1;

    top: 1.6rem;
    left: 1.6rem;

    .step-container {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      .steps-circle {
        margin: 0;
      }
      .hidden-mobile {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        .step-text {
          color: #abbcff;
          font-size: 1.2rem;
          text-transform: uppercase;
        }

        .step-description {
          color: #fff;
          font-size: 1.4rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
        }
      }
    }
  }
`;

export default StepsBar;
