import React from 'react';
import Tag from '../tag';

var Hero = React.forwardRef((props, ref)  => {
	return (
		<Tag tag='div' baseClassName='hero' ref={ref} {...props}/>
	);
});

export default Hero;

