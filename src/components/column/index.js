import React from 'react';
import Tag from '../tag';

var Column = React.forwardRef((props, ref)  => {
	return (
		<Tag tag='div' baseClassName='column' ref={ref} {...props}/>
	);
});

export default Column;
