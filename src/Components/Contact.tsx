import { useState, useRef, createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	emailjs.init('6aUE9oXZAGKyifAsE');
	const form = useRef<HTMLFormElement>(null);
	const recaptchaRef = createRef<ReCAPTCHA>();

	function sendEmail(token: string) {
		if (form.current !== null) {
			const formParams = {
				...formData,
				'g-recaptcha-response': token,
			};
			emailjs.send('service_50qkrsk', 'contact_form', formParams).then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		}
	}

	function handleChange(
		event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
	) {
		const { name, value } = event.currentTarget;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value,
			};
		});
	}
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (recaptchaRef.current) {
			const token = await recaptchaRef.current.executeAsync(); //executeAsync executes the captcha and awaits the result if user input is required.
			token && sendEmail(token); //when the token is ready, the actual submit function is called
		}
	}
	return (
		<>
			<div className="flex flex-col justify-center self-center">
				<div className="paraText">
					If you are interested in having a conversation about working together or are looking for
					more information, feel free to reach out through the form below.
				</div>
				<form ref={form} onSubmit={handleSubmit} className="flex flex-col self-center p-8">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="border-black m-4 rounded border-2 py-3 pl-4 pr-40"
					/>
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						onChange={handleChange}
						value={formData.email}
						className="border-black m-4 rounded border-2 py-3 pl-4 pr-40"
					/>
					<textarea
						placeholder="Message"
						name="message"
						onChange={handleChange}
						value={formData.message}
						className="border-black m-4 rounded border-2 py-3 pl-4 pr-40"
					/>
					<button
						onSubmit={() => {
							if (recaptchaRef.current) {
								recaptchaRef.current.execute();
							}
						}}
						className="border-black m-4 rounded border-2 px-12 py-3"
					>
						Submit
					</button>
					<ReCAPTCHA
						ref={recaptchaRef}
						size="invisible"
						sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
					/>
				</form>
			</div>
		</>
	);
}
