import React from 'react';
import classNames from 'classnames';



function isType(obj, type) {
	return Object.prototype.toString.call(obj) == '[object ' + type + ']';
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

	var {margin, m, mt, mr, mb, ml, mx, my, ...props} = props;
	
	
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
        else if (prop != undefined) {
            addClass(`${prefix}-${prop}`, true);
        }
    }

    ///////////////////////////////////////////////////////////////////////


    if (margin != undefined) {
        if (isObject(margin)) {
            mb = margin.bottom;
            ml = margin.left;
            mr = margin.right;
            mt = margin.top;
            mx = margin.x;
            my = margin.y;
        }
        else {
            m = margin;
        }    
    }
    

    addClasses('m', m);
    addClasses('mt', mt);
    addClasses('mr', mr);
    addClasses('mb', mb);
    addClasses('ml', ml);
    addClasses('mx', mx);
    addClasses('my', my);

    return {className:classNames(className), ...props};
    
}


const Tag = React.forwardRef((props, ref) => {
    var {tag : Component = 'div', baseClassName = '', className = '', is = '', has = '', ...props} = translateProps(props);

	is = is.split(' ').map((item) => {
		if (item.length > 0)
			return `is-${item}`;
	});

	has = has.split(' ').map((item) => {
		if (item.length > 0)
			return `has-${item}`;
	});

	className = classNames(className, baseClassName);
	className = classNames(className, is);
	className = classNames(className, has);

    return (
        <Component className={className} ref={ref} {...props}/>
    );            

});


export default Tag;
