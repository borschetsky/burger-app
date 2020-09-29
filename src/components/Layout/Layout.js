import React from 'react';
import Auxilery from '../../hoc/Auxilery';
import classes from './Layout.module.css';

const layout = (props) => {
  return (
    <Auxilery>
      <div>
        Toolbar, SideDraw, Backdrop
    </div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Auxilery>
  );
}

export default layout;