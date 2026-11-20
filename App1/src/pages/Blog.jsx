import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../posts.json";

export default function Blog() {
  const [posts] = useState(data.posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category)),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const postsPerPage = 6;
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = filteredPosts.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container py-4">
          <span className="badge bg-primary rounded-pill px-4 py-2 mb-3">
            ADASA JOURNAL
          </span>

          <h1 className="display-3 fw-bold mb-3">
            Explore Our Blog
          </h1>

          <p
            className="fs-5 text-white-50 mx-auto mb-0"
            style={{ maxWidth: "650px" }}
          >
            Discover inspiring photography stories,
            creative ideas, and techniques to capture
            beautiful moments.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="container my-5">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      {/* Categories */}
      <div className="container mb-4">
        <div className="d-flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`btn ${
                selectedCategory === category
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">
          <div>
            <span className="text-primary fw-bold text-uppercase">
              Photography & Inspiration
            </span>

            <h2 className="fw-bold mt-2 mb-0">
              All Articles
            </h2>
          </div>

          <span className="badge bg-primary-subtle text-primary fs-6 rounded-pill px-4 py-2">
            {filteredPosts.length} Articles
          </span>
        </div>

        <div className="row g-4">
          {currentPosts.map((post) => (
            <div
              className="col-md-6 col-lg-4"
              key={post.id}
            >
              <Link
                to={`/blog/${post.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="card-img-top"
                      style={{
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />

                    <span className="badge bg-primary position-absolute top-0 start-0 m-3 rounded-pill px-3 py-2">
                      {post.category}
                    </span>
                  </div>

                  <div className="card-body p-4 d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">
                      {post.title}
                    </h5>

                    <p className="card-text text-secondary mb-4">
                      {post.excerpt}
                    </p>

                    <span className="text-primary fw-bold mt-auto">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center align-items-center gap-2 mt-5 flex-wrap">
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={`btn ${
                  currentPage === pageNumber
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
              >
                {pageNumber}
              </button>
            ))}

            <button
              className="btn btn-outline-primary"
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {/* Back Home */}
        <div className="text-center mt-5">
          <Link
            to="/"
            className="btn btn-dark btn-lg rounded-pill px-5"
          >
            Back To Home
          </Link>
        </div>
      </section>
    </div>
  );
}