import React from 'react';
import Tag from '../tag';

var Buttons = React.forwardRef((props, ref)  => {
	return (
		<Tag baseClassName='buttons' ref={ref} {...props}/>
	);
});

export default Buttons;

