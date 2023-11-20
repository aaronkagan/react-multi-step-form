import styled from 'styled-components';

const Step1 = () => {
  return (
    <StyledArticle>
      <h1 className="title">Personal Info</h1>
      <p className="text">
        Please provide your name, email address, and phone number.
      </p>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g. Stephen King"
        />
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <label htmlFor="tel">Phone Number</label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </form>
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
  margin-bottom: 2.4rem;

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

  label {
    display: block;
    color: #022959;
    font: 1.2rem;
    margin-bottom: 0.3rem;
  }

  input {
    border: 1px solid #d6d9e6;
    border-radius: 0.4rem;
    margin-bottom: 1.6rem;
    width: 100%;
    font-size: 1.6rem;
    padding: 1.1rem 1.6rem;
    color: #022959;
  }

  input:focus {
    outline: 1px solid #483eff;
  }

  input:placeholder {
    font-size: 1.6rem;
    color: #9699aa;
  }
`;

export default Step1;
