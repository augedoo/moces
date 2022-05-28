import ContainerLayout from '@/components/layout/ContainerLayout';
import Head from 'next/head';
import { Element } from 'react-scroll';

import LatestNewsRelease from '@/components/news/LatestNewsRelease';
import NewsCard from '@/components/home/News/NewsCard';
import newsArticles from '@/assets/data/articles';
import Header from '@/components/layout/Header';

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
		<div className=' projects'>
			<Head>
				<title>
					News | MOCES - Humanitarian Support for the Elderly and the Sick
				</title>
			</Head>

			<section>
				<Header
					title='News'
					imageSmall='https://unsplash.it/505'
					imageLarge='https://unsplash.it/704'
					nav={[
						{
							text: 'Latest Release',
							sectionName: 'latest-release',
						},
						{
							text: 'Media Bulleting',
							sectionName: 'media-bulleting',
						},
					]}
				/>
			</section>

			{/* Current  Project */}
			<Element as='section' name='latest-release' className='pt-16'>
				<ContainerLayout className='mx-auto'>
					<h1 className='mb-10 section-header'>Latest Release</h1>

					<LatestNewsRelease article={newsArticles[0]} />
				</ContainerLayout>
			</Element>

			<Element as='section' name='media-bulleting'>
				<ContainerLayout className='mx-auto my-16'>
					<h1 className='mb-10 section-header'>Media Bulleting</h1>
					{/* Projects */}
					<div className='grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
						{renderArticles(newsArticles)}
					</div>
				</ContainerLayout>
			</Element>
		</div>
	);
};

export default NewsPage;
