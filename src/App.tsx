import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layouts/footer";
import { Header } from "./components/layouts/header";
import { Plan } from "./pages/plan";
import { Home } from "./pages/home";

const links = [
  { path: "/", component: <Home /> },
  { path: "/pictures", component: <Plan /> },
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
