import { useRef } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import showcase_swiper_nav_btn from '@/assets/images/showcase-swiper-pagination-btn.png';
import showcase_swiper_nav_btn_hovered from '@/assets/images/showcase-swiper-pagination-btn-hovered.png';
import Slide from './Slide';
import ContainerLayout from '@/components/layout/ContainerLayout';

SwiperCore.use([Navigation, Autoplay, Pagination]);

const projects = [
	{
		id: 1,
		title: 'Planting to support the needy',
		slug: 'planting-to-support-the-needy',
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. Ln publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
		detail: null,
		progress: {
			status: 'in progress',
			goal: 1000,
			currentCount: 250,
			description: 'sponsors',
		},
		created_at: '2/02/2022',
	},
	{
		id: 2,
		title: 'Planting to support the needy',
		slug: 'planting-to-support-the-needy',
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. Ln publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
		detail: null,
		progress: {
			status: 'in progress',
			goal: 1000,
			currentCount: 250,
			description: 'sponsors',
		},
		created_at: '2/02/2022',
	},
	{
		id: 4,
		title: 'Planting to support the needy',
		slug: 'planting-to-support-the-needy',
		description:
			'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. Ln publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.',
		detail: null,
		status: 'active',
		progress: {
			goal: 1000,
			currentCount: 250,
			description: 'sponsors',
		},
		created_at: '2/02/2022',
	},
];

const Projects = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const renderProjectSlides = (projectList) =>
		projectList.map((project, index) => {
			return (
				<SwiperSlide key={index}>
					<Slide project={project} />
				</SwiperSlide>
			);
		});

	return (
		<div className='relative py-10 pb-14 projects'>
			{/* Orange Bg */}
			<div className='bg-primary-500 bg-opacity-[0.15] w-full h-full absolute inset-0 -z-10 lg:w-[70vw] lg:right-0 lg:left-auto lg:inset-y-0'></div>

			{/* Title */}
			<ContainerLayout className='lg:mx-auto'>
				<h1 className='section-header'>Projects</h1>
			</ContainerLayout>

			{/* Swiper */}
			<div className='h-[600px] w-full mt-8 projects__list'>
				<Swiper
					spaceBetween={25}
					slidesPerView={1}
					grabCursor={true}
					breakpoints={{
						560: { slidesPerView: 2 },
						1024: { slidesPerView: 1 },
					}}
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
					{renderProjectSlides(projects)}

					{/* Swiper Navigation */}
					<div
						ref={prevRef}
						className='showcase-swiper__button-prev swiper-button-prev amt-content-positioned-left'
					>
						<img src={showcase_swiper_nav_btn_hovered} />
						<img src={showcase_swiper_nav_btn} />
						<IoChevronBackOutline />
					</div>

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

export default Projects;
