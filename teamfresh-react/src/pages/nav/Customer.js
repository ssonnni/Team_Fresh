import { Routes, Route } from 'react-router-dom';

import Notice from './customer/Notice';
import TimfNews from './customer/TimfNews';
import Inquiry from './customer/Inquiry';
import Fag from './customer/Fag';

const Customer = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Notice />} />
        <Route path='/timfNews' element={<TimfNews />} />
        <Route path='/inquiry' element={<Inquiry />} />
        <Route path='/fag' element={<Fag />} />
      </Routes>
    </>
  );
};

export default Customer;
