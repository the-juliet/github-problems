import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>PR Test - Dev branch </h1>

        <p>Monday</p>
        <p>Dev smell~ Let's meet on Friday! </p>
      </header>
      <MainContent />
    </>
  );
}

export default App;
