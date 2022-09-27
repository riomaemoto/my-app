/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { rabby, wedding, yuki } from "../../constants";
export const Slider: FC = () => {
  const ImgSize = css`
    img {
      max-height: 700px;
      object-fit: contain;
    }
  `;
  return (
    <Carousel
      css={ImgSize}
      autoPlay
      infiniteLoop
      showThumbs={false}
      stopOnHover={false}
    >
      <img src={rabby} alt="rabby" />
      <img src={yuki} alt="yuki" />
      <img src={wedding} alt="wedding" />
    </Carousel>
  );
};
