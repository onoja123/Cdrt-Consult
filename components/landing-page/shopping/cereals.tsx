import * as React from "react";
import Box from "@mui/joy/Box";
import Image from "next/image";
import Image1 from "@/public/images/image1.png";
import Image2 from "@/public/images/image2.png";
import Image3 from "@/public/images/image5.png";
import Image4 from "@/public/images/image5.png";

const data = [
  {
    src: Image1,
  },
  {
    src: Image2,
  },
  {
    src: Image3,
  },
  {
    src: Image4,
  },
  {
    src: Image4,
  },
  {
    src: Image4,
  },
  {
    src: Image4,
  },
];

export default function Cereals() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        py: 1,
        overflow: "auto",
        width: "100%",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            minWidth: 350,
            height: 500,
            overflow: "hidden",
          }}
        >
          <Image
            src={item.src}
            alt={`Image ${index + 1}`}
            width={350}
            height={500}
            className="w-full object-cover"
          />
        </div>
      ))}
    </Box>
  );
}
