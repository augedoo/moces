import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';
import ContainerLayout from '@/components/layout/ContainerLayout';

import CurrentProject from '@/components/projects/CurrentProject';
import Button from '@/components/ui/Button';
import projects from '@/assets/data/projects';

const ProjectsPage = () => {
	const renderProjects = (list) =>
		list?.map((project, index) => {
			const { title, slug, description, cover_image } = project || {};

			return (
				<Link href={slug}>
					<a className='block'>
						<div key={index}>
							<div>
								<img
									src={cover_image}
									alt={title}
									className='h-[240px] w-full object-cover'
								/>
							</div>

							<h2 className='heading-3 mb-2 hidden max-h-[70px] border-b border-primary-500 py-2 !text-left line-clamp-2 lg:block'>
								{title}
							</h2>

							<p className='line-clamp-4'>{description}</p>

							<Button
								url={`/projects/${slug}`}
								type='nextLink'
								textContent='Learn More'
								bgClassName='!bg-transparent'
								className='mt-4 w-fit !p-0 !text-sm text-primary-500'
							>
								<CgArrowLongRight className='h-7 w-7' />
							</Button>
						</div>
					</a>
				</Link>
			);
		});

	return (
		<div className='mx-auto projects'>
			{/* Current  Project */}
			<div className='pt-12'>
				<ContainerLayout className='mx-auto'>
					<h1 className='section-header'>Current Projects</h1>

					<p className='py-2 text-center lg:text-left'>
						Donate to support our current project
					</p>
				</ContainerLayout>

				<CurrentProject project={projects[0]} containerWidth />
			</div>

			<ContainerLayout className='mx-auto mt-16'>
				<h1 className='mb-10 section-header'>Recent Projects</h1>
				{/* Projects */}
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
					{renderProjects(projects)}
				</div>
			</ContainerLayout>
		</div>
	);
};

export default ProjectsPage;
