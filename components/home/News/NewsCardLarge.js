import OutlineOffset from '@/components/ui/OutlineOffset';

const NewsCardLarge = ({ article }) => {
	const { image, title, category, date } = article;

	return (
		<div className='relative w-full h-full card'>
			<OutlineOffset position={'left'} />

			<div className='relative w-full h-full card__wrapper'>
				<img
					src={image.url}
					alt={title}
					className='object-cover w-full h-full'
				/>

				{/* Overlay Tint */}
				<div className='absolute inset-0 z-20 w-full h-full bg-gradient-to-t from-secondary-700 to-transparent'></div>

				{/* Content */}
				<div className='absolute inset-x-0 bottom-0 z-20 flex flex-col items-start justify-end w-full h-full max-w-lg lg:max-w-md sm:p-8 lg:p-6'>
					<div className='w-fit text-center p-2.5 px-6 my-4 text-sm text-gray-100 uppercase bg-primary-500'>
						{category}
					</div>

					<span className='text-base font-light text-white capitalize'>
						{date}
					</span>

					<h2 className='pt-4 text-2xl font-semibold text-gray-100 capitalize line-clamp-2 xl:text-3xl'>
						{title}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default NewsCardLarge;
