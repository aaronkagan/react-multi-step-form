import styled from 'styled-components';

const StepsBar = ({ step }) => {
  return (
    <StyledAside>
      <div>
        <span style={{ backgroundColor: step >= 1 ? '#BEE2FD' : '' }}>1</span>
        <div>
          <span>Step 1</span>
          <span>Your info</span>
        </div>
      </div>
      <div>
        <span style={{ backgroundColor: step >= 2 ? '#BEE2FD' : '' }}>2</span>
        <div>
          <span>Step 2</span>
          <span>Select plan</span>
        </div>
      </div>
      <div>
        <span style={{ backgroundColor: step >= 3 ? '#BEE2FD' : '' }}>3</span>
        <div>
          <span>Step 3</span>
          <span>Add ons</span>
        </div>
      </div>
      <div>
        <span style={{ backgroundColor: step >= 4 ? '#BEE2FD' : '' }}>4</span>
        <div>
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
`;

export default StepsBar;
