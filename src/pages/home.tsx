import { Slider } from "../components/home/slider";
import { FC } from "react";
import { SplitWithImage } from "../components/home/split_with_image";
import { Contact } from "../components/home/contact";
import { Plan } from "./plan/plan";

export const Home: FC = () => {
  return (
    <>
      <Slider />
      <SplitWithImage />
      <Plan />
      <Contact />
    </>
  );
};
