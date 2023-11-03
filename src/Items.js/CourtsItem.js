import { Swiper, SwiperSlide } from "swiper/react";

export default function CourtsItem() {
  const data = [
    { id: 1, name: "Tennis Court 1", img: "/img/tennis-court-1.webp" },
    { id: 2, name: "Tennis Court 2", img: "/img/tennis-court-2.webp" },
    { id: 3, name: "Tennis Court 3", img: "/img/tennis-court-3.webp" },
    { id: 4, name: "Tennis Court 4", img: "/img/tennis-court-4.webp" },
  ];

  return (
    <div className="club-section-courts-div">
      <p className="club-section-first-p">Where you play</p>
      <h2 className="heading-secondary club-section-h2">Courts</h2>

      <Swiper
        className="swiper-div"
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item) => (
          <SwiperSlide>
            <img className="swiper-img" src={item.img} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
