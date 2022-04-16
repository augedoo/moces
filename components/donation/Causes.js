import React from 'react';
import ContainerLayout from '@/components/layout/ContainerLayout';
import Button from '@/components/ui/Button';

const causes = [
	{
		title: 'Sponsorship Support',
		description:
			'Donate through a causes Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a dolorum impedit architecto unde porro culpa. Aspernatur, consequatur laboriosam aliquam, quidem tempore sint et reprehenderit eos eligendi nemo expedita sunt natus voluptas quisquam illo consectetur magnam qui perspiciatis voluptate asperiores veniam iusto. Modi voluptate molestiae numquam minus, qui excepturi commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde necessitatibus eos. Ab possimus cum numquam voluptate mollitia! Id, ullam repudiandae placeat aut sapiente rem hic accusamus at deseruntipsum?',
		url: '/sponsorship',
	},
	{
		title: 'Voluntary Support',
		description:
			'Donate through a causes Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a dolorum impedit architecto unde porro culpa. Aspernatur, consequatur laboriosam aliquam, quidem tempore sint et reprehenderit eos eligendi nemo expedita sunt natus voluptas quisquam illo consectetur magnam qui perspiciatis voluptate asperiores veniam iusto. Modi voluptate molestiae numquam minus, qui excepturi commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde necessitatibus eos. Ab possimus cum numquam voluptate mollitia! Id, ullam repudiandae placeat aut sapiente rem hic accusamus at deseruntipsum?',
		url: '#/voluntary',
	},
	{
		title: 'Start a Foundation',
		description:
			'Donate through a causes Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam a dolorum impedit architecto unde porro culpa. Aspernatur, consequatur laboriosam aliquam, quidem tempore sint et reprehenderit eos eligendi nemo expedita sunt natus voluptas quisquam illo consectetur magnam qui perspiciatis voluptate asperiores veniam iusto. Modi voluptate molestiae numquam minus, qui excepturi commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde necessitatibus eos. Ab possimus cum numquam voluptate mollitia! Id, ullam repudiandae placeat aut sapiente rem hic accusamus at deseruntipsum?',
		url: '#/foundation',
	},
];

const Causes = () => {
	return (
		<ContainerLayout className='px-2 mx-auto'>
			<h1 className='section-header xl:text-center'>Causes</h1>

			<p className='py-2 text-center lg:text-left xl:text-center'>
				Donate for a causes
			</p>

			<div className='grid gap-6 mt-10 lg:grid-cols-3 lg:gap-8 xl:gap-10'>
				{causes.map((cause, index) => (
					<div key={index} className='px-8 py-10 pb-12 bg-secondary-700/10'>
						<h2 className='heading-2 lg:!text-center'>{cause.title}</h2>

						<p className='pt-4 text-center'>{cause.description}</p>

						<Button
							url='/donation'
							type='nextLink'
							textContent='Join This Cause'
							bgClassName='bg-primary-500 hover:bg-primary-600'
							className='text-gray-100 mt-8 !w-fit mx-auto'
						/>
					</div>
				))}
			</div>
		</ContainerLayout>
	);
};

export default Causes;
