import React from "react";
import BlogList from "../../components/BlogList/BlogList";
import { articles } from "../../lib/data";

const Blogs = () => {
  return (
    <div className="text-center pt-24 text-gray-600">
      <h5 className="uppercase tracking-[.15rem]">welcome to our blog!</h5>
      <p className="italic text-base md:text-md leading-relaxed px-4 sm:px-8 lg:px-16 m-2">
        Here we share insights, trends, and stories from our journey as a leader in the textile industry. <br/>
        Whether you &apos;re looking for inspiration, tips, or updates on our latest innovations, we&apos;re excited to have you join us. <br/>
        Let&apos;s explore the world of quality, craftmanship, and creativity together!
      </p>
      <hr className="inline-flex w-3/5 rounded" />
      <div className="flex justify-center p-6 text-black">      
        <BlogList articles={articles} />
      </div>
    </div>
  );
};

export default Blogs;
