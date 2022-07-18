import ToggleThemes from "./components/ToggleThemes/ToggleThemes";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./screens/Home/Home";

function App() {
  const darkmode = JSON.parse(localStorage.getItem('dark-mode-enabled')) ? true : false;
  if(darkmode){
    localStorage.setItem('dark-mode-enabled', true)
  }
  return (
    <div className="App">
      <ToggleThemes />
      <DefaultLayout >
        <Home />
      </DefaultLayout>
    </div>
  );
}

export default App;
