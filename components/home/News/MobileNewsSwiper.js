import { useRef } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import showcase_swiper_nav_btn from '@/assets/images/showcase-swiper-pagination-btn.png';
import showcase_swiper_nav_btn_hovered from '@/assets/images/showcase-swiper-pagination-btn-hovered.png';
import Slide from './Slide';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { latestReleases } from '@/data/articles';

const MobileNewsSlider = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const renderArticleSlides = (articleList) =>
		articleList.map((article, index) => {
			return (
				<SwiperSlide key={index}>
					<Slide article={article} />
				</SwiperSlide>
			);
		});

	return (
		<div>
			<h1 className='section-header'>Latest News</h1>

			{/* Swiper */}
			<div className='w-full mt-8 articles__list'>
				<Swiper
					spaceBetween={15}
					slidesPerView={1}
					grabCursor={true}
					loop
					speed={1500}
					autoplay={{
						delay: 2000,
					}}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{renderArticleSlides(latestReleases)}

					{/* Swiper Navigation */}

					{/* // > Prev Button */}
					<div
						ref={prevRef}
						className='showcase-swiper__button-prev swiper-button-prev amt-content-positioned-left'
					>
						<img src={showcase_swiper_nav_btn_hovered} />
						<img src={showcase_swiper_nav_btn} />
						<IoChevronBackOutline />
					</div>

					{/* // > Next Button */}
					<div
						ref={nextRef}
						className='showcase-swiper__button-next swiper-button-next amt-content-positioned-right'
					>
						<img
							src={showcase_swiper_nav_btn_hovered}
							className='-scale-x-[1]'
						/>
						<img src={showcase_swiper_nav_btn} className='-scale-x-[1]' />
						<IoChevronForwardOutline />
					</div>
				</Swiper>
			</div>
		</div>
	);
};

export default MobileNewsSlider;
