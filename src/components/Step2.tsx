import styled from 'styled-components';

const Step2 = ({
  plan,
  setPlan,
  planCost,
  setPlanCost,
  payPeriod,
  setPayPeriod
}) => {
  return (
    <StyledArticle>
      <h1 className="title">Select Your Plan</h1>
      <p className="text">You have the option of monthly or yearly billing.</p>
      <div>
        <article
          className={plan === 'arcade' ? 'card active' : 'card'}
          onClick={() => {
            setPlan('arcade');
            setPlanCost(payPeriod === 'monthly' ? 9 : null);
          }}
        >
          <img
            className="icon"
            src="public/assets/images/icon-arcade.svg"
            alt="Arcade Icon"
          />
          <div className="card-text-container">
            <h3 className="card-title">Arcade</h3>
            <span className="card-text">$9/mo</span>
          </div>
        </article>
        <article
          className={plan === 'advanced' ? 'card active' : 'card'}
          onClick={() => {
            setPlan('advanced');
            setPlanCost(payPeriod === 'monthly' ? 12 : null);
          }}
        >
          <img
            className="icon"
            src="public/assets/images/icon-advanced.svg"
            alt="Advanced Icon"
          />
          <div className="card-text-container">
            <h3 className="card-title">Advanced</h3>
            <span className="card-text">$12/mo</span>
          </div>
        </article>
        <article
          className={plan === 'pro' ? 'card active' : 'card'}
          onClick={() => {
            setPlan('pro');
            setPlanCost(payPeriod === 'monthly' ? 15 : null);
          }}
        >
          <img
            className="icon"
            src="public/assets/images/icon-pro.svg"
            alt="Pro Icon"
          />
          <div className="card-text-container">
            <h3 className="card-title">Pro</h3>
            <span className="card-text">$15/mo</span>
          </div>
        </article>
      </div>
      <div className="toggle-container">
        <span className="toggle-text active">Monthly</span>
        <div className="toggle-outer">
          <div className="toggle-inner"></div>
        </div>
        <span className="toggle-text">Yearly</span>
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

  .card {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    padding: 1.4rem 1.6rem;
    border: 1px solid #d6d9e6;
    border-radius: 0.8rem;
    margin-bottom: 1.2rem;

    .icon {
      width: 4rem;
      height: 4rem;
    }

    .card-text-container {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;

      .card-title {
        font-size: 1.6rem;
        font-weight: 500;
        color: #022959;
      }
      .card-text {
        color: #9699aa;
        font-size: 1.4rem;
        line-height: 2rem;
      }
    }
  }

  .card:not(:last-child) {
    margin-bottom: 1.2rem;
  }
  .card:last-child {
    margin-bottom: 2.4rem;
  }

  .card.active {
    background-color: #f8f9ff;
    border: 1px solid #483eff;
  }

  .toggle-container {
    background-color: #f8f9ff;
    display: flex;
    justify-content: center;
    padding: 1.4rem 0;
    align-items: center;
    border-radius: 0.8rem;
    gap: 2.4rem;

    .toggle-text {
      color: #9699aa;
      font-size: 1.4rem;
      font-weight: 500;
    }

    .toggle-text.active {
      color: #022959;
    }

    .toggle-outer {
      height: 2rem;
      width: 3.8rem;
      border-radius: 9999px;
      background-color: #022959;
      display: flex;
      align-items: center;
      position: relative;
    }
    .toggle-inner {
      background-color: #fff;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
      position: absolute;
      left: 0.4rem;
    }
  }
`;

export default Step2;
