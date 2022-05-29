const Map = ({ className, containerClassName }) => {
	return (
		<div className={`h-full w-full ${containerClassName}`}>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6952770993053!2d-0.2032754!3d5.6119422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9bb48d9e6053%3A0xd2f99ef6fbcbe854!2s1st%20EXCEPTIONAL%20GROUP%20LTD!5e0!3m2!1sen!2sus!4v1653049922296!5m2!1sen!2sus'
				height='450'
				loading='lazy'
				className={`h-full w-full border-none ${className}`}
			></iframe>
		</div>
	);
};

export default Map;
