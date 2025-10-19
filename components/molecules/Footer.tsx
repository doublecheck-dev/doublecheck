import Container from '../../atoms/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <Container>
        <div className="py-8 text-sm text-gray-600">
          © {new Date().getFullYear()} DoubleCheck — All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
