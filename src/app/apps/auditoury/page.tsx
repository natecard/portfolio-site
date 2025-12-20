export default function AuditouryPage() {
	return (
		<div className="container mx-auto py-8">
			<h1 className="mb-2 text-4xl font-bold">Auditoury Privacy Policy</h1>
			<p className="mb-8">Last updated: December 20, 2025</p>
			<h2 className="mt-6 mb-2 text-lg">Analytics and Crash Reporting</h2>
			<p>
				Auditoury uses Firebase services provided by Google LLC for anonymous analytics and crash
				reporting: <strong>Firebase Analytics</strong> and <strong>Firebase Crashlytics</strong>.
				These services help us understand app usage, improve features, and diagnose crashes so the
				app is more stable and responsive.
			</p>
			<p>
				The specific categories of data collected and the purposes are described below. Data is
				collected using an app instance identifier and anonymized event/performance information. We
				do <strong>not</strong> collect email addresses, names, or other personally identifying
				information.
			</p>

			<h3 className="mt-4 text-lg">Privacy disclosures</h3>
			<div className="overflow-x-auto">
				<table className="mt-4 w-full border-collapse text-left">
					<thead>
						<tr className="border-b">
							<th className="py-2 pr-4 font-bold">Data Category</th>
							<th className="py-2 pr-4 font-bold">Linked to User</th>
							<th className="py-2 pr-4 font-bold">Used for Tracking</th>
							<th className="py-2 font-bold">Collection Purposes</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b">
							<td className="py-2 pr-4">App Instance ID</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2">
								<em>Analytics</em>
							</td>
						</tr>
						<tr className="border-b">
							<td className="py-2 pr-4">Product Interaction (usage events)</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2">
								<em>Analytics</em>
							</td>
						</tr>
						<tr className="border-b">
							<td className="py-2 pr-4">Crash Data</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2">
								<em>App Functionality, Analytics</em>
							</td>
						</tr>
						<tr className="border-b">
							<td className="py-2 pr-4">Performance Data</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2 pr-4">NO</td>
							<td className="py-2">
								<em>App Functionality, Analytics</em>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p className="mt-4">
				Firebase is a third-party service operated by Google. Data processed by Firebase may be
				transferred to and stored in the United States and other countries. We do not use collected
				data for advertising or targeted marketing, and we do not link analytics/crash reports to
				your identity.
			</p>

			<h2 className="mt-6 mb-2 text-lg">Future Changes</h2>
			<p>
				If the app’s data usage or privacy practices change, this privacy policy will be updated
				accordingly and users will be notified.
			</p>
			<h2 className="mt-6 mb-2 text-lg">Contact</h2>
			<p>
				If you have any questions or concerns about privacy on Auditoury, please contact me at
				nate.card.dev@gmail.com
			</p>
		</div>
	);
}
