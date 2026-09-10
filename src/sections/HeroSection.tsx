import { SITE_IMAGES } from "../assets/images";
import "./HeroSection.css";

function ExploreArrow() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 8l16 16M13 24h11V13" />
    </svg>
  );
}

export default function HeroSection() {
  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
        id="home"
        className="home-hero"
        aria-labelledby="home-hero-title"
      >
        <div className="home-hero__content-wrap">
          <div className="home-hero__content">
            <h1 id="home-hero-title" className="home-hero__title">
              Africa&apos;s First <span>AI-Smart Hospital.</span>
            </h1>

            <p className="home-hero__subtitle">
              We are not building a hospital. We are building a system. Five
              levels of care, from village to tertiary center, connected by
              AI-driven diagnostics, integrated digital records, and structured
              follow-up that ensures no patient is ever lost.
            </p>

            <button
              type="button"
              className="home-hero__explore"
              onClick={scrollToAbout}
            >
              <span className="home-hero__explore-icon">
                <ExploreArrow />
              </span>
              <span>Explore the Website</span>
            </button>
          </div>
        </div>

        <div className="home-hero__visual">
          <img
            src={SITE_IMAGES.p1520394}
            alt="J.P. Muia Health System leaders"
            className="home-hero__image"
            loading="eager"
          />

        </div>
      </section>
  );
}
