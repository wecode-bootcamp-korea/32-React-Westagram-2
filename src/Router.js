import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 지수's 컴포넌트
import LeeJiSooLogin from './pages/LeeJiSoo/Login/LeeJiSooLogin';
import LeeJiSooMain from './pages/LeeJiSoo/Main/LeeJiSooMain';
// 수광's 컴포넌트
import LeeSooLogin from './pages/LeeSoo/Login/LeeSooLogin';
import LeeSooMain from './pages/LeeSoo/Main/LeeSooMain';

// 덕우's 컴포넌트
import DeokwooLogin from './pages/Deokwoo/Login/DeokwooLogin';
import DeokwooMain from './pages/Deokwoo/Main/DeokwooMain';

// 대영's 컴포넌트
import DaeyoungLogin from './pages/Daeyoung/Login/DaeyoungLogin';
import DaeyoungMain from './pages/Daeyoung/Main/DaeyoungMain';

// 현정's 컴포넌트
import HyunjungLogin from './pages/Hyunjung/Login/HyunjungLogin';
import HyunjungMain from './pages/Hyunjung/Main/HyunjungMain';

const Router = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hyunjunglogin" element={<HyunjungLogin />} />
        <Route path="/hyunjungmain" element={<HyunjungMain />} />

        <Route path="/daeyounglogin" element={<DaeyoungLogin />} />
        <Route path="/daeyoungloginmain" element={<DaeyoungMain />} />

        <Route path="/leejisoologin" element={<LeeJiSooLogin />} />
        <Route path="/leejisoomain" element={<LeeJiSooMain />} />

        <Route path="/leeSoologin" element={<LeeSooLogin />} />
        <Route path="/leeSoomain" element={<LeeSooMain />} />

        <Route path="/deokwoologin" element={<DeokwooLogin />} />
        <Route path="/deokwoomain" element={<DeokwooMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
