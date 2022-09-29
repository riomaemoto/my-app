/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { rabby, wedding, yuki } from "../../constants";
import { Box, Image } from "@chakra-ui/react";
export const Slider: FC = () => {
  const ImgSize = css`
    img {
      max-height: 700px;
      object-fit: contain;
    }
  `;
  return (
    <Box mt={"70px"}>
      <Carousel
        css={ImgSize}
        autoPlay
        infiniteLoop
        showThumbs={false}
        stopOnHover={false}
      >
        <Image mt={"5px"} src={rabby} alt="rabby" />
        <Image mt={"5px"} src={yuki} alt="yuki" />
        <Image mt={"5px"} src={wedding} alt="wedding" />
      </Carousel>
    </Box>
  );
};
