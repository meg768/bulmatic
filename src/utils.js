import React from 'react';
import classNames from 'classnames';




function isType(obj, type) {
	return Object.prototype.toString.call(obj) === '[object ' + type + ']';
};



function isBoolean(obj) {
	return typeof obj === 'boolean';
};

function isArray(obj) {
	return isType(obj, 'Array');
};

function isNumber(obj) {
	return isType(obj, 'Number');
};

function isString(obj) {
	return isType(obj, 'String');
};

function isDate(obj) {
	return isType(obj, 'Date') && !isNaN(obj.getTime());
};

function isObject(obj) {
	return obj !== null && isType(obj, 'Object');
};

function isFunction(obj) {
	return typeof obj === 'function';
};

function isInteger(n) {
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}


function translateProps(props) {

    var {className = '', ...props} = props;
	var {raw = '', is = '', has = '', are = '', base = '', padding, margin, ...props} = props;
	
	
    function addClass(name, condition) {
        if (condition) {
            className = classNames(className, name);
        }
    }

	function addClasses(prefix, prop) {
        if (typeof prop === 'string') {
            prop = prop.split(' ');
        }

        if (isArray(prop)) {
            prop.forEach((item) => {
                addClass(`${prefix}-${item}`, true);
            });
        }
        else if (isObject(prop)) {
            for (var propName in prop) {
                addClasses(`${prefix}-${propName}`, prop[propName]);
            }
        }
        else if (isBoolean(prop)) {
            addClass(`${prefix}`, prop);
        }
        else if (prop !== undefined) {
            addClass(`${prefix}-${prop}`, true);
        }
    }

    ///////////////////////////////////////////////////////////////////////


	if (padding !== undefined) {
		var paddings = {};

		console.log(padding);
		if (isString(padding)) {
			padding = padding.trim().replace(/\s\s+/g, ' ');

			if (padding.match(/^[0-9]+$/gi)) {
				paddings.p = padding;
			}
			else {
				let items = padding.split(' ');
				let values = {};

				items.forEach((item) => {
					var [name, value] = item.split('-');
					console.log('assign', name, )
					values[name] = value;
				});

				paddings.pt = values.top;
				paddings.pl = values.left;
				paddings.pr = values.right;
				paddings.pb = values.bottom;
				paddings.px = values.x;
				paddings.py = values.y;
			}
		}

		if (isNumber(padding)) {
			paddings.p = padding;
		}

		if (isObject(padding)) {
			paddings.pl = padding.left;
			paddings.pr = padding.right;
			paddings.pt = padding.top;
			paddings.pb = padding.bottom;
			paddings.px = padding.x;
			paddings.py = padding.y;	
		}

		addClasses('p',  paddings.p);
		addClasses('pb', paddings.pb);
		addClasses('pl', paddings.pl);
		addClasses('pr', paddings.pr);
		addClasses('pt', paddings.pt);
		addClasses('px', paddings.x);
		addClasses('py', paddings.y);

	}


    ///////////////////////////////////////////////////////////////////////


	if (margin !== undefined) {
		var margins = {};

		console.log('margin is', margin);
		if (isString(margin)) {
			margin = margin.trim().replace(/\s\s+/g, ' ');

			if (margin.match(/^[0-9]+$/gi)) {
				margins.m = margin;
			}
			else {
				let items = margin.split(' ');
				let values = {};

				items.forEach((item) => {
					var [name, value] = item.split('-');
					console.log('assign', name, value);
					values[name] = value;
				});

				margins.mt = values.top;
				margins.ml = values.left;
				margins.mr = values.right;
				margins.mb = values.bottom;
				margins.mx = values.x;
				margins.my = values.y;

			}
		}

		if (isNumber(margin)) {
			margins.m = margin;
		}

		if (isObject(margin)) {
			margins.ml = margin.left;
			margins.mr = margin.right;
			margins.mt = margin.top;
			margins.mb = margin.bottom;
			margins.mx = margin.x;
			margins.my = margin.y;	
		}

		console.log(margins);
		addClasses('m',  margins.m);
		addClasses('mb', margins.mb);
		addClasses('ml', margins.ml);
		addClasses('mr', margins.mr);
		addClasses('mt', margins.mt);
		addClasses('mx', margins.x);
		addClasses('my', margins.y);

	}

    ///////////////////////////////////////////////////////////////////////

	is = is.split(' ').map((item) => {
		return item.length > 0 ? `is-${item}` : undefined;
	});

	className = classNames(className, is);

    ///////////////////////////////////////////////////////////////////////

	are = are.split(' ').map((item) => {
		return item.length > 0 ? `are-${item}` : undefined;
	});

	className = classNames(className, are);

	///////////////////////////////////////////////////////////////////////

	has = has.split(' ').map((item) => {
		return item.length > 0 ? `has-${item}` : undefined;
	});

	className = classNames(className, has);

	///////////////////////////////////////////////////////////////////////

	className = classNames(className, base);
	className = classNames(className, raw);

    return {className:classNames(className), ...props};
    
}

function renderTag(props, ref) {
    var {element : Element = 'div', ...props} = translateProps(props);

    return (
        <Element ref={ref} {...props}/>
    );  
}

var renderElement = renderTag;

export {
	isDate, isArray, isNumber, isInteger, isFunction, isFloat,
	React,
	translateProps,
	renderTag, renderElement,
	classNames
}