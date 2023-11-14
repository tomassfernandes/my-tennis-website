import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/gym-animation.json";
import GymBenefitsItem from "./GymBenefitsItem";
import ScrollTrigger from "react-scroll-trigger";

export default function GymItem() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(".gym-lottie");
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const visibility = (windowHeight - rect.top) / windowHeight;

      if (visibility >= 0.6 && !isAnimationVisible) {
        setIsAnimationVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="gym-item-div">
      <p className="club-section-first-p">Equipment and Personal Training</p>
      <h2 className="heading-secondary club-section-h2">Gym</h2>
      <div className="gym-item-grid">
        <div className="gym-item-img-grid">
          <img className="gym-img" src="/img/gym1.webp" alt="Gym space" />
          <img className="gym-img" src="/img/gym4.webp" alt="Gym space" />
          <img className="gym-img" src="/img/gym3.webp" alt="Gym space" />
          <img className="gym-img" src="/img/gym2.webp" alt="Gym space" />
        </div>
        <div className="gym-item-text-div">
          <ScrollTrigger className="gym-lottie">
            {isAnimationVisible && (
              <Lottie
                loop={false}
                animationData={animationData}
                isStopped={!isAnimationVisible}
              />
            )}
          </ScrollTrigger>
          <h3>The Power of Gym Work</h3>
          <div className="gym-item-text-grid">
            <GymBenefitsItem />
          </div>
        </div>
      </div>
    </div>
  );
}
