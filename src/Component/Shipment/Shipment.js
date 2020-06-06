import React from 'react';
import { useForm } from "react-hook-form";
import './Shipment.css';
import { useAuth } from '../LogIn/useAuth';

const Shipment = () => {
    const { register, handleSubmit, errors } = useForm();
    const auth = useAuth();
    const onSubmit = data => console.log(data);
  
    return (
     
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={auth.user.name} placeholder="Your name" ref={register({ required: true })} />
        {
            errors.name && <span className="error">*This field is required</span>
        }
        <input name="email" defaultValue={auth.user.email} placeholder="Your email" ref={register({ required: true })} />
        {
            errors.email && <span className="error">*This field is required</span>
        }
        <textarea name="address" rows="2" cols="50" placeholder="Write your address" ref={register({ required: true })} />
        {
            errors.address && <span className="error">*This field is required</span>
        }
        <input name="country" type="text" placeholder="Country" ref={register({ required: true })} />
        {
            errors.country && <span className="error">*This field is required</span>
        }
        <input name="city" type="text" placeholder="City" ref={register({ required: true })} />
        {
            errors.city && <span className="error">*This field is required</span>
        }
        <input name="zipCode" placeholder="ZIP Code" ref={register({ required: true })} />
        {
            errors.zipCode && <span className="error">*This field is required</span>
        }
        <input type="submit" value="Submit"/>
      </form>
    );
};

export default Shipment;