export default function BlogLayout({
  children,
}: React.PropsWithChildren<unknown>) {
  return (
    <>
      <main>
        <div className="flex min-h-screen flex-col items-center">
          {children}
        </div>
      </main>
    </>
  );
}
