import React from 'react';

const NewsSlide = ({ article }) => {
	const { image, title, extract, category } = article;

	return (
		<div className='project'>
			<div className='project__img'>
				<img
					src={image.url}
					alt={title}
					className='h-[240px] w-full object-cover'
				/>
			</div>

			<div className='w-fit text-center p-2.5 px-6 mx-auto m-2 mt-4 text-sm text-gray-100 uppercase bg-primary-500'>
				{category}
			</div>

			<h2 className='text-xl font-semibold text-center capitalize line-clamp-2 text-secondary-700 lg:text-3xl lg:text-left'>
				{title}
			</h2>

			<p className='mt-2 text-base text-center line-clamp-4 lg:text-lg lg:opacity-80 lg:font-medium lg:mb-2'>
				{extract}
			</p>
		</div>
	);
};

export default NewsSlide;
