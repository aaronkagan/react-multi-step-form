import styled from 'styled-components';
const Step4 = ({ data }) => {
  const addedAddOns = Object.values(data.addOns).filter((elem) => elem.isAdded);
  console.log(addedAddOns);

  return (
    <StyledArticle>
      <h1 className="title">Finishing up</h1>
      <p className="text">
        Double-check everything looks OK before confirming.
      </p>
      <div className="card">
        <div className="card-top-container">
          <div className="card-text-container">
            <span className="card-top-title">Arcade (Monthly)</span>
            <button className="change">Change</button>
          </div>
          <span className="card-top-price">$9/mo</span>
        </div>
        <hr />
        {addedAddOns.map((addOn) => {
          return (
            <AddOn
              addOn={addOn}
              data={data}
            />
          );
        })}
        {/* <div className="card-bottom-container">
          <span className="card-bottom-text">Online service</span>
          <span className="card-bottom-price">+$1/mo</span>
        </div>
        <div className="card-bottom-container">
          <span className="card-bottom-text">Larger storage</span>
          <span className="card-bottom-price">+$2/mo</span>
        </div> */}
      </div>
      <div className="total-container">
        <span className="total-text">Total (per month)</span>
        <span className="total-price">+$12/mo</span>
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
          : `+${addOn.yearlyPrice}/yr`}
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
`;
export default Step4;
