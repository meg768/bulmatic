import {React, renderElement} from '../../utils.js';

export default React.forwardRef((props, ref)  => {
	return renderElement({tag:'a', base:'box', ...props}, ref);
});
