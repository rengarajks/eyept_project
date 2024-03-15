import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Funwindow from "./pages/Funwindow";
import Onlinetest from './pages/Onlinetest'
import FunwindowCalib from "./pages/FunwindowCalib";
import Funwindowfinalpage from "./pages/Funwindowfinalpage";
import Systemreq from "./pages/Systemreq";
import Instruction from "./pages/Instruction";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/funwindow"  element={<Funwindow/>} />
      <Route path="/onlinetest"  element={<Onlinetest/>} />
      <Route path="/funwindowcalib"  element={<FunwindowCalib/>} />
      <Route path="/funwindowfinal"  element={<Funwindowfinalpage/>} />
      <Route path="/systemreq"  element={<Systemreq/>} />
      <Route path="/instruction"  element={<Instruction/>} />
      
    </Routes>
  );
}
export default App;
