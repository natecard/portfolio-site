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
	const recaptchaRef = createRef<HTMLFormElement>();
	function sendEmail(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (form.current !== null) {
			emailjs.sendForm('service_50qkrsk', 'contact_form', form.current).then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				},
			);
		}
	}
	function onChange(value: unknown) {
		console.log('Captcha value:', value);
	}

	function handleChange(event: React.FormEvent<HTMLInputElement>) {
		const { name, value } = event.currentTarget;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value,
			};
		});
	}
	function handleSubmit(event: React.MouseEvent) {
		event.preventDefault();
		console.log(formData);
	}
	return (
		<>
			<div className="flex flex-col justify-center self-center">
				<div className="paraText">
					If you are interested in having a conversation about working together or are looking for
					more information, feel free to reach out through the form below.
				</div>
				<form ref={form} onSubmit={sendEmail} className="flex flex-col self-center p-8">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="m-4 rounded border-2 border-black py-3 pl-4 pr-40"
					/>
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						onChange={handleChange}
						value={formData.email}
						className="m-4 rounded border-2 border-black py-3 pl-4 pr-40"
					/>
					<input
						type="text"
						placeholder="Message"
						name="message"
						onChange={handleChange}
						value={formData.message}
						className="m-4 rounded border-2 border-black py-3 pl-4 pr-40"
					/>
					<button
						onSubmit={() => {
							if (recaptchaRef.current) {
								recaptchaRef.current.execute();
							}
						}}
						data-sitekey="6Lc8Q-EkAAAAADCFCYitbUDWPTmpqoqXhqkAtEYR"
						className="m-4 rounded border-2 border-black px-12 py-3"
					>
						Submit
					</button>
				</form>
				<ReCAPTCHA
					size="invisible"
					sitekey="6Lc8Q-EkAAAAADCFCYitbUDWPTmpqoqXhqkAtEYR"
					onChange={onChange}
				/>
			</div>
		</>
	);
}
