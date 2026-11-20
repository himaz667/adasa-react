import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../posts.json";

export default function PostDetails() {
  const { postId } = useParams();

  const [posts] = useState(data.posts);

  const post = posts.find(
    (item) => item.id === Number(postId)
  );

  if (!post) {
    return (
      <div className="container text-center py-5">
        <div className="bg-light rounded-4 p-5 shadow-sm">
          <h2 className="fw-bold mb-3">
            Post Not Found
          </h2>

          <p className="text-secondary">
            Sorry, the article you're looking for doesn't exist.
          </p>

          <Link
            to="/blog"
            className="btn btn-primary rounded-pill px-4 mt-3"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100">
      {/* Hero Section */}
      <section className="container py-5">
        <div className="position-relative rounded-4 overflow-hidden shadow">
          <img
            src={post.image}
            alt={post.title}
            className="w-100"
            style={{
              height: "450px",
              objectFit: "cover",
            }}
          />

          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-4 p-md-5"
            style={{
              background:
                "linear-gradient(transparent, rgba(0,0,0,.8))",
            }}
          >
            <div>
              <span className="badge bg-primary rounded-pill px-3 py-2 mb-3">
                {post.category}
              </span>

              <h1 className="text-white display-5 fw-bold">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-md-5">

                {/* Author */}
                <div className="d-flex flex-wrap align-items-center gap-3 border-bottom pb-4 mb-4">
                  <div
                    className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  >
                    {post.author.name.charAt(0)}
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      {post.author.name}
                    </h6>

                    <small className="text-secondary">
                      Article Author
                    </small>
                  </div>

                  <div className="ms-auto text-secondary small">
                    <div>
                      {post.date}
                    </div>

                    <div className="mt-2">
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Introduction */}
                <div className="bg-primary-subtle rounded-4 p-4 mb-4">
                  <h5 className="fw-bold text-primary mb-2">
                    Introduction
                  </h5>

                  <p className="text-secondary fs-5 mb-0">
                    {post.excerpt}
                  </p>
                </div>

                {/* Article */}
                <div className="article-content">
                  <h3 className="fw-bold mb-4">
                    Article Details
                  </h3>

                  <p className="fs-5 text-secondary lh-lg">
                    {post.content}
                  </p>
                </div>

                {/* Back Button */}
                <div className="border-top pt-4 mt-5">
                  <Link
                    to="/blog"
                    className="btn btn-dark rounded-pill px-4 py-2"
                  >
                    ← Back to Blog
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}