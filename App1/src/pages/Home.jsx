import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../posts.json";

export default function Home() {
  const [posts] = useState(
    data.posts.filter((post) => post.featured === true)
  );

  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          minHeight: "600px",
          background:
            "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1600') center/cover",
        }}
      >
        <div className="container">
          <span className="badge bg-primary rounded-pill px-4 py-2 mb-4">
            WELCOME TO ADASA
          </span>

          <h1 className="display-1 fw-bold mb-4">
            Capture The Beauty
            <br />
            Of Every Moment.
          </h1>

          <p
            className="fs-5 text-light mx-auto mb-5"
            style={{ maxWidth: "650px" }}
          >
            Discover the art of photography through stories,
            inspiration, and creative techniques.
          </p>

          <Link
            to="/blog"
            className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill shadow"
          >
            Explore Our Blog →
          </Link>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase">
              Our Latest Stories
            </span>

            <h2 className="display-5 fw-bold mt-3 mb-3">
              Featured Articles
            </h2>

            <p
              className="text-secondary fs-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Explore our handpicked photography articles and discover new
              perspectives.
            </p>
          </div>

          <div className="row g-4">
            {posts.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.id}>
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
                        Featured
                      </span>
                    </div>

                    <div className="card-body p-4">
                      <h5 className="card-title fw-bold mb-3">
                        {post.title}
                      </h5>

                      <p className="card-text text-secondary mb-4">
                        {post.excerpt}
                      </p>

                      <span className="text-primary fw-bold">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              to="/blog"
              className="btn btn-dark btn-lg rounded-pill px-5"
            >
              Discover All Articles →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}