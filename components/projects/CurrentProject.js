import { CgArrowLongRight } from 'react-icons/cg';

import Button from '@/components/ui/Button';
import ContainerLayout from '@/components/layout/ContainerLayout';

const CurrentProject = ({ project, containerWidth }) => {
	const {
		title,
		slug,
		description,
		detail,
		status,
		progress,
		created_at,
		cover_image,
		objectives,
	} = project || {};

	return (
		<ContainerLayout className='mx-auto'>
			<div
				className={`current-project mx-auto mt-10 ${
					containerWidth ? 'max-w-full' : 'max-w-5xl'
				} lg:grid lg:h-full lg:grid-cols-[1fr,430px] lg:gap-6`}
			>
				{/* Project Image & Progress */}
				<div className='lg:space-y-6'>
					<img
						src={cover_image}
						alt={title}
						className='h-[320px] w-full object-cover sm:h-[400px] lg:h-[330px]'
					/>

					<div className='bg-secondary-700/10 px-6 py-6 lg:h-[170px]'>
						<h2 className='heading-2 mb-2 !text-left lg:hidden'>{title}</h2>

						{/* Progress */}
						<div className='flex items-center justify-between'>
							<h2 className='heading-2 !text-left !font-mulish !text-lg !font-normal !text-gray-700'>
								Progress
							</h2>
							<div className='font-normal text-gray-700 lg:text-lg'>
								{progress?.currentCount}/{progress?.goal}
							</div>
						</div>

						{/* Progress Bar */}
						<div className='block my-4 project__progress'>
							<div className='project__progress-bar h-[14px] bg-primary-500/50'>
								<div
									className={`h-full w-[${
										(progress?.currentCount / progress?.goal) * 100
									}%] bg-primary-500
            `}
								></div>
							</div>
						</div>

						<Button
							type='button'
							textContent='Donate Now'
							bgClassName='bg-secondary-700 hover:bg-secondary-700'
							className='!w-fit text-gray-100'
						/>
					</div>
				</div>

				{/* Project Description */}
				<div className='p-6 pb-8 bg-primary-500/10'>
					<h2 className='heading-2 mb-2 hidden !text-left lg:block'>{title}</h2>

					<p className='line-clamp-7'>{description}</p>

					<h2 className='heading-2 pt-2 !text-left !text-secondary-700'>
						Objectives
					</h2>

					{/* // ! max of 3 objectives */}
					<ul className='pt-4 space-y-2'>
						{objectives.slice(0, 4).map((obj, i) => (
							<li key={i} className='grid grid-cols-[10px,1fr] gap-4'>
								<div className='w-4 h-4 bg-primary-500'></div>

								<div className='-mt-1.5 line-clamp-2'>{obj}</div>
							</li>
						))}
					</ul>

					<Button
						url={`/projects/${slug}`}
						type='nextLink'
						textContent='Learn More'
						bgClassName='!bg-transparent'
						className='mt-4 w-fit !p-0 !text-sm text-secondary-500'
					>
						<CgArrowLongRight className='h-7 w-7' />
					</Button>
				</div>
			</div>
		</ContainerLayout>
	);
};

export default CurrentProject;
