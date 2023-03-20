import Meta from '@/components/meta.js';
import Header from '@/components/header.js';
import Footer from '@/components/footer.js';

export default function Layout(props) {
  return (
    <>
      <Meta />

      <div className="bg-[url('/background.png')] bg-repeat bg-cover flex flex-col justify-between">
        <Header />
        <main className="flex justify-center h-full my-10 mx-10 lg:mx-0 text-white">
            {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
