import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "450px",
          background:
            "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1600') center/cover",
        }}
      >
        <div className="container text-center py-5">
          <span className="badge bg-primary mb-3 px-3 py-2">
            ABOUT ADASA
          </span>

          <h1 className="display-2 fw-bold mb-4">
            We Capture Stories,
            <br />
            Not Just Moments.
          </h1>

          <p className="fs-5 mx-auto" style={{ maxWidth: "650px" }}>
            Welcome to Adasa, a place where creativity meets photography
            and every picture tells a unique story.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container py-5 my-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000"
              alt="Photography camera"
              className="img-fluid rounded-4 shadow"
            />
          </div>

          <div className="col-lg-6">
            <span className="text-primary fw-bold">WHO WE ARE</span>

            <h2 className="display-5 fw-bold mt-3 mb-4">
              Discover The Art Of Photography
            </h2>

            <p className="text-secondary lh-lg">
              Adasa is a creative photography blog dedicated to exploring
              the beauty of photography. We share knowledge, inspiration,
              and practical tips to help photographers improve their skills.
            </p>

            <p className="text-secondary lh-lg">
              From beginner guides to advanced techniques, our goal is to
              make photography easier, more enjoyable, and accessible to
              everyone.
            </p>

            <Link to="/blog" className="btn btn-primary px-4 py-3 mt-3">
              Explore Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-light py-5">
        <div className="container text-center py-4">
          <span className="text-primary fw-bold">OUR MISSION</span>

          <h2 className="display-5 fw-bold mt-3 mb-4">
            Inspiring Creativity Through Every Frame
          </h2>

          <p className="text-secondary mx-auto lh-lg"
            style={{ maxWidth: "750px" }}
          >
            We believe photography is more than taking pictures.
            It is about expressing emotions, telling stories, and
            seeing the world from a different perspective.
            We are here to help you bring your vision to life.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-5 my-4">
        <div className="text-center mb-5">
          <span className="text-primary fw-bold">WHY ADASA?</span>

          <h2 className="display-5 fw-bold mt-3">
            What Makes Us Different?
          </h2>

          <p className="text-secondary">
            Everything you need to grow your photography journey.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <div className="display-3 mb-3">📸</div>

              <h4 className="fw-bold mb-3">Expert Knowledge</h4>

              <p className="text-secondary">
                Learn photography techniques and improve your skills
                with helpful guides and articles.
              </p>
            </div>
          </div><div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <div className="display-3 mb-3">💡</div>

              <h4 className="fw-bold mb-3">Creative Inspiration</h4>

              <p className="text-secondary">
                Discover new ideas, creative perspectives, and
                inspiration for your next photography project.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <div className="display-3 mb-3">🌍</div>

              <h4 className="fw-bold mb-3">For Everyone</h4>

              <p className="text-secondary">
                Whether you are a beginner or professional,
                there is always something new to learn.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="container pb-5">
        <div
          className="rounded-4 text-center text-white p-5"
          style={{ background: "#212529" }}
        >
          <h2 className="display-5 fw-bold mb-3">
            Ready To Explore?
          </h2>

          <p className="text-white-50 fs-5 mb-4">
            Start your photography journey with Adasa today.
          </p>

          <Link to="/blog" className="btn btn-primary btn-lg px-5">
            Read Our Articles
          </Link>
        </div>
      </section>
    </>
  );
}
