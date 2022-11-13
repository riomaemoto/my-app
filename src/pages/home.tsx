import { Slider } from "../components/home/slider";
import { FC } from "react";
import { Contact } from "../components/home/contact";
import { MainTextMessage } from "../components/home/main_text_message";
import { Works } from "../components/home/works";
import { Menu } from "./menu/menu";

export const Home: FC = () => {
  return (
    <>
      <Slider />
      <MainTextMessage />
      <Menu />
      <Works />
      <Contact />
    </>
  );
};
