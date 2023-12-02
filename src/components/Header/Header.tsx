import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  categories: Record<string, string>;
}

const Header: React.FC<HeaderProps> = ({ categories }) => {
  return (
    <header className="bg-primary text-white text-center p-3">
      My Quote Collection
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/all" className="nav-link">
                  All
                </Link>
              </li>
              {Object.keys(categories).map((category) => (
                <li className="nav-item" key={category}>
                  <Link to={`/category/${category}`} className="nav-link">
                    {categories[category]}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  Submit new quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;