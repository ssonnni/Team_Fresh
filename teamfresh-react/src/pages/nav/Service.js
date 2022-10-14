import { Routes, Route } from 'react-router-dom';
import Distribution from './service/Distribution';
import Franchise from './service/Franchise';
import Insurance from './service/Insurance';
import Logistics from "./service/Logistics";


const Service = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Logistics/>} />
        <Route path='/distribution' element={<Distribution />} />
        <Route path='/franchise' element={<Franchise />} />
        <Route path='/insurance' element={<Insurance />} />
      </Routes>
    </>
  );
};

export default Service;
