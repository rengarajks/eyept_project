import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Funwindow from "./pages/Funwindow";
import Onlinetest from './pages/Onlinetest'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/funwindow"  element={<Funwindow/>} />
      <Route path="/onlinetest"  element={<Onlinetest/>} />
    </Routes>
  );
}
export default App;
