import { CgArrowLongRight } from 'react-icons/cg';
import Button from '@/components/ui/Button';

const NewsCard = ({ article, textHeight, showLink }) => {
	const { image, title, category, extract, slug } = article;

	return (
		<div className='w-full h-full card'>
			<div className='card__wrapper relative h-[250px] w-full lg:h-[200px] xl:h-[250px]'>
				<img
					src={image.url}
					alt={title}
					className='object-cover w-full h-full'
				/>
				<div className='absolute left-0 -bottom-9 my-4 w-fit bg-primary-500 p-2.5 px-6 text-center text-sm uppercase text-gray-100'>
					{category}
				</div>
			</div>

			{/* Content */}
			<div className='w-full h-full max-w-md pt-4'>
				<h2 className='max-h-[70px] overflow-hidden pt-5 pb-3 text-xl font-semibold !leading-tight text-secondary-700 line-clamp-2 lg:text-xl'>
					{title}
				</h2>

				<p
					className={`lg:line-clamp-8 xl:line-clamp-8 line-clamp-5 ${textHeight}`}
				>
					{extract}
				</p>

				{showLink && (
					<Button
						url={`/news/${slug}`}
						type='nextLink'
						textContent='Learn More'
						bgClassName='!bg-transparent'
						className='mt-4 w-fit !p-0 !text-sm text-secondary-500'
					>
						<CgArrowLongRight className='h-7 w-7' />
					</Button>
				)}
			</div>
		</div>
	);
};

export default NewsCard;
