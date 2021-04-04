import React from 'react';
import Auxilery from '../../../hoc/Auxilery';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, index) => {
    return <li key={index}><span style={{textTransform: "capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}</li>
  });

  return (
    <Auxilery>
        <h3>Your order</h3>
        <p>A delicious burder with the following ingredients:</p>
        <ul>
          { ingredientSummary }
        </ul>
        <p>Cintinue to Chekout?</p>
    </Auxilery>
  )
}

export default orderSummary;