import styled from 'styled-components';
const Step4 = ({ data, setStep }) => {
  const period = data.period;
  const addedAddOns = Object.values(data.addOns).filter((elem) => elem.isAdded);
  let totalAddOnsCost = 0;

  Object.values(addedAddOns).forEach((addOn) => {
    period === 'monthly'
      ? (totalAddOnsCost += addOn.monthlyPrice)
      : (totalAddOnsCost += addOn.monthlyPrice * data.yearlyMultiplier);
  });

  const total =
    period === 'monthly'
      ? data.planMonthlyCost + totalAddOnsCost
      : data.planMonthlyCost * data.yearlyMultiplier + totalAddOnsCost;

  return (
    <StyledArticle>
      <h1 className="title">Finishing up</h1>
      <p className="text">
        Double-check everything looks OK before confirming.
      </p>
      <div className="card">
        <div className="card-top-container">
          <div className="card-text-container">
            <span className="card-top-title">
              {data.plan.slice(0, 1).toUpperCase() + data.plan.slice(1)} (
              {period === 'monthly' ? 'Monthly' : 'Yearly'})
            </span>
            <button
              className="change"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <span className="card-top-price">
            {period === 'monthly'
              ? `$${data.planMonthlyCost}/mo`
              : `$${data.planMonthlyCost * data.yearlyMultiplier}/yr`}
          </span>
        </div>
        <hr />
        {addedAddOns.map((addOn) => {
          return (
            <AddOn
              key={addOn.description}
              addOn={addOn}
              data={data}
            />
          );
        })}
      </div>
      <div className="total-container">
        <span className="total-text">
          Total {period === 'monthly' ? '(per month)' : '(per year)'}
        </span>
        <span className="total-price">
          {period === 'monthly' ? `$${total}/mo` : `$${total}/yr`}
        </span>
      </div>
    </StyledArticle>
  );
};

const AddOn = ({ addOn, data }) => {
  return (
    <div className="card-bottom-container">
      <span className="card-bottom-text">{addOn.description}</span>
      <span className="card-bottom-price">
        {data.period === 'monthly'
          ? `+${addOn.monthlyPrice}/mo`
          : `+${addOn.monthlyPrice * data.yearlyMultiplier}/yr`}
      </span>
    </div>
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
    background-color: #f8f9ff;
    border-radius: 0.8rem;
    padding: 1.6rem;
    margin-bottom: 2.4rem;

    .card-top-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.2rem;

      .card-text-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;

        .card-top-title {
          color: #022959;
          font-size: 1.4rem;
          font-size: 500;
        }

        .change {
          background: none;
          border: none;
          text-decoration: underline;
          color: #9699aa;
          font-size: 1.4rem;
          line-height: 2rem;
        }

        .change:hover {
          color: #483eff;
          cursor: pointer;
        }
      }

      .card-top-price {
        color: #022959;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 2rem;
      }
    }

    .card-bottom-container {
      margin-top: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .card-bottom-text {
        color: #9699aa;
        line-height: 2rem;
        font-size: 1.4rem;
      }

      .card-bottom-price {
        color: #022959;
        line-height: 2rem;
        font-size: 1.4rem;
      }
    }
  }

  .total-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 26.3rem;
    margin-left: auto;
    margin-right: auto;

    .total-text {
      color: #9699aa;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    .total-price {
      color: #483eff;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2rem;
    }
  }

  @media all and (min-width: 1440px) {
    position: absolute;
    top: 5.6rem;
    right: 10rem;
    transform: unset;
    padding: 0;
    max-width: 45rem;

    .total-container {
      max-width: 41.8rem;
    }
  }
`;
export default Step4;
