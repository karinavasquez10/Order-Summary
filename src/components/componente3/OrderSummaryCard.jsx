import React from 'react';
import PlanDetails from '../componente2/SummaryDetails';
import Button from '../componente1/Button';
import Card from '../componente1/Card';
import Hero from '../../assets/imagen.svg'
import './OrderSummaryCard.scss';

const OrderSummaryCard = () => (
    <div className="order-summary-card">
       <div className="order-summary-container">
<div className="order-image">
<img src ={Hero} alt="Ilustracion"/>

</div>

<div className="order-content">
<text variant="title">Order Summary </text>
<text>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</text>
<PlanDetails/>
<Button primary>Proceed to payment </Button>
<Button>Cancel Order</Button>
</div>
       </div>
    </div>
)
export default OrderSummaryCard;