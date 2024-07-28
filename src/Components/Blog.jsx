import React from "react";

import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="mt-8">
      <h1 className="text-5xl font-bold">Blog</h1>
      <p className="flex flex-row-reverse">
        <Link to={"/blog"} className="  text-[#a66d6a] text-lg  font-semibold ">
          View More
        </Link>
      </p>
      <BlogCard />
    </div>
  );
};

export default Blog;
