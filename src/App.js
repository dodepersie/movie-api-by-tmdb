import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./utilities/nav";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

const App = () => {
  const darkMode = useDarkMode(false);

  AOS.init({
    once: "true",
    easing: "ease-in-out-back",
    duration: "1000",
  });

  const toggleDarkMode = () => {
    darkMode.toggle();
  };

  return (
    <>
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Router>
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Router>
      </NextUIProvider>
    </>
  );
};

export default App;
