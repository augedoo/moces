import React from 'react';
import Button from '../ui/Button';

const LatestNewsRelease = ({ article }) => {
	const { title, extract, date, category, slug, image } = article;

	return (
		<div className='grid bg-secondary-700/10 md:grid-cols-2'>
			<img
				src={image.url}
				alt={title}
				className='max-h-[360px] w-full object-cover'
			/>

			<div className='flex flex-col justify-center h-full px-5 py-6'>
				<h2 className='heading-2 mb-2 max-h-[96px] !normal-case line-clamp-3'>
					{title}
				</h2>
				<p className='pt-2 pb-4 mb-4 line-clamp-6'>{extract}</p>
				<Button
					url={`/news/${slug}`}
					type='nextLink'
					textContent='Read Article'
					bgClassName='bg-primary-500 hover:bg-primary-500'
					className='!w-fit text-gray-100'
				/>
			</div>
		</div>
	);
};

export default LatestNewsRelease;
