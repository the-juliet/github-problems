import MainContent from "./components/MainContent";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>PR Test - Sunday Comming soon! </h1>
        <p>버그 수정 </p>
      </header>
      <MainContent />
    </>
  );
}

export default App;
