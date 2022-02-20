const NewsCard = ({ article, textHeight }) => {
	const { image, title, category, extract } = article;

	return (
		<div className='w-full h-full card'>
			<div className='relative w-full h-[250px] xl:h-[250px] lg:h-[200px] card__wrapper'>
				<img
					src={image.url}
					alt={title}
					className='object-cover w-full h-full'
				/>
				<div className='w-fit text-center p-2.5 px-6 my-4 text-sm text-gray-100 uppercase bg-primary-500 absolute left-0 -bottom-9'>
					{category}
				</div>
			</div>

			{/* Content */}
			<div className='w-full h-full max-w-md pt-4'>
				<h2 className='pt-5 pb-3 text-xl font-semibold !leading-tight capitalize text-secondary-700 line-clamp-2 lg:text-xl'>
					{title}
				</h2>

				<p
					className={`line-clamp-5 lg:line-clamp-8 xl:line-clamp-8 ${textHeight}`}
				>
					{extract}
				</p>
			</div>
		</div>
	);
};

export default NewsCard;
