import { Swiper, SwiperSlide } from "swiper/react";

import KnowledgeCard from "../../components/knowledge-card/knowledge-card";
import Title from "../../components/title/title";

import "swiper/css";
import "swiper/css/pagination";
import "./knowledge_hub.css";
const Knowledge = () => {
  const data = [
    {
      imgSrc: "tropical-relaxation-travel-water-beach.png",
      description:
        "FIROZ announced the opening of a new branch in SHARM EL-SHEIKH.",
      status: "dark",
    },
    {
      imgSrc: "tropical-relaxation-travel-water-beach.png",
      description:
        "FIROZ announced the opening of a new branch in SHARM EL-SHEIKH.",
      status: "dark",
    },
    {
      imgSrc: "tropical-relaxation-travel-water-beach.png",
      description:
        "FIROZ announced the opening of a new branch in SHARM EL-SHEIKH.",
      status: "light",
    },
    {
      imgSrc: "tropical-relaxation-travel-water-beach.png",
      description:
        "FIROZ announced the opening of a new branch in SHARM EL-SHEIKH.",
      status: "light",
    },
    {
      imgSrc: "tropical-relaxation-travel-water-beach.png",
      description:
        "FIROZ announced the opening of a new branch in SHARM EL-SHEIKH.",
      status: "dark",
    },
    {
      imgSrc: "tropical-relaxation-travel-water-beach.png",
      description:
        "FIROZ announced the opening of a new branch in SHARM EL-SHEIKH.",
      status: "dark",
    },
  ];

  return (
    <>
      <div className="knowledge">
        <div className="knowledge-background position-absolute"></div>
        <div className="knowledge-content">
          <Title title="Knowledge Hub" />
        </div>
      </div>
      <Swiper
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      grabCursor = {true}
      >
        {data.map((el, index) => (
          <SwiperSlide key={index}>
            <KnowledgeCard
              imgSrc={el.imgSrc}
              description={el.description}
              status={el.status}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper className="mt-5 pb-5"
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      grabCursor = {true}>
        {data.map((el, index) => (
          <SwiperSlide key={index}>
            <KnowledgeCard
              imgSrc={el.imgSrc}
              description={el.description}
              status={el.status}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Knowledge;
