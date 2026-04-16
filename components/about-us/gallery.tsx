"use client";
import * as React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useContent } from "@/contexts/ContentContext";

export default function Gallery() {
  const { content } = useContent();
  const images = content.gallery.images;

  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 4,
        autoScroll: {
          speed: 2,
        },
        breakpoints: {
          640: { perPage: 2 },
          1024: { perPage: 4 },
        },
      }}
      extensions={{ AutoScroll }}
    >
      {images.map((src, index) => (
        <SplideSlide key={index} style={{ margin: "1rem" }}>
          <img
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={350}
            height={500}
            style={{ width: 350, height: 500, objectFit: "cover" }}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
