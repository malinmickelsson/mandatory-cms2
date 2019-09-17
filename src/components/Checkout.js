import React from 'react';
import Navbar from './Navbar';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <h1>Checkout</h1>

      <div className='formContainer'>
        <form>
          <input type='hidden' value='' name='analytics_event_id'></input>

          <div className='form-row'>
            <label>Firstname</label>
            <input
              type='text'
              placeholder='Firstname'
              required
              className='formInput'
            ></input>
          </div>

          <div>
            <label>Lastname</label>
            <input
              type='text'
              placeholder='Lastname'
              required
              className='formInput'
            ></input>
          </div>

          <div>
            <label>Mailadress</label>
            <input
              type='email'
              placeholder='your.name@example.com'
              required
              className='formInput'
            ></input>
          </div>
        </form>
								</div>
        <button type='submit' className='pay'>
          Pay
        </button>
    </div>
  );
};
export default Checkout;
