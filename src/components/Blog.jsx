import React, { useEffect, useState } from 'react'

const Blog = () => {
    const [blogData, setblogData] = useState(null);

  useEffect(() => {
    fetch("/interview.json")
      .then((response) => response.json())
      .then((data) => setblogData(data))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);
  console.log(blogData)
  return (
    <>
      <h1 className='md:text-3xl font-semibold my-4 ml-4'>Some Blogs</h1>
      <div className="grid md:grid-cols-2 space-y-2 space-x-2  ml-4">
        {blogData && blogData.map(blog => <div key={blog._id} className="shadow-md p-4 rounded-md">
          <p className='my-3 font-semibold'> {blog.ques}</p>
          <p>{blog.ans}</p>
        </div>)

      }</div>
    </>
  );
}

export default Blog