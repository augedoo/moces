import SimpleReactLightbox from 'simple-react-lightbox';

import 'swiper/css/bundle';
import '../styles/globals.scss';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<SimpleReactLightbox>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SimpleReactLightbox>
	);
}

export default MyApp;
