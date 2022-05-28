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
					<div
						key={index}
						className='hidden h-full w-full items-center justify-center p-2 lg:flex'
					>
						<h1 className='section-header lg:!block'>About Us</h1>
					</div>
				);

			// Render empty blocks to create shape on large screens
			if (!item.title)
				return <div key={index} className='hidden lg:block'></div>;

			return (
				// Card/Box
				<div
					key={index}
					className='flex w-full flex-1 flex-col items-start bg-secondary-50 px-4 py-4 sm:min-w-[250px] sm:max-w-full 2xl:px-6'
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
						<CgArrowLongRight className='h-7 w-7' />
					</Button>
				</div>
			);
		});

	return (
		<div className='lg:pt-14'>
			<h1 className='section-header lg:hidden'>About Us</h1>

			<ContainerLayout className='!w-full content-center lg:!container lg:mx-auto lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16'>
				{/* Intro Video */}
				<div className='order-2 pt-8 lg:col-span-5 lg:flex lg:flex-col lg:items-end lg:justify-center lg:pt-0'>
					<AboutVideo />

					<div className='hidden w-10/12 lg:block'>
						<Button
							url='/about'
							type='nextLink'
							textContent='Learn More About Us'
							bgClassName='bg-secondary-700 hover:bg-secondary-500'
							className='mt-10 text-secondary-50'
						>
							<CgArrowLongRight className='h-7 w-7' />
						</Button>
					</div>
				</div>

				{/* Boxes */}
				<ContainerLayout className='order-1 mx-auto lg:col-span-7 lg:!w-full lg:!px-0'>
					<div className='mt-8 flex flex-col flex-wrap gap-4 sm:flex-col lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-0'>
						{renderCards(about)}
					</div>
				</ContainerLayout>
			</ContainerLayout>
		</div>
	);
};

export default About;
