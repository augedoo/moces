import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

import ContainerLayout from '@/components/layout/ContainerLayout';
import Button from '@/components/ui/Button';
import AboutVideo from './AboutVideo';

// ! Don't change format/order of this array. Just change the values.
const about = [
	{
		title: 'Our Mission',
		highlight:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti blanditiis perferendis, reiciendis ratione in voluptatum, dolores iusto recusandae odit nesciunt.',
		link: '/about/mission',
	},
	{},
	{},
	{
		title: 'Our Vision',
		highlight:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti blanditiis perferendis, reiciendis ratione in voluptatum, dolores iusto recusandae odit nesciunt.',
		link: '/about/vision',
	},
	{
		title: 'Article of Association',
		highlight:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti blanditiis perferendis, reiciendis ratione in voluptatum, dolores iusto recusandae odit nesciunt.',
		link: '/about/articles-of-association',
	},
	{},
];

const About = () => {
	const renderCards = (cards) =>
		cards.map((item, index) => {
			const { title, highlight, link } = item;

			// Render section heading on large screens
			if (index == 1)
				return (
					<div className='items-center justify-center hidden w-full h-full p-2 lg:flex'>
						<h1 className='section-header lg:!block'>About Us</h1>
					</div>
				);

			// Render empty blocks to create shape on large screens
			if (!item.title) return <div className='hidden lg:block'></div>;

			return (
				// Card/Box
				<div
					key={index}
					className='flex-1 flex flex-col w-full sm:min-w-[250px] sm:max-w-full items-start px-4 2xl:px-6 py-4 bg-secondary-50'
				>
					<h3 className='mb-2 text-2xl font-semibold text-secondary-600'>
						{title}
					</h3>

					<p className='line-clamp-4'>{highlight}</p>
					<Button
						url={link}
						type='nextLink'
						textContent='Learn More'
						bgClassName='!bg-transparent'
						className='mt-2 !p-0 !text-sm text-secondary-500'
					>
						<CgArrowLongRight className='w-7 h-7' />
					</Button>
				</div>
			);
		});

	return (
		<div className='lg:pt-14'>
			<h1 className='section-header lg:hidden'>About Us</h1>

			<ContainerLayout className='!w-full content-center lg:!container lg:grid-cols-12 lg:mx-auto xl:gap-16 lg:grid lg:gap-8 '>
				{/* Intro Video */}
				<div className='order-2 pt-8 lg:pt-0 lg:col-span-5 lg:flex lg:flex-col lg:justify-center lg:items-end'>
					<AboutVideo />

					<div className='hidden w-10/12 lg:block'>
						<Button
							url='#'
							type='nextLink'
							textContent='Learn More About Us'
							bgClassName='bg-secondary-700 hover:bg-secondary-500'
							className='mt-10 text-secondary-50'
						>
							<CgArrowLongRight className='w-7 h-7' />
						</Button>
					</div>
				</div>

				{/* Boxes */}
				<ContainerLayout className='order-1 mx-auto lg:col-span-7 lg:!px-0 lg:!w-full'>
					<div className='flex flex-col flex-wrap gap-4 mt-8 lg:mt-0 sm:flex-row lg:grid lg:grid-cols-2 lg:gap-0'>
						{renderCards(about)}
					</div>
				</ContainerLayout>
			</ContainerLayout>
		</div>
	);
};

export default About;
