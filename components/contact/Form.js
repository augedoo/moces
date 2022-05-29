import { BiLoaderAlt } from 'react-icons/bi';
import { useState } from 'react';

import Button from '@/components/ui/Button';

const ContactForm = () => {
	const [values, setValues] = useState({
		email: '',
		phone: '',
		name: '',
		message: '',
	});

	const [isFormSubmitLoading, setFormSubmitLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const onFormSubmit = async (e) => {
		setFormSubmitLoading(true);
		e.preventDefault();

		try {
			const response = await fetch(
				'https://formsubmit.co/ajax/augedoo@gmail.com',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify({
						_subject: 'Contact Form Submission',
						_template: 'table',
						...values,
					}),
				}
			);

			const data = await response.json();
			setResponseMessage(data);
			setFormSubmitLoading(false);
			document.getElementById('contactForm').reset();
		} catch (err) {
			console.log(err);
			setFormSubmitLoading(false);
		}
	};

	return (
		<div className='lg:m-0 lg:h-full lg:w-full 2xl:bg-transparent'>
			<form id='contactForm' onSubmit={onFormSubmit}>
				<div className='form-group'>
					<label className='font-semibold'>Name</label>

					<input
						type='text'
						name='name'
						required
						minLength={3}
						placeholder='Enter your name'
						className='!bg-transparent'
						onChange={handleChange}
					/>
				</div>

				<div className='grid gap-4 lg:grid-cols-1 lg:gap-2 2xl:grid-cols-1'>
					<div className='form-group'>
						<label className='font-semibold'>Email</label>
						<input
							type='email'
							name='email'
							required
							placeholder='Your e-mail'
							className='!bg-transparent'
							onChange={handleChange}
						/>
					</div>

					<div className='form-group'>
						<label className='font-semibold'>Phone</label>
						<input
							type='tel'
							name='phone'
							pattern='[0-9]{10}'
							required
							placeholder='Mobile number'
							className='!bg-transparent'
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='form-group'>
					<label className='font-semibold'>Message</label>

					<textarea
						name='message'
						rows='5'
						required
						minLength={3}
						placeholder='Your message details'
						className='max-h-[200px] min-h-full min-w-full max-w-full !bg-transparent'
						onChange={handleChange}
					></textarea>
				</div>

				{responseMessage && (
					<div
						className={`mt-2 text-center lg:text-left ${
							responseMessage?.success ? 'text-secondary-700' : 'text-red-500'
						}`}
					>
						{responseMessage?.success
							? 'Message submitted successfully. Our team will get back to you. Please keep check on your inbox.'
							: 'Oops! Submission failed. Please try again.'}
					</div>
				)}

				<Button
					type='submit'
					textContent={isFormSubmitLoading ? 'Processing' : 'Send Message'}
					className='mx-auto mt-4 !py-4 !text-white hover:!bg-primary-600 lg:mx-0'
					disabled={isFormSubmitLoading}
				>
					{isFormSubmitLoading && (
						<BiLoaderAlt className='animate-spin h-6 w-6' />
					)}
				</Button>
			</form>
		</div>
	);
};

export default ContactForm;
