import React from 'react';
import PropTypes from 'prop-types';

const OutlineOffset = ({ position, outlineColor, className }) => {
	return (
		<div
			className={`w-full h-full border absolute -bottom-[10px]  lg:-bottom-[14px] -z-10 ${
				outlineColor ? outlineColor : 'border-secondary-700'
			}  ${
				position === 'left'
					? '-left-[10px] lg:-left-[14px]  '
					: '-right-[10px] lg:-right-[14px]  '
			} ${className}`}
		></div>
	);
};

OutlineOffset.protoTypes = {
	position: PropTypes.string,
};

OutlineOffset.defaultProps = {
	position: 'right',
};

export default OutlineOffset;
