import { Slider } from "../components/home/slider";
import { FC } from "react";
import { SplitWithImage } from "../components/home/split_with_image";
import { ThreeInfo } from "../components/home/three_info";

export const Home: FC = () => {
  return (
    <>
      <Slider />
      <SplitWithImage />
      <ThreeInfo />
    </>
  );
};
