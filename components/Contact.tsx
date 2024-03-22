// 'use client';
// import { useState, useRef, createRef } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import emailjs from '@emailjs/browser';
// // Contact form
// export default function Contact() {
// 	const [formData, setFormData] = useState({
// 		name: '',
// 		email: '',
// 		message: '',
// 	});
// 	emailjs.init('6aUE9oXZAGKyifAsE');
// 	const form = useRef<HTMLFormElement>(null);
// 	const recaptchaRef = createRef<ReCAPTCHA>();

// 	function sendEmail(token: string) {
// 		if (form.current !== null) {
// 			const formParams = {
// 				...formData,
// 				'g-recaptcha-response': token,
// 			};
// 			emailjs.send('service_50qkrsk', 'contact_form', formParams).then(
// 				(result) => {
// 					console.log(result.text);
// 					alert('Success! Message received.');
// 				},
// 				(error) => {
// 					console.log(error.text);
// 				},
// 			);
// 		}
// 	}

// 	function handleChange(
// 		event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
// 	) {
// 		const { name, value } = event.currentTarget;
// 		setFormData((prevFormData) => {
// 			return {
// 				...prevFormData,
// 				[name]: value,
// 			};
// 		});
// 	}
// 	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
// 		event.preventDefault();
// 		if (recaptchaRef.current) {
// 			const token = await recaptchaRef.current.executeAsync(); //executeAsync executes the captcha and awaits the result if user input is required.
// 			token && sendEmail(token); //when the token is ready, the actual submit function is called
// 		}
// 	}
// 	function scrollToTop() {
// 		window.scrollTo(0, 0);
// 	}
// 	return (
// 		<>
// 			<div className="snap flex flex-col justify-center">
// 				<p className="px-2 text-center md:px-12 lg:px-24 lg:text-2xl">
// 					If you are interested in having a conversation about working together or are looking for
// 					more information, feel free to reach out through the form below.
// 				</p>
// 				<form ref={form} onSubmit={handleSubmit} className="flex flex-col items-center">
// 					<input
// 						type="text"
// 						placeholder="Name"
// 						name="name"
// 						value={formData.name}
// 						onChange={handleChange}
// 						className="m-4 w-3/4 rounded border-2 border-black p-2 md:w-5/12"
// 					/>
// 					<input
// 						type="email"
// 						placeholder="Email Address"
// 						name="email"
// 						onChange={handleChange}
// 						value={formData.email}
// 						className="m-4 w-3/4 rounded border-2 border-black p-2 md:w-5/12"
// 					/>
// 					<textarea
// 						placeholder="Message"
// 						name="message"
// 						onChange={handleChange}
// 						value={formData.message}
// 						className="m-4 w-3/4 rounded border-2 border-black p-2 md:w-5/12"
// 					/>
// 					<button
// 						onSubmit={() => {
// 							if (recaptchaRef.current) {
// 								recaptchaRef.current.execute();
// 							}
// 						}}
// 						className="m-4 rounded border-2 border-black bg-secondary px-12 py-3 text-black hover:bg-background hover:text-secondary"
// 					>
// 						Submit
// 					</button>

// 					{process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
// 						<ReCAPTCHA
// 							ref={recaptchaRef}
// 							size="invisible"
// 							sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
// 						/>
// 					)}
// 				</form>
// 				<div className="hidden text-center text-sm hover:block">
// 					This site is protected by reCAPTCHA and the Google
// 					<a href="https://policies.google.com/privacy"> Privacy Policy</a> and
// 					<a href="https://policies.google.com/terms"> Terms of Service</a> apply.
// 				</div>
// 				<div className="center-align">
// 					<button onClick={scrollToTop}>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							fill="none"
// 							viewBox="0 0 24 24"
// 							strokeWidth={1.5}
// 							stroke="currentColor"
// 							className="h-12 w-12"
// 						>
// 							<path
// 								strokeLinecap="round"
// 								strokeLinejoin="round"
// 								d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
// 							/>
// 						</svg>
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
