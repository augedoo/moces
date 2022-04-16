import { MdOutlineSafetyDivider } from 'react-icons/md';
import { AiOutlineSafety } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { GiTakeMyMoney } from 'react-icons/gi';

import ContainerLayout from '@/components/layout/ContainerLayout';
import OutlineOffset from '@/components/ui/OutlineOffset';

const values = [
	{
		icon: <MdOutlineSafetyDivider />,
		text: 'Know your beneficiary. We’ll share their name, picture and more.',
	},
	{
		icon: <TiDocumentText />,
		text: 'Stay updated about how your contribution is making impact through our reports.',
	},
	{
		icon: <GiTakeMyMoney />,
		text: 'Your choice to give monthly will make a long lasting impact.',
	},
	{
		icon: <AiOutlineSafety />,
		text: 'Every beneficiary you support is under the protection of the Give Assurance non-profits.',
	},
];

const DonationValues = () => {
	const renderItems = (items) =>
		items.map((item, index) => (
			<div
				key={index}
				className='flex gap-4 px-4 py-3 border shadow lg:gap-4 lg:py-6 lg:px-3 2xl:p-5'
			>
				{/* Icon */}
				<div className='w-[40px] h-[40px] min-w-[40px] lg:w-[60px] lg:min-w-[60px] lg:h-[60px] text-3xl lg:text-4xl flex items-center text-primary-500 relative justify-center bg-primary-50 border '>
					{item.icon}

					<OutlineOffset
						outlineColor={'border-gray-500/50'}
						className='-right-[5px] -bottom-[5px]'
					/>
				</div>

				<p className='w-full font-light'>{item.text}</p>
			</div>
		));

	return (
		<ContainerLayout className='mx-auto'>
			<h1 className='section-header lg:!text-center'>
				Value for Your Donation
			</h1>

			<p className='max-w-xs py-2 mx-auto text-center sm:max-w-md'>
				Our transparency speaks for us.
			</p>

			{/* Impact */}
			<div className='grid gap-4 pt-8 sm:grid-cols-2 xl:grid-cols-4'>
				{renderItems(values)}
			</div>
		</ContainerLayout>
	);
};

export default DonationValues;
