import "./App.css";
import Main from "./components/Main/Main";
import Projet from "./components/projet/Projet";
import Experience from "./components/experience/Experience";
import Form from "../src/components/form/Form";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main ></Main>
      <Projet></Projet>
      <Experience></Experience>
      <Form></Form>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
