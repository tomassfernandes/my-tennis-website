import React, { useState, useEffect } from "react";

import ClassesItem1 from "../Items/ClassesItem1";
import ClassesItem2 from "../Items/ClassesItem2";

export default function ClassesInfoSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".classes-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        // Check if the section is within 100 pixels of the top
        if (sectionTop < 300) {
          setIsScrolled(true);
          // Remove the event listener to prevent further changes
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`classes-section${isScrolled ? " scrolled" : ""}`}>
      <h2 className="heading-secondary">Classes</h2>
      <ClassesItem1
        title="Kids"
        age="3-12"
        description="Introduce your child to the world of tennis with our fun and engaging
          kids' classes. Designed for young players, these classes focus on
          developing fundamental skills, coordination, and a love for the game.
          Our experienced coaches use age-appropriate equipment and creative
          teaching methods to ensure that kids have a blast while learning the
          basics of tennis. It's the perfect way for children to build a strong
          foundation and make new friends on the court."
        img="/img/kids-lessons.webp"
      />
      <div className="seperator"></div>
      <ClassesItem2
        title="Junior"
        age="12-18"
        description="For aspiring young tennis enthusiasts, our junior classes provide a more structured and competitive environment. Tailored to various skill levels, these classes aim to refine technique, strategy, and sportsmanship. Our dedicated coaches work closely with juniors to enhance their skills, boost their confidence, and prepare them for local and national competitions, all while fostering a lifelong passion for tennis.."
        img="/img/junior-lessons.webp"
      />
      <div className="seperator"></div>
      <ClassesItem1
        title="Group Lessons"
        description="Our group classes are open to all ages and skill levels, making them an ideal choice for families and friends looking to enjoy tennis together. These classes promote social interaction and teamwork on the court while allowing participants to improve their game. Whether you're a beginner or an experienced player, our group classes offer a dynamic and supportive environment where you can work on your skills, get fit, and share the excitement of tennis with others."
        img="/img/group-lessons.webp"
      />
      <div className="seperator"></div>
      <ClassesItem2
        title="Adults"
        age="18+"
        description="It's never too late to start or reignite your tennis journey. Our adult classes cater to individuals of all experience levels, from newcomers to seasoned players. Whether you're looking to learn the basics, refine your technique, or simply stay active and enjoy the sport, our adult classes offer a welcoming atmosphere led by knowledgeable coaches. You can expect to enhance your tennis skills, stay in shape, and connect with fellow tennis enthusiasts while having a fantastic time on the court."
        img="/img/adult-lessons.webp"
      />
      <div className="seperator last-seperator"></div>
    </section>
  );
}
