import { useState } from 'react';

// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/bundle';
import '../styles/globals.scss';
import MainNavigation from '@/components/layout/MainNavigation';
import MobileNavMenu from '@/components/layout/MainNavigation/MobileNavMenu';

function MyApp({ Component, pageProps }) {
	const [isMenuShown, setMenuShown] = useState(false);

	// Open/Close the mobile navigation
	const toggleMobileMenu = (e) => {
		setMenuShown((prevState) => !prevState);
		e.stopPropagation();
	};

	return (
		<div className='display'>
			<MobileNavMenu
				isMenuShown={isMenuShown}
				toggleMobileMenu={toggleMobileMenu}
			/>

			<div
				className={`transform transition duration-700 ${
					isMenuShown ? '-translate-x-[280px]' : 'translate-x-0'
				}`}
			>
				<MainNavigation
					isMenuShown={isMenuShown}
					toggleMobileMenu={toggleMobileMenu}
				/>

				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
