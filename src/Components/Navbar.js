import React from "react";
import { NavLink } from "react-router-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";
function Navbar() {
  return (
    <header className="bg-red-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800
                text-4xl font-bold cursive tracking-widest"
          >
            Gagandeep Singh
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/projects"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialMediaIconsReact
            icon="twitter"
            url="https://twitter.com/gagan_28_"
            round={true}
            size={40}
          />
          <SocialMediaIconsReact
            icon="github"
            url="https://github.com/gagan-28deep"
            round={true}
            size={40}
          />
          <SocialMediaIconsReact
            icon="linkedin"
            url="https://www.linkedin.com/in/gagandeepsingh-28/"
            round={true}
            size={40}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
