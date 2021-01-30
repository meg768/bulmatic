import React from 'react';
import Tag from '../tag';

var Container = React.forwardRef((props, ref)  => {
	return (
		<Tag tag='div' baseClassName='container' ref={ref} {...props}/>
	);
});

export default Container;

