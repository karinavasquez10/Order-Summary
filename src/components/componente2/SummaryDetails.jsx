import React from 'react';
import Icon from '../componente1/Press';
import Text from '../componente1/Card';
import './SummaryDetails.scss' ;
import Music from '../../assets/icon.svg'

const PlanDetails =()=> (
    <div className="summary.details">
        <Icon src={Music} alt ="Musica" />
        <div className=' plan-info'>
<Text variant ="title">Plan Anual </Text>
<Text> $59,99</Text>
        </div>
        <a href="change" className="change-link">Change</a>

    </div>

);
export default PlanDetails;