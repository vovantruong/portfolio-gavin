import ToggleThemes from "./components/ToggleThemes";
import DefaultLayout from "./layout";

function App() {
  const darkmode = JSON.parse(localStorage.getItem('dark-mode-enabled')) ? true : false;
  if(darkmode){
    localStorage.setItem('dark-mode-enabled', true)
  }
  return (
    <div className="App">
      <ToggleThemes />
      <DefaultLayout />
      <div>

      </div>
    </div>
  );
}

export default App;
