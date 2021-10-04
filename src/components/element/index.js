import {React, renderElement} from '../../utils.js';

var Element = React.forwardRef((props, ref)  => {
	return renderElement({tag:'div', base:'', ...props}, ref);
});

export default Element;
