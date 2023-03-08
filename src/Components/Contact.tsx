import { useState } from 'react';
export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value,
			};
		});
	}
	function handleSubmit(event) {
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
				<form onSubmit={handleSubmit} className="flex flex-col self-center p-8">
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
					<textarea
						placeholder="Message"
						name="message"
						onChange={handleChange}
						value={formData.message}
						className="m-4 rounded border-2 border-black py-3 pl-4 pr-40"
					/>
					<button className="m-4 rounded border-2 border-black px-12 py-3">Submit</button>
				</form>
			</div>
		</>
	);
}
