import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ className = "" }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumb" className={className}>
      <ol className="flex list-none p-0 items-center">
        <li className="breadcrumb-item">
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <React.Fragment key={index}>
              <p className="mx-2 text-gray-500">{`> `}</p>
              {isLast ? (
                <li
                  className="breadcrumb-item text-gray-500"
                  aria-current="page"
                >
                  {decodeURIComponent(path.replace(/-/g, " "))}
                </li>
              ) : (
                <li className="breadcrumb-item">
                  <Link to={routeTo} className="text-blue-500 hover:underline">
                    {decodeURIComponent(path.replace(/-/g, " "))}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
