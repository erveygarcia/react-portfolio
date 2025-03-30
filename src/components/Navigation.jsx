import { NavLink } from 'react-router-dom';

function Navigation() {
  const baseClass = 'text-gray-700 hover:text-blue-600 font-medium transition';
  const activeClass = 'text-blue-600 font-semibold underline';

  return (
    <nav className="flex flex-wrap justify-center gap-6">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive ? `${baseClass} ${activeClass}` : baseClass
        }
      >
        Resume
      </NavLink>
    </nav>
  );
}

export default Navigation;
