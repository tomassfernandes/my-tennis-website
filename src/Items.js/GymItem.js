import Lottie from "lottie-react";
import animationData from "../assets/gym-animation.json";
import GymBenefitsItem from "./GymBenefitsItem";

export default function GymItem() {
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
          <Lottie className="gym-lottie" animationData={animationData} />
          <h3>The Power of Gym Work</h3>
          <div className="gym-item-text-grid">
            <GymBenefitsItem />
          </div>
        </div>
      </div>
    </div>
  );
}
