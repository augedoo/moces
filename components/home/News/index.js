import ContainerLayout from '@/components/layout/ContainerLayout';
import MobileNewsSwiper from './MobileNewsSwiper';
import NewsCardLarge from './NewsCardLarge';
import NewsCard from './NewsCard';
import latestReleases from '@/assets/data/articles';
import Button from '@/components/ui/Button';

const News = () => {
	// * Note: This component receives 3 recent news articles

	return (
		<ContainerLayout className='mx-auto news'>
			{/* // > Smartphones : News Swiper */}
			<div className='sm:hidden'>
				<MobileNewsSwiper />
			</div>

			{/* // > Tables and Up: News Cards */}
			<div className='hidden sm:block'>
				<h1 className='section-header lg:hidden'>Latest News</h1>

				<div className='pt-8'>
					<div className='grid grid-cols-2 gap-4 gap-y-7 lg:grid-cols-4'>
						<div className='col-span-2 flex flex-col sm:h-[380px] lg:h-[480px]'>
							{/* Most Recent Article */}
							<h1 className='mb-4 section-header sm:hidden lg:block'>
								Latest News
							</h1>

							<NewsCardLarge article={latestReleases[0]} />
						</div>

						{/* Other 2 recent articles */}
						<div className='flex flex-col items-start gap-4'>
							<NewsCard
								article={latestReleases[1]}
								textHeight='lg:!line-clamp-6'
							/>

							{/* View All New Button for LG */}
							<Button
								url='#/donate'
								type='nextLink'
								textContent='View All News'
								bgClassName='bg-primary-500 hover:bg-primary-600'
								className='hidden w-full text-sm text-center text-gray-100 lg:ml-0 lg:block'
							/>
						</div>

						<NewsCard article={latestReleases[2]} />
					</div>

					{/* View All New Button for SM*/}
					<div className='flex pt-8'>
						<Button
							url='#/donate'
							type='nextLink'
							textContent='View All News'
							bgClassName='bg-primary-500 hover:bg-primary-600'
							className='text-sm text-center text-gray-100 w-fit sm:mx-auto lg:ml-0 lg:hidden'
						/>
					</div>
				</div>
			</div>
		</ContainerLayout>
	);
};

export default News;
