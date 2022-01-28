import React from 'react';

const ContainerLayout = ({ children, className }) => {
	return <div className={`w-[90%] lg:container ${className}`}>{children}</div>;
};

export default ContainerLayout;
