import { CgArrowLongRight } from 'react-icons/cg';

import Button from '@/components/ui/Button';
import ContainerLayout from '@/components/layout/ContainerLayout';

const CurrentProject = () => {
	return (
		<ContainerLayout className='mx-auto'>
			<h1 className='section-header lg:!text-center'>Project Support</h1>

			<p className='max-w-xs py-2 mx-auto text-center sm:max-w-md'>
				Donate with intent. Support our current project
			</p>

			<div className='mt-10 current-project lg:grid lg:grid-cols-[1fr,430px] lg:gap-6 max-w-5xl mx-auto lg:h-full'>
				{/* Project Image & Progress */}
				<div className='lg:space-y-6'>
					<img
						src='https://unsplash.it/500'
						alt={'current project'}
						className='w-full h-[320px] object-cover sm:h-[400px] lg:h-[330px]'
					/>

					<div className='px-6 py-6 bg-secondary-700/10 lg:h-[170px]'>
						<h2 className='heading-2 !text-left mb-2 lg:hidden'>
							Project Title
						</h2>

						{/* Progress */}
						<div className='flex items-center justify-between'>
							<h2 className='heading-2 !text-left !font-mulish !text-lg !font-normal !text-gray-700'>
								Progress
							</h2>
							<div className='font-normal text-gray-700 lg:text-lg'>44/100</div>
						</div>

						{/* Progress Bar */}
						<div className='block my-4 project__progress'>
							<div className='project__progress-bar h-[14px] bg-primary-500/50'>
								<div
									className={`h-full bg-primary-500 w-[90%]
            `}
								></div>
							</div>
						</div>

						<Button
							type='button'
							textContent='Donate Now'
							bgClassName='bg-secondary-700 hover:bg-secondary-700'
							className='text-gray-100 !w-fit'
						/>
					</div>
				</div>

				{/* Project Description */}
				<div className='p-6 pb-8 bg-primary-500/10'>
					<h2 className='heading-2 !text-left mb-2 hidden lg:block'>
						Project Title
					</h2>

					<p className='line-clamp-7'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
						animi qui laudantium fugiat at rem facere maiores atque fugit aut
						placeat, molestias consequatur aspernatur tempore totam magni
						eligendi incidunt sit. Iusto illum magnam quas cumque esse molestias
						ratione voluptatibus repellendus!
					</p>

					<h2 className='heading-2 !text-left pt-2 !text-secondary-700'>
						Objectives
					</h2>

					{/* // ! max of 3 objectives */}
					<ul className='pt-4 pl-4 space-y-2 list-disc marker:text-secondary-500'>
						{/*  */}
						<li className='line-clamp-2'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
							officia.
						</li>
						<li className='line-clamp-2'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
							officia.
						</li>
						<li className='line-clamp-2'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
							officia.
						</li>
					</ul>

					<Button
						url='#/link'
						type='nextLink'
						textContent='Learn More'
						bgClassName='!bg-transparent'
						className='mt-4 !p-0 w-fit !text-sm text-secondary-500'
					>
						<CgArrowLongRight className='w-7 h-7' />
					</Button>
				</div>
			</div>
		</ContainerLayout>
	);
};

export default CurrentProject;
