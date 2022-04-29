import React from 'react';
import ContainerLayout from '../layout/ContainerLayout';

const values = [
	{
		title: 'humanitarianism',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. periam animi qui laudantium fugiat at rem facere maiores atque fugit aut placeat, olestias consequatur aspernatur tempore totam magni eligendi incidunt sit',
	},
	{
		title: 'transparency',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. periam animi qui laudantium fugiat at rem facere maiores atque fugit aut placeat, olestias consequatur aspernatur tempore totam magni eligendi incidunt sit',
	},
	{
		title: 'solitude',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. periam animi qui laudantium fugiat at rem facere maiores atque fugit aut placeat, olestias consequatur aspernatur tempore totam magni eligendi incidunt sit',
	},
	{
		title: 'leadership',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. periam animi qui laudantium fugiat at rem facere maiores atque fugit aut placeat, olestias consequatur aspernatur tempore totam magni eligendi incidunt sit',
	},
	{
		title: 'passion',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. periam animi qui laudantium fugiat at rem facere maiores atque fugit aut placeat, olestias consequatur aspernatur tempore totam magni eligendi incidunt sit',
	},
	{
		title: 'transformation',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. periam animi qui laudantium fugiat at rem facere maiores atque fugit aut placeat, olestias consequatur aspernatur tempore totam magni eligendi incidunt sit',
	},
];

const WhatWeRepresent = () => {
	const renderValues = (valueList) =>
		valueList.map((value, i) => (
			<li
				key={i}
				className='p-4 px-6 pb-8 border-2 bg-primary-50 border-primary-500'
			>
				<div className='flex'>
					<h2 className='pt-4 pb-1 pr-6 border-b heading-2 text-secondary-700 border-primary-500'>
						{value.title}
					</h2>
				</div>

				<p className='mt-4 leading-relaxed'>{value.description}</p>
			</li>
		));

	return (
		<div className='about-values'>
			<ContainerLayout className='mx-auto'>
				<h1 className='section-header lg:!text-center'>What we represent</h1>

				<ul className='grid mt-14 gap-7 sm:grid-cols-2'>
					{renderValues(values)}
				</ul>
			</ContainerLayout>
		</div>
	);
};

export default WhatWeRepresent;
