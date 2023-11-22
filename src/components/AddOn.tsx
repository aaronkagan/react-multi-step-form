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

export default AddOn;
