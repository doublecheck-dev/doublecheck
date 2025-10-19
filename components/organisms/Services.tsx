import Container from '../../atoms/Container';

export default function Services({ items }: { items: Array<any> }) {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-2xl font-bold mb-6">What we offer</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((s: any) => (
            <article key={s.id} className="p-6 bg-white rounded shadow-sm">
              <div className="text-lg font-semibold mb-2">{s.title}</div>
              <p className="text-sm text-gray-600">{s.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
