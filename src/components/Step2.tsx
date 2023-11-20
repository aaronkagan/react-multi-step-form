import styled from 'styled-components';

const Step2 = () => {
  return (
    <StyledArticle>
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <article>
          <h3>Arcade</h3>
          <span>$9/mo</span>
        </article>
        <article>
          <h3>Advanced</h3>
          <span>$12/mo</span>
        </article>
        <article>
          <h3>Pro</h3>
          <span>$15/mo</span>
        </article>
      </div>
      <div>
        <span>Monthly</span>
        <div>
          <div>TOGGLE</div>
        </div>
        <span>Yearly</span>
      </div>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  padding: 3.2rem 2.4rem;
  border-radius: 1rem;
  width: 95%;
  max-width: 34.3rem;
  margin: 0 auto;
  background-color: #fff;
  transform: translateY(-7rem);
`;

export default Step2;
