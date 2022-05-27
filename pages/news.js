import ContainerLayout from '@/components/layout/ContainerLayout';

import LatestNewsRelease from '@/components/news/LatestNewsRelease';
import NewsCard from '@/components/home/News/NewsCard';
import newsArticles from '@/assets/data/articles';

const NewsPage = () => {
	const renderArticles = (list) =>
		list?.map((article, index) => {
			return (
				<NewsCard
					key={index}
					article={article}
					textHeight='lg:!line-clamp-4'
					showLink
				/>
			);
		});

	return (
		<div className='py-16 mx-auto projects'>
			{/* Current  Project */}
			<div>
				<ContainerLayout className='mx-auto'>
					<h1 className='mb-10 section-header'>Latest Release</h1>

					<LatestNewsRelease article={newsArticles[0]} />
				</ContainerLayout>
			</div>

			<ContainerLayout className='mx-auto mt-16'>
				<h1 className='mb-10 section-header'>Recent Projects</h1>
				{/* Projects */}
				<div className='grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
					{renderArticles(newsArticles)}
				</div>
			</ContainerLayout>
		</div>
	);
};

export default NewsPage;
