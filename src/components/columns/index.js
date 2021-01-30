import React from 'react';
import Tag from '../tag';


var Columns = React.forwardRef((props, ref)  => {
	return (
		<Tag tag='div' baseClassName='columns' ref={ref} {...props}/>
	);
});

export default Columns;

