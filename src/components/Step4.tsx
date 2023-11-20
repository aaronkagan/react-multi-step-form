import styled from 'styled-components';
const Step4 = () => {
  return (
    <StyledArticle>
      <h1 className="title">Finishing up</h1>
      <p className="text">
        Double-check everything looks OK before confirming.
      </p>
      <div>
        <div>
          <div>
            <span>Arcade (Monthly)</span>
            <button>Change</button>
          </div>
          <span>$9/mo</span>
        </div>
        <hr />
        <div>
          <span>Online service</span>
          <span>+$1/mo</span>
        </div>
        <div>
          <span>Larger storage</span>
          <span>+$2/mo</span>
        </div>
      </div>
      <div>
        <span>Total (per month)</span>
        <span>+$12/mo</span>
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

  .title {
    font-size: 2.4rem;
    margin-bottom: 0.9rem;
    color: #022959;
  }

  .text {
    color: #9699aa;
    font-size: 1.6rem;
    line-height: 2.5rem;
    margin-bottom: 2.2rem;
  }
`;
export default Step4;
