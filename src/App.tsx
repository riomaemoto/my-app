import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layouts/footer";
import { Header } from "./components/layouts/header";
import { Home } from "./pages/home";
import { Pictures } from "./pages/pictures/pictures";
import { Menu } from "./pages/menu/menu";

const links = [
  { path: "/", component: <Home /> },
  { path: "/menu", component: <Menu /> },
  { path: "/pictures", component: <Pictures /> },
];

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        {links.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.component} />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
