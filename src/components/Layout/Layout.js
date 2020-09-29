import React from 'react';
import Auxilery from '../../hoc/Auxilery';

const layout = (props) => {
  return (
    <Auxilery>
      <div>
        Toolbar, SideDraw, Backdrop
    </div>
      <main>
        {props.children}
      </main>
    </Auxilery>
  );
}

export default layout;