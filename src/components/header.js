import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="bg-black opacity-80 text-white w-full">
        <div className="flex justify-center">
          <div className="flex justify-between w-full h-24 lg:w-[61.8%] lg:h-72">
            <div className="mx-auto my-auto text-center">
              <Link href="/">
                <h1 className="text-3xl lg:text-6xl font-bold">Sunless Dawn</h1>
              </Link>
              <h2 className="text-sm lg:text-xl">Tactical Cyberpunk Action</h2>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
