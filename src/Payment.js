import React from 'react';
import { NavLink } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {

    const [{basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout {<NavLink to='/checkout'>
                        {basket?.length} items</NavLink>}
                </h1>
                
                {/*Delivery Section*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Your Adress will go here</p>
                        <p>Coming Soon</p>
                    </div>
                </div>

                {/*Review Items Secton*/}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                            id={item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating= {item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*Payment Method Section*/}
                <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div classname='payment__details'>
                        {/*Stripe magic will go */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
