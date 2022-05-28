import React from 'react';
import ContainerLayout from '../layout/ContainerLayout';

const Impact = () => {
	return (
		<ContainerLayout className='mx-auto'>
			<h1 className='section-header mb-10 !text-center'>Our Impact</h1>

			<div className='grid bg-secondary-700/10 md:grid-cols-2'>
				<img
					// src={image.url}
					src={
						'https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
					}
					alt={'child'}
					// alt={title}
					className='h-full min-h-[360px] w-full object-cover'
				/>

				<div className='flex flex-col justify-center h-full px-5 py-6'>
					<h2 className='heading-2 mb-2 max-h-[96px] !normal-case line-clamp-3 sm:!text-left'>
						Marvin
					</h2>

					<p className='pt-2 pb-4 mb-4 text-center sm:text-left'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
						veniam consequatur sapiente accusantium temporibus, dolor voluptates
						corporis velit qui nam cumque molestiae atque adipisci quos dolorem
						vel minima blanditiis excepturi facilis reprehenderit omnis iure
						voluptatem voluptatibus? Ratione sequi, mollitia nisi optio alias
						eum doloribus eaque illo, voluptatum nesciunt molestias earum!
					</p>

					<div className='heading-1 !font-zilla opacity-60 sm:!text-left'>
						Thank You
					</div>
				</div>
			</div>
		</ContainerLayout>
	);
};

export default Impact;
