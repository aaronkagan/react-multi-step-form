const Step3 = () => {
  return (
    <article>
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
    </article>
  );
};

export default Step3;
