import styled from 'styled-components';
const Step3 = () => {
  return (
    <StyledArticle>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

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
`;

export default Step3;
