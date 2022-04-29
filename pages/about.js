import AboutHeader from '@/components/about/AboutHeader';
import Vision from '@/components/about/Vision';
import WhatWeRepresent from '@/components/about/WhatWeRepresent';
import WhoWeAre from '@/components/about/WhoWeAre';

const About = () => {
	return (
		<div className='about'>
			<section>
				<AboutHeader />
			</section>

			<section className='mt-16 lg:mt-24' id='about-us'>
				<WhoWeAre />
			</section>

			<section className='mt-16 lg:mt-24' id='about-values'>
				<WhatWeRepresent />
			</section>

			<section className='my-16 lg:mb-40 lg:my-24' id='about-vision'>
				<Vision />
			</section>
		</div>
	);
};

export default About;
