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
			<ContainerLayout className='w-full h-full mx-auto border lg:border-none border-secondary-500 lg:flex lg:gap-10 lg:items-center'>
				{/* Top: Image with mobile progress */}
				<div className='w-full h-[290px] lg:h-[450px] lg:w-[450px] xl:h-[550px] xl:w-[550px] relative'>
					<div className='absolute inset-0 z-10 w-full h-full translate-x-3 -translate-y-3 lg:translate-x-0 lg:translate-y-0 bg-gray-100'>
						{/* Image */}
						<img
							src={farming_woman_1}
							alt={title}
							className='object-cover w-full h-full project__image'
						/>

						{/* Progress bar: <:lg */}
						<div className='project__progress block lg:hidden'>
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
					<h2 className='pb-1 text-[20px] font-semibold leading-tight lg:text-[28px] lg:mb-4 text-secondary-600 line-clamp-1'>
						{title}
					</h2>

					<p className='text-base line-clamp-4 lg:text-lg lg:opacity-80 lg:font-medium lg:mb-2'>
						{description}
					</p>
					<Link href={`#/${slug}`}>
						<a className='text-secondary-500'>Learn More</a>
					</Link>

					{/* // > Progress */}
					<div className='project__progress lg:block hidden'>
						<div className='project__progress-bar h-[14px] lg:h-[18px] lg:max-w-md bg-primary-500/50'>
							<div
								className={`h-full bg-primary-500 w-[${
									(progress?.currentCount / progress?.goal) * 100
								}%]
                  `}
							></div>
						</div>
						<p className='py-2 text-sm text-center lg:text-left lg:text-base lg:opacity-80 project__progress-count lg:block hidden'>
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
						className='mt-5 text-primary-50 lg:max-w-[300px] lg:w-[70%]'
					>
						<CgArrowLongRight className='w-7 h-7' />
					</Button>
				</div>
			</ContainerLayout>
		</div>
	);
};

export default Slide;
