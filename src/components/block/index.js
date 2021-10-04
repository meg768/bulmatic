import {React, renderElement} from '../../utils.js';

var Block = React.forwardRef((props, ref)  => {
	return renderElement({tag:'div', base:'block', ...props}, ref);
});

export default Block;
