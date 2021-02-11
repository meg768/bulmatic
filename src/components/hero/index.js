import {React, renderElement} from '../../utils.js';

var Hero = React.forwardRef((props, ref)  => {
	return renderElement({element:'section', base:'hero', ...props}, ref);
});

Hero.Head = React.forwardRef((props, ref)  => {
	return renderElement({element:'div', base:'hero-head', ...props}, ref);
});

Hero.Foot = React.forwardRef((props, ref)  => {
	return renderElement({element:'div', base:'hero-foot', ...props}, ref);
});

Hero.Body = React.forwardRef((props, ref)  => {
	return renderElement({element:'div', base:'hero-body', ...props}, ref);
});

export default Hero;

