import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Funwindow from "./pages/Funwindow";
import Onlinetest from './pages/Onlinetest'
import FunwindowCalib from "./pages/FunwindowCalib";
import Funwindowfinalpage from "./pages/Funwindowfinalpage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/funwindow"  element={<Funwindow/>} />
      <Route path="/onlinetest"  element={<Onlinetest/>} />
      <Route path="/funwindowcalib"  element={<FunwindowCalib/>} />
      <Route path="/funwindowfinal"  element={<Funwindowfinalpage/>} />
      
    </Routes>
  );
}
export default App;
