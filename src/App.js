import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{ position: "relative", top: "0", bottom: "0", height: "100vh" }}
      >
        <iframe
          src="https://ramlogics.com/Hertz/trade.html"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "scroll",
          }}
          title="Iframe Example"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
