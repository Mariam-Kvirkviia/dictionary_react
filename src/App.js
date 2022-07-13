import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="row justify-content-center">
      <div className="App text-center col-sm-8 px-3 ">
        <h1 className="my-4">Dictionary</h1>
        <Dictionary defaultWord="destiny" />
      </div>
      <p className="text-center footer">
        This project was coded by{" "}
        <a
          href="https://github.com/Mashawabupr"
          rel="noreferrer"
          target="_blank"
        >
          Mariam Kvirkviia
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Mashawabupr/dictionary_react"
          rel="noreferrer"
          target="_blank"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://rococo-starlight-ea54d7.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
