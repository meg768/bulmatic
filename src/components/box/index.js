import {React, renderElement} from '../../utils.js';

export default React.forwardRef((props, ref)  => {
	return renderElement({tag:'div', base:'box', ...props}, ref);
});
