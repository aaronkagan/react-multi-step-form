import styled from 'styled-components';
const Step3 = ({ data, setData }) => {
  const onlineServices = data.addOns.onlineServices;
  const largerStorage = data.addOns.largerStorage;
  const customizableProfile = data.addOns.customizableProfile;

  const handleToggleChecked = (addOn) => {
    setData((prevData) => ({
      ...prevData,
      addOns: {
        ...prevData.addOns,
        [addOn]: {
          ...prevData.addOns[addOn],
          isAdded: !prevData.addOns[addOn].isAdded
        }
      }
    }));
  };

  return (
    <StyledArticle>
      <h1 className="title">Pick add-ons</h1>
      <p className="text">Add-ons help enhance your gaming experience.</p>

      <div>
        <article
          className={onlineServices.isAdded ? 'card active' : 'card'}
          onClick={() => handleToggleChecked('onlineServices')}
        >
          <input
            type="checkbox"
            checked={onlineServices.isAdded}
            // Adding readonly because the handler is on the card and we can't have a checked attribute without an onChange handler unless it's readonly
            readOnly
          />
          <div className="card-text-container">
            <h3 className="card-title">Online Services</h3>
            <p className="card-text">Access to multiplayer games</p>
          </div>
          <span className="card-price">
            +$
            {data.period === 'monthly'
              ? `${data.addOns.onlineServices.monthlyPrice}/mo`
              : `${
                  data.addOns.onlineServices.monthlyPrice *
                  data.yearlyMultiplier
                }/yr`}
          </span>
        </article>
        <article
          className={largerStorage.isAdded ? 'card active' : 'card'}
          onClick={() => handleToggleChecked('largerStorage')}
        >
          <input
            type="checkbox"
            checked={largerStorage.isAdded}
            // Adding readonly because the handler is on the card and we can't have a checked attribute without an onChange handler unless it's readonly
            readOnly
          />
          <div className="card-text-container">
            <h3 className="card-title">Larger storage</h3>
            <p className="card-text">Extra 1TB of cloud save</p>
          </div>
          <span className="card-price">
            +$
            {data.period === 'monthly'
              ? `${data.addOns.largerStorage.monthlyPrice}/mo`
              : `${
                  data.addOns.largerStorage.monthlyPrice * data.yearlyMultiplier
                }/yr`}
          </span>
        </article>
        <article
          className={customizableProfile.isAdded ? 'card active' : 'card'}
          onClick={() => handleToggleChecked('customizableProfile')}
        >
          <input
            type="checkbox"
            checked={customizableProfile.isAdded}
            // Adding readonly because the handler is on the card and we can't have a checked attribute without an onChange handler unless it's readonly
            readOnly
          />
          <div className="card-text-container">
            <h3 className="card-title">Customizable profile</h3>
            <p className="card-text">Custom theme on your profile</p>
          </div>
          <span className="card-price">
            +$
            {data.period === 'monthly'
              ? `${data.addOns.customizableProfile.monthlyPrice}/mo`
              : `${
                  data.addOns.customizableProfile.monthlyPrice *
                  data.yearlyMultiplier
                }/yr`}
          </span>
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
  margin-bottom: 2.4rem;
  cursor: pointer;

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
    gap: 1.6rem;
    padding: 1.3rem 1.6rem;
    border-radius: 0.8rem;
    border: 1px solid #d6d9e6;

    input[type='checkbox'] {
      width: 2rem;
      height: 2rem;
      accent-color: #483eff;
      cursor: pointer;
    }

    .card-text-container {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;

      .card-title {
        font-size: 1.4rem;
        font-weight: 500;
        color: #022959;
      }
      .card-text {
        font-size: 1.2rem;
        line-height: 2rem;
        font-weight: 400;
        color: #9699aa;
      }
    }

    .card-price {
      margin-right: 0;
      margin-left: auto;
      color: #483eff;
      line-height: 2rem;
      font-size: 1.2rem;
    }
  }

  .card:not(:last-child) {
    margin-bottom: 1.2rem;
  }

  .active {
    background-color: #f8f9ff;
    border: 1px solid #483eff;
  }

  @media all and (min-width: 1440px) {
    position: absolute;
    top: 5.6rem;
    right: 10rem;
    transform: unset;
    padding: 0;
    max-width: 45rem;
  }
`;

export default Step3;
