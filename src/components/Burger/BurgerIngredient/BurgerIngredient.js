import React from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends React.Component {
  render() {
    let ingredien = null;

    switch (this.props.type) {
      case ("bread-bottom"):
        ingredien = <div className={classes.BreadBottom}></div>;
        break;
      case ("bread-top"):
        ingredien = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case ("meat"):
        ingredien = <div className={classes.Meat}></div>;
        break;
      case ("cheese"):
        ingredien = <div className={classes.Cheese}></div>;
        break;
      case ("bacon"):
        ingredien = <div className={classes.Bacon}></div>;
        break;
      case ("salad"):
        ingredien = <div className={classes.Salad}></div>;
        break;
      default:
          ingredien = null;
    }
  
    return ingredien;
  }
  
};

BurgerIngredient.propTypes ={
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;