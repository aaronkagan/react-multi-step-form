import styled from 'styled-components';
const Step5 = () => {
  return (
    <StyledArticle>
      <img
        className="img"
        src="public/assets/images/icon-thank-you.svg"
        alt="Thank you icon"
      />
      <h1 className="title">Thank you!</h1>
      <p className="text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </StyledArticle>
  );
};

const StyledArticle = styled.article`
  padding: 7.5rem 2.4rem;
  border-radius: 1rem;
  width: 95%;
  max-width: 34.3rem;
  margin: 0 auto;
  background-color: #fff;
  transform: translateY(-7rem);
  text-align: center;
  margin-bottom: 2.4rem;

  .img {
    margin-bottom: 2.4rem;
  }

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

export default Step5;
