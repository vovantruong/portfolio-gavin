import ToggleThemes from "./components/ToggleThemes/ToggleThemes";
import DefaultLayout from "./layout/DefaultLayout";
import AboutMe from "./screens/AboutMe/AboutMe";
import Contact from "./screens/Contact/Contact";
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import Skills from "./screens/Skills/Skills";

function App() {
  const darkmode = JSON.parse(localStorage.getItem('dark-mode-enabled')) ? true : false;
  if(darkmode){
    localStorage.setItem('dark-mode-enabled', true)
  }
  return (
    <div className="App">
      <ToggleThemes />
      <DefaultLayout>
        <Projects id="project"/>
        <Skills id="skills"/>
        <Home id="home"/>
        <AboutMe id="about"/>
        <Contact id="contact"/>
      </DefaultLayout>
    </div>
  );
}

export default App;
