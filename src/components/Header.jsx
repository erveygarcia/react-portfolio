import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide mb-2 sm:mb-0">
          ERVEY GARCIA SILVA
        </h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
