/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { hedo,  kiss, womanBright, womanCloseUp } from "../../constants";
import { Box, Image } from "@chakra-ui/react";
export const Slider: FC = () => {
  const ImgSize = css`
    img {
      object-fit: cover;
      height: 100vh;
      margin-top: 0px;
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
        <Image src={hedo} alt="hedo" />
        <Image src={kiss} alt="kiss" />
        <Image src={womanBright} alt="womanBright" />
        <Image src={womanCloseUp} alt="womanCloseUp" />
      </Carousel>
    </Box>
  );
};
