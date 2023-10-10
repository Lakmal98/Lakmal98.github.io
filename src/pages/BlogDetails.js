import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Disqus from "disqus-react";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;

  useEffect(() => {
    import(`../blogs/${blogFile}.md`)
      .then((res) => res.default)
      .then((res) => {
        fetch(res)
          .then((result) => result.text())
          .then((result) => setContent(result));
      });
  }, [content, blogFile]);

  const disqusShortname = "Lakmal"; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: "https://jthemes.net/themes/react/Lakmal", //Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  const goBack = () => {
    props.history.goBack();
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
      <div className="btn-background">
        <span className="btn btn-lg btn-rounded-circle" onClick={goBack}>
          <i
            className="icon-arrow-left"
            style={theme === "dark" ? { color: "#f2f2f2" } : null}
          >
            {" "}
            Go Back{" "}
          </i>
        </span>
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
      <main>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
              <Markdown>{content}</Markdown>
              <div className="mi-blog-details-comments mt-30">
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default BlogDetails;
