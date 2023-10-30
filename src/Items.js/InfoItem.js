import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function InfoItem() {
  const infoItem = [
    { num: 8, text: "Courts" },
    { num: 12, text: "Coaches" },
    { num: 100, text: "Members" },
    { num: 2, text: "Gyms" },
  ];

  const [counterOn, setCounterOn] = useState(false);

  return infoItem.map((item, index) => (
    <ScrollTrigger onEnter={() => setCounterOn(true)} key={index}>
      <div className="info-item-div">
        <p className="info-item-num">
          {counterOn && (
            <CountUp start={0} end={item.num} duration={2.5} delay={0.2} />
          )}
          {item.num >= 100 && "+"}
        </p>
        <p className="info-item-text">{item.text}</p>
      </div>
    </ScrollTrigger>
  ));
}
