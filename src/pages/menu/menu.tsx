import { Box, Image, Link, Text} from "@chakra-ui/react";
import { useState } from "react";
import styled from "@emotion/styled";
import { kiss, beachHug, hedo } from "../../constants";

const ZImage = styled(Image)`
  &:hover{
    transform:scale(1.2);
    transition: 1.2s all;
    opacity: 100%;
     transform: rotateZ( 360deg );
}`;
const XImage = styled(Image)`
  &:hover{
    transform:scale(1.2);
    transition: 1s all;
    opacity: 100%;
     transform: rotateX( 360deg );
}`;
const YImage = styled(Image)`
  &:hover{
    transform:scale(1.2);
    transition: 1s all;
    opacity: 100%;
     transform: rotateY( 360deg );
}`;

export const Menu = () => {

  // const init = {
  //   first: false,
  //   second: false,
  //   third: false,
  // }

  // const [isHovering, setIsHovering] = useState(init);

  return (
    <>
      <Box position={"relative"} display={{base:"", md:"flex"}} justifyContent={"center"} flexWrap={"wrap"} py={{ base: 63, md: 63 }}>
        <ZImage
          mx={{base:"auto", md: 10 }}
          w={{base:200, md:250}}
          h={{base:200, md:250}}
          borderRadius={"50%"}
          mb={"60px"}
          src={hedo}
          alt="rabby"
          objectFit={"cover"}
          opacity={"80%"}
          // onMouseEnter={() => setIsHovering({
          //   ...isHovering,
          //   first: true,
          // })}
          // onMouseLeave={() => setIsHovering({
          //   ...isHovering,
          //   first: false,
          // })}
        />
        {/* {isHovering.first &&
        <Text
          fontSize={30}
          fontWeight={600}
          color={"black"}
          position={"absolute"}
          top={"37%"}
          left={"28%"}
          >Works</Text>} */}
        <XImage
          mx={{base:"auto", md: 10 }}
          w={{base:200, md:250}}
          h={{base:200, md:250}}
          borderRadius={"50%"}
          mb={"60px"}
          src={kiss}
          alt="rabby"
          objectFit={"cover"}
          opacity={"80%"}
          // onMouseEnter={() => setIsHovering({
          //   ...isHovering,
          //   first: true,
          // })}
          // onMouseLeave={() => setIsHovering({
          //   ...isHovering,
          //   first: false,
          // })}
        />
        <YImage
          mx={{base:"auto", md: 10 }}
          w={{base:200, md:250}}
          h={{base:200, md:250}}
          borderRadius={"50%"}
          mb={"60px"}
          src={beachHug}
          alt="rabby"
          objectFit={"cover"}
          opacity={"80%"}
          // onMouseEnter={() => setIsHovering({
          //   ...isHovering,
          //   first: true,
          // })}
          // onMouseLeave={() => setIsHovering({
          //   ...isHovering,
          //   first: false,
          // })}
        />
      </Box>
    </>
  );
};
