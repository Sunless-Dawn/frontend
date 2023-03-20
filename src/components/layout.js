import Meta from '@/components/meta.js';
import Header from '@/components/header.js';
import Footer from '@/components/footer.js';

export default function Layout(props) {
  return (
    <>
      <Meta />

      <div className="bg-[url('/background.png')] flex flex-col h-screen justify-between">
        <Header />
        <main className="flex justify-center py-5 px-2">
            {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
