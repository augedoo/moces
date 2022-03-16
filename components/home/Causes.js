import { CgArrowLongRight } from 'react-icons/cg';
import Button from '@/components/ui/Button';
import ContainerLayout from '@/components/layout/ContainerLayout';
import world_map from '@/assets/images/wold_map_light_bg.png';

const causes = [
	{
		title: 'Sponsorship Support',
		highlight:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. Long publishing and graphic design,.',
		link: '/causes#sponsorship-support',
	},
	{},

	{
		title: 'Voluntary Support',
		highlight:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. Long publishing and graphic design,.',
		link: '/causes#voluntary-support',
	},
	{},
	{
		title: 'Start Foundation',
		highlight:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. Long publishing and graphic design,.',
		link: '/causes#start-foundation',
	},
	{},
];

const Causes = () => {
	const renderCauses = (cause) =>
		cause.map((causesList, index) => {
			const { title, highlight, link } = causesList;

			if (index == 1)
				return (
					<div className='flex-col items-center justify-center hidden w-full h-full p-2 lg:flex'>
						<h1 className='text-4xl font-bold text-center text-white capitalize lg:text-5xl lg:text-center'>
							Causes
						</h1>
						<h3 className='text-xl font-semibold text-gray-50'>
							How can get involved
						</h3>
					</div>
				);

			// Render empty blocks to create shape on large screens
			if (!causesList.title) return <div className='hidden lg:block'></div>;

			return (
				<div
					key={index}
					className={`flex flex-col flex-1 w-full px-4 py-4 border border-white sm:min-w-[240px] 2xl:px-6 ${
						index === 4 && 'lg:-mt-10 lg:-ml-[1px]'
					} ${index === 2 && ' lg:-ml-[2px]'}`}
				>
					<h3 className='pb-4 mb-3 text-2xl font-semibold border-b border-white text-gray-50'>
						{title}
					</h3>

					<p className='mb-4 text-lg font-normal text-white/80 line-clamp-4'>
						{highlight}
					</p>

					<Button
						url={link}
						type='nextLink'
						textContent='Learn More'
						bgClassName='!bg-transparent'
						className='!p-0 !text-sm self-start hover:text-primary-500 text-gray-100'
					>
						<CgArrowLongRight className='w-7 h-7' />
					</Button>
				</div>
			);
		});

	return (
		<div className='relative py-14 sm:pb-20 lg:pt-32 lg:pb-28 bg-secondary-700'>
			<img
				src={world_map}
				alt='World map'
				className='absolute inset-0 lg:opacity-80 z-10 mt-28 opacity-50 object-cover lg:object-contain w-10/12 lg:w-11/12 h-[80%]'
			/>

			<div className='relative z-20 flex flex-col items-center justify-center w-full h-full p-2 lg:hidden'>
				<h1 className='!text-white section-header'>Causes</h1>

				<p className='text-lg font-semibold text-gray-50'>
					How can get involved
				</p>
			</div>

			<ContainerLayout className='relative z-20 mx-auto'>
				<div className='flex flex-col flex-wrap gap-4 mt-8 sm:flex-row lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-0'>
					{renderCauses(causes)}
				</div>
			</ContainerLayout>
		</div>
	);
};

export default Causes;
