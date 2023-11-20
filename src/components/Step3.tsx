import styled from 'styled-components';
const Step3 = () => {
  return (
    <StyledArticle>
      <h1 className="title">Pick add-ons</h1>
      <p className="text">Add-ons help enhance your gaming experience.</p>

      <div>
        <article>
          <input
            type="checkbox"
            name=""
            id=""
          />
          <div>
            <h3>Online Services</h3>
            <p>Access to multiplayer games</p>
          </div>
          <span>+$1/mo</span>
        </article>
        <article>
          <input
            type="checkbox"
            name=""
            id=""
          />
          <div>
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <span>+$2/mo</span>
        </article>
        <article>
          <input
            type="checkbox"
            name=""
            id=""
          />
          <div>
            <h3>Customizable profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <span>+$2/month</span>
        </article>
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

export default Step3;
