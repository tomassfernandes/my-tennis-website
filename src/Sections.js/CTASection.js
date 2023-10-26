export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="background-color-div">
        <div className="cta-div">
          <h1 className="heading-primary">
            Your <span>tennis adventure</span> starts here!
          </h1>
          <p>
            Maximize your use of our facilities to elevate your tennis skills to
            the next level.
          </p>

          <button className="cta-button">
            Our Classes
            <img
              className="arrow-svg"
              src="/svg/arrow-right.png"
              alt="arrow right"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
