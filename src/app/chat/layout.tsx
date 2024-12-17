export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Chat Interface</h1>
        {children}
      </div>
    </section>
  );
}
