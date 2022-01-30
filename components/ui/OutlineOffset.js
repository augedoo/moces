import React from 'react';

const OutlineOffset = ({ outlineColor }) => {
	return (
		<div
			className={`w-full h-full border ${
				outlineColor ? outlineColor : 'border-secondary-700'
			} absolute -right-[10px] -bottom-[10px] lg:-right-[14px] lg:-bottom-[14px] -z-10`}
		></div>
	);
};

export default OutlineOffset;
