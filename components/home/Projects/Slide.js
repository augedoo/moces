import Link from 'next/link';
import React from 'react';
import { CgArrowLongRight } from 'react-icons/cg';

import Button from '@/components/ui/Button';
import ContainerLayout from '@/components/layout/ContainerLayout';
import farming_woman_1 from '@/assets/images/temp/farming_woman_1.jpg';

const Slide = ({ project }) => {
	const { title, slug, description, progress } = project;

	return (
		<div className='w-full h-full p-3 project'>
			<ContainerLayout className='w-full h-full mx-auto border border-secondary-500 lg:flex lg:items-center lg:gap-10 lg:border-none'>
				{/* Top: Image with mobile progress */}
				<div className='relative h-[290px] w-full lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px]'>
					<div className='absolute inset-0 z-10 w-full h-full translate-x-3 -translate-y-3 bg-gray-100 lg:translate-x-0 lg:translate-y-0'>
						{/* Image */}
						<img
							src={farming_woman_1}
							alt={title}
							className='object-cover w-full h-full project__image'
						/>

						{/* Progress bar: <:lg */}
						<div className='block project__progress lg:hidden'>
							<div className='project__progress-bar h-[14px] bg-primary-500/50'>
								<div
									className={`h-full bg-primary-500 w-[${
										(progress?.currentCount / progress?.goal) * 100
									}%]
                  `}
								></div>
							</div>
						</div>
					</div>
				</div>

				{/* Progress Count */}
				<p className='py-2 text-sm text-center project__progress-count lg:hidden'>
					<span>{progress?.currentCount}</span> out of{' '}
					<span>{progress?.goal}</span> <span>{progress?.description}.</span>
					{/* {progress?.currentCount / progress?.goal) * 100} */}
				</p>

				{/* Bottom */}
				<div className='p-3 pt-0 lg:flex-1'>
					<h2 className='pb-1 text-[20px] font-semibold leading-tight text-secondary-600 line-clamp-1 lg:mb-4 lg:text-[28px]'>
						{title}
					</h2>

					<p className='text-base line-clamp-4 lg:mb-2 lg:text-lg lg:font-medium lg:opacity-80'>
						{description}
					</p>
					<Link href={`#/${slug}`}>
						<a className='text-secondary-500'>Learn More</a>
					</Link>

					{/* // > Progress */}
					<div className='hidden project__progress lg:block'>
						<div className='project__progress-bar h-[14px] bg-primary-500/50 lg:h-[18px] lg:max-w-md'>
							<div
								className={`h-full bg-primary-500 w-[${
									(progress?.currentCount / progress?.goal) * 100
								}%]
                  `}
							></div>
						</div>
						<p className='hidden py-2 text-sm text-center project__progress-count lg:block lg:text-left lg:text-base lg:opacity-80'>
							<span>{progress?.currentCount}</span> out of{' '}
							<span>{progress?.goal}</span>{' '}
							<span>{progress?.description}.</span>
							{/* {progress?.currentCount / progress?.goal) * 100} */}
						</p>
					</div>

					{/* CTA */}
					<Button
						url={`#/${slug}`}
						type='nextLink'
						textContent='Contribute'
						bgClassName='bg-primary-500 hover:bg-primary-700'
						className='mt-5 text-primary-50 lg:w-[70%] lg:max-w-[300px]'
					>
						<CgArrowLongRight className='h-7 w-7' />
					</Button>
				</div>
			</ContainerLayout>
		</div>
	);
};

export default Slide;
