import React, { useState, useEffect } from "react";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";

const allBlogs = [
  {
    id: 1,
    title: "5 Best App Development Tool for Your Project",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "09 February, 2020",
    author: "Lakmal",
    category: "Reviews",
  },
  {
    id: 2,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Lakmal",
    category: "Tutorial",
  },
  {
    id: 3,
    title: "3 Things To Know About Startup Business",
    image: "images/blog/3.svg",
    filesource: "../../blogs/things-to-know-about-startup-business.md",
    date: "06 February, 2020",
    author: "Lakmal",
    category: "Business",
  },
  {
    id: 4,
    title: "5 Best App Development Tool for Your Project",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "09 February, 2020",
    author: "Lakmal",
    category: "Reviews",
  },
  {
    id: 5,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Lakmal",
    category: "Tutorial",
  },
  {
    id: 6,
    title: "3 Things To Know About Startup Business",
    image: "images/blog/3.svg",
    filesource: "../../blogs/things-to-know-about-startup-business.md",
    date: "06 February, 2020",
    author: "Lakmal",
    category: "Business",
  },
  {
    id: 7,
    title: "5 Best App Development Tool for Your Project",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "09 February, 2020",
    author: "Lakmal",
    category: "Reviews",
  },
  {
    id: 8,
    title: "Common Misconceptions About Payment",
    image: "images/blog/2.svg",
    filesource: "../../blogs/common-misconceptions-about-payment.md",
    date: "07 February, 2020",
    author: "Lakmal",
    category: "Tutorial",
  },
  {
    id: 9,
    title: "3 Things To Know About Startup Business",
    image: "images/blog/3.svg",
    filesource: "../../blogs/things-to-know-about-startup-business.md",
    date: "06 February, 2020",
    author: "Lakmal",
    category: "Business",
  },
  {
    id: 10,
    title: "5 Best App Development Tool for Your Project",
    image: "images/blog/1.svg",
    filesource: "../../blogs/best-app-development-tool.md",
    date: "09 February, 2020",
    author: "Lakmal",
    category: "Reviews",
  },
];

function Bloglist() {
  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    setPosts(allBlogs);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  // change theme color based on dark/light mode
  if (theme === "dark") {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <>
      <main>
        <div className="btn-background">
          <a href="/" className="btn btn-lg btn-rounded-circle">
            <i
              className="icon-arrow-left"
              style={theme === "dark" ? { color: "#f2f2f2" } : null}
            >
              {" "}
              Home{" "}
            </i>
          </a>
        </div>
        {/* button to switch between dark and light themes */}
        <div
          className="btn"
          onClick={toggleTheme}
          style={{
            border: "none",
            right: "1rem",
            top: "1rem",
            position: "absolute",
          }}
          title={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <i className="fas fa-sun" style={{ color: "white" }}></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </div>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              {currentPosts.map((blogItem) => (
                <div className="col-md-6" key={blogItem.id}>
                  <Blog blogData={blogItem} />
                </div>
              ))}
            </div>
            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default Bloglist;
