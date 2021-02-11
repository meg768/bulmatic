import {React, renderElement} from '../../utils.js';

export default React.forwardRef((props, ref)  => {
	return renderElement({element:'div', base:'container', ...props}, ref);
});
