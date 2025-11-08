export default function ArxivReaderPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-2 text-4xl font-bold">Arxiv Reader Privacy Policy</h1>
      <p className="mb-8">Last updated: November 7, 2025</p>
      <h2 className="text-lg mt-6 mb-2">Analytics and Crash Reporting</h2>
      <p>
        arXiv Reader uses Firebase services provided by Google LLC for anonymous analytics and crash reporting: <strong>Firebase Analytics</strong> and <strong>Firebase Crashlytics</strong>. These services help us understand app usage, improve features, and diagnose crashes so the app is more stable and responsive.
      </p>
      <p>
        The specific categories of data collected and the purposes are described below. Data is collected using an app instance identifier and anonymized event/performance information. We do <strong>not</strong> collect email addresses, names, or other personally identifying information.
      </p>

      <h3 className="mt-4">App Store / Apple-style disclosure</h3>
      <ul>
        <li>
          <strong>App Instance ID</strong> — Linked to User: <strong>NO</strong>; Used for Tracking: <strong>NO</strong>; Collection Purposes: <em>Analytics</em>.
        </li>
        <li>
          <strong>Product Interaction (usage events)</strong> — Linked to User: <strong>NO</strong>; Used for Tracking: <strong>NO</strong>; Collection Purposes: <em>Analytics</em>.
        </li>
        <li>
          <strong>Crash Data</strong> — Linked to User: <strong>NO</strong>; Used for Tracking: <strong>NO</strong>; Collection Purposes: <em>App Functionality, Analytics</em>.
        </li>
        <li>
          <strong>Performance Data</strong> — Linked to User: <strong>NO</strong>; Used for Tracking: <strong>NO</strong>; Collection Purposes: <em>App Functionality, Analytics</em>.
        </li>
      </ul>
      <p>
        Firebase is a third-party service operated by Google. Data processed by Firebase may be transferred to and stored in the United States and other countries. We do not use collected data for advertising or targeted marketing, and we do not link analytics/crash reports to your identity.
      </p>


      <h2 className="text-lg mt-6 mb-2">Future Changes</h2>
      <p>
        If you opt into iCloud sync, that data remains in your iCloud account and is not accessed by Firebase.
      </p>
      <p>
        If the app’s data usage or privacy practices change, this privacy policy will be updated accordingly and users will be notified.
      </p>
      <h2 className="text-lg mt-6 mb-2">Contact</h2>
      <p>
        If you have any questions or concerns about privacy on arXiv Reader, please contact me at nate.card.dev@gmail.com
      </p>
    </div>
  );
}
