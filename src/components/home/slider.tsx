/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { forest,  hedo,  kiss,  wedding, womanCloseUp } from "../../constants";
import { Box, Image } from "@chakra-ui/react";
export const Slider: FC = () => {
  const ImgSize = css`
    img {
      object-fit: cover;
      height: 100vh;
      margin-top: 0;
    }
    @media (max-width: 460px) {
      margin-bottom: 0;
      img {
        object-fit: cover;
      }
    }
  `;
  return (
    <Box>
      <Carousel
        css={ImgSize}
        autoPlay
        infiniteLoop
        showThumbs={false}
        stopOnHover={false}
      >
        <Image mt={"5px"} src={forest} alt="forest" />
        <Image mt={"5px"} src={womanCloseUp} alt="womanCloseUp" />
        <Image mt={"5px"} src={kiss} alt="kiss" />
        <Image mt={"5px"} src={hedo} alt="hedo" />
      </Carousel>
    </Box>
  );
};
