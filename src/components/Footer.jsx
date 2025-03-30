function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-16">
      <div className="flex justify-center gap-6 mb-4 text-sm">
        <a
          href="https://github.com/erveygarcia"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/erveygarcia"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://stackoverflow.com/users/tuusuario"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400 transition-colors"
        >
          Stack Overflow
        </a>
      </div>
      <p className="text-xs text-gray-400">© 2025 Ervey García</p>
    </footer>
  );
}

export default Footer;
