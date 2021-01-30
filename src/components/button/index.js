import React from 'react';
import Tag from '../tag';

var Button = React.forwardRef((props, ref)  => {
	return (
		<Tag baseClassName='button' ref={ref} {...props}/>
	);
});

export default Button;