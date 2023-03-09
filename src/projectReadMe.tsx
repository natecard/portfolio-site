/* eslint-disable react/no-unescaped-entities */
export const subforumaReadMe = (
	<div>
		<h3 className="text-2xl">Features</h3>
		<ul className="list-inside list-disc pt-3">
			<li>Toggle dark / light theme based on system theme</li>
			<li>Create, reply, like public posts</li>
			<li>PostgreSQL database and realtime functions</li>
			<li>Responsive design</li>
			<li>Google Sign In</li>
			<li>Sign Out</li>
			<li>Magic Link Sign In</li>
		</ul>
		<p className="pt-4">
			For Google Sign In, I used Supabase Auth. This allowed for a good base to pull user data and
			display profile pictures, display names, etc to build out the basic "tweets" The PostgreSQL
			database from Supabase gave me the ability to build my own SQL functions to render the replies
			in the timeline. By doing this I was able to sort and sequence the replies by the number of
			likes that each had received, simulating a sort of social media algorithm promoting more liked
			content to the top of the replies.
		</p>
	</div>
);

export const ethosReadMe = (
	<div>
		<h3 className="text-2xl">Features</h3>
		<ul className="list-inside list-disc pt-3">
			<li>Responsive design</li>
			<li>Fully featured shopping cart</li>
			<li>API fetch for product rendering </li>
			<li>Individual pages for each product</li>
		</ul>
		<p className="pt-3">
			I built an ecommerce site to utilize the recently released Shopify Mock Store API This was
			built using React, TypeScript, and CSS done using TailwindCSS. It is an ecommerce store with
			landing page, store page, individual item pages/modals, and shopping cart.
		</p>
	</div>
);
export const portfolioReadMe = (
	<div>
		<h3 className="text-2xl">Features</h3>
		<ul className="list-inside list-disc pt-3">
			<li>Toggle dark / light theme based on system theme</li>
			<li>Responsive design</li>
			<li>Google Invisible Recaptcha</li>
			<li>Instant contact form</li>
			<li>Parallax scrolls</li>
		</ul>
		<p className="pt-3">
			This was built to showcase some of my projects that I have completed. Using TypeScript, React,
			TailwindCSS for the CSS. I tried using some new to me packages to help make something a little
			more design forward than other projects I have completed in the past.
		</p>
	</div>
);
