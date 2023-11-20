import styled from 'styled-components';

const StepsBar = ({ step }) => {
  return (
    <StyledAside>
      <div>
        <span
          className="steps-circles"
          style={
            step >= 1 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          1
        </span>
        <div className="hidden-mobile ">
          <span>Step 1</span>
          <span>Your info</span>
        </div>
      </div>
      <div>
        <span
          className="steps-circles"
          style={
            step >= 2 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          2
        </span>
        <div className="hidden-mobile ">
          <span>Step 2</span>
          <span>Select plan</span>
        </div>
      </div>
      <div>
        <span
          className="steps-circles"
          style={
            step >= 3 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          3
        </span>
        <div className="hidden-mobile ">
          <span>Step 3</span>
          <span>Add ons</span>
        </div>
      </div>
      <div>
        <span
          className="steps-circles"
          style={
            step >= 4 ? { backgroundColor: '#BEE2FD', border: 'none' } : {}
          }
        >
          4
        </span>
        <div className="hidden-mobile ">
          <span>Step 4</span>
          <span>Summary</span>
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

  .steps-circles {
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
`;

export default StepsBar;
