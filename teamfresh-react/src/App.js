import {Routes, Route } from "react-router-dom";


/* ----------------------- head --------------------- */
import Meta from "./components/Meta";
import GlobalStyle from "./assets/styles/GlobalStyles";
/* ----------------------- index --------------------- */
import Index from "./pages/Index";
/* ----------------------- nav --------------------- */
import Business from "./pages/nav/Business";
import Service from "./pages/nav/Service";
import Recruit from "./pages/nav/Recruit";
import Customer from "./pages/nav/Customer";
import Delivery from "./pages/nav/Delivery";



function App() {
  return (
    <>


    <Meta/>
    <GlobalStyle/>
    <Routes>
      {/* index */}
      <Route path="/" element={<Index/>} />
      {/* nav */}
      <Route path="/business" element={<Business/>} />
      <Route path="/service/*" element={<Service/>} />
      <Route path="/recruit" element={<Recruit/>} />
      <Route path="/customer/*" element={<Customer/>} />
      <Route path="/delivery" element={<Delivery/>} />
    </Routes>

    </>
  );
}

export default App;
