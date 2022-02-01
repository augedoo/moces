import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

import ContainerLayout from '@/components/layout/ContainerLayout';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const about = [
	{
		title: 'Our Mission',
		highlight:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti blanditiis perferendis, reiciendis ratione in voluptatum, dolores iusto recusandae odit nesciunt.',
		link: '/about/mission',
	},
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
];

const About = () => {
	return (
		<ContainerLayout className='mx-auto'>
			<h1 className='text-4xl font-black text-center capitalize lg:text-5xl text-secondary-900 lg:text-left'>
				About Us
			</h1>

			<div className='grid gap-4 mt-8'>
				{about.map((item, index) => {
					const { title, highlight, link } = item;

					return (
						<div
							key={index}
							className='flex flex-col items-start px-4 py-4 bg-secondary-50'
						>
							<h3 className='mb-2 text-2xl font-semibold text-secondary-500'>
								{title}
							</h3>
							<p>{highlight}</p>
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
				})}
			</div>
			<div className='grid gap-4 pt-8 sm:grid-cols-2 xl:grid-cols-4'></div>
		</ContainerLayout>
	);
};

export default About;
