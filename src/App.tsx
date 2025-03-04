import "./App.sass";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Aside from "./Components/Aside/Aside";
import MainBody from "./Components/MainBody/MainBody";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Aside />
        <MainBody />
      </Main>
    </>
  );
}

export default App;

