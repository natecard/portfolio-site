import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-4xl font-bold">Apps on the App Store</h1>
      <div className="space-y-8">
        <div className="rounded-lg border p-4">
          <Link href="/">
            <h2 className="mb-2 text-2xl font-bold">arXiv Reader</h2>
          </Link>
          <br />
          <Link
            className="text-primary hover:text-primary/80 hover:underline"
            href="/apps/arxiv_reader"
            target="_blank"
          >
            Visit arXiv Reader Privacy Policy
          </Link>
          <p>
            arXiv Reader transforms how you access and work with scientific
            literature. Whether you&apos;re a researcher, graduate student, or
            academic professional, this app streamlines your workflow with the
            world&apos;s largest repository of scientific papers.
          </p>
          <br />
          <strong>KEY FEATURES:</strong>
          <ul className="list-disc pl-5">
            <li>
              Advanced Search: Quickly find relevant papers across all arXiv
              categories with powerful search filters
            </li>
            <li>
              Seamless Downloads: Save papers directly to your device for
              offline reading
            </li>
            <li>
              Smart Annotations: Add notes, highlights, and comments directly to
              PDFs
            </li>
            <li>
              Flexible PDF Sharing: Export and share PDFs with or without your
              annotations
            </li>
            <li>
              Simple Citations: Export bibTeX formatted files for citations
            </li>
            <li>
              Organized Library: Keep track of your downloaded papers in
              collections
            </li>
          </ul>
          <br />
          <p>
            <strong>DESIGNED FOR ACADEMICS:</strong>
          </p>
          <p>
            Built specifically for the academic workflow, arXiv Reader
            understands the unique needs of researchers and students.
          </p>
          <p>
            Read papers on commutes, annotate during seminars, and easily share
            findings with colleagues. The intuitive interface ensures you spend
            more time on research and less time managing files.
          </p>
          <p>
            <br />
            <strong>PERFECT FOR:</strong>
            <ul className="list-disc pl-5">
              <li>Literature reviews and research discovery</li>
              <li>Conference preparation and paper analysis</li>
              <li>Collaborative research projects</li>
              <li>Student coursework and thesis research</li>
              <li>Staying current with your field</li>
            </ul>
            <br />
            Join researchers who rely on arXiv Reader to stay at the forefront
            of scientific discovery.
          </p>
          <br />
          <p>
            <strong>DISCLAIMER:</strong>
            <br />
            This application is an independent project and is not affiliated
            with or endorsed by arXiv or Cornell University. All arXiv content
            is accessed via their publicly available APIs.
          </p>
          <Link
            className="text-primary hover:text-primary/80 hover:underline"
            href="https://arxiv.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit arXiv
          </Link>
        </div>
      </div>
    </div>
  );
}
