import styled from 'styled-components';
const Step5 = () => {
  return (
    <StyledArticle>
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="40"
          cy="40"
          r="40"
          fill="#F9818E"
        />
        <path
          d="M48.4643 79.1667C49.2318 79.0173 49.9948 78.8455 50.7523 78.6515C52.0371 78.2933 53.3033 77.8711 54.5461 77.3865C55.7914 76.9044 57.0119 76.3603 58.203 75.7562C59.3936 75.1495 60.5532 74.4835 61.6773 73.7609C62.7997 73.0395 63.8853 72.2626 64.9301 71.4329C65.9775 70.6013 66.9826 69.7177 67.9417 68.7854C68.8981 67.8555 69.8075 66.8783 70.6664 65.8575C71.5274 64.8358 72.3367 63.7715 73.0913 62.6688C73.8451 61.5676 74.5435 60.4294 75.1838 59.2584C75.8236 58.0862 76.4045 56.8826 76.9242 55.6524C77.4451 54.4219 77.9042 53.1662 78.2996 51.8898C78.6378 50.7727 78.9271 49.6413 79.1666 48.4989L55.3739 24.6977C51.1311 20.4532 45.5904 18.3333 40.0423 18.3333C34.4939 18.3333 28.9406 20.4529 24.6977 24.6977C16.2118 33.1867 16.2118 46.9026 24.6977 55.3915L48.4643 79.1667Z"
          fill="#E96170"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.3136 24.6843C51.0784 20.4488 45.5416 18.3333 40.0032 18.3333C34.4648 18.3333 28.9215 20.4488 24.6862 24.6843C16.2156 33.1554 16.2156 46.8423 24.6862 55.3134C33.1568 63.7844 46.8431 63.7844 55.3136 55.3134C63.7842 46.8423 63.7842 33.1554 55.3136 24.6843ZM48.9956 33.6772C49.2455 33.4824 49.552 33.3612 49.8675 33.3323L49.8675 33.3323C49.9238 33.3294 49.9803 33.3294 50.0366 33.3323C51.4237 33.3521 52.1147 35.5287 50.9931 36.3451L37.6672 46.34C37.0328 46.8135 36.0542 46.7432 35.494 46.1839L28.831 39.5206C27.5563 38.2966 29.9626 35.8902 31.1865 37.165L36.8279 42.8067L48.9956 33.6772Z"
          fill="white"
        />
      </svg>
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

  svg {
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
