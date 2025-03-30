import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
          ERVEY GARCÍA SILVA
        </h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
