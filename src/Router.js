import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 지수's 컴포넌트
import LeeJiSooLogin from './pages/LeeJiSoo/Login/LeeJiSooLogin';
import LeeJiSooMain from './pages/LeeJiSoo/Main/LeeJiSooMain';

// 수광's 컴포넌트
import LeeSooLogin from './pages/LeeSoo/Login/LeeSooLogin';
import LeeSooMain from './pages/LeeSoo/Main/LeeSooMain';
// 덕우's 컴포넌트
import DeokWooLogin from './pages/Deokwoo/Login/DeokwooLogin';
import DeokWooMain from './pages/Deokwoo/Main/DeokwooMain';
// 대영's 컴포넌트
import DaeYoungLogin from './pages/Daeyoung/Login/DaeyoungLogin';
import DaeYoungMain from './pages/Daeyoung/Main/DaeyoungMain';
// 현정's 컴포넌트
import HyunJungLogin from './pages/Hyunjung/Login/HyunjungLogin';
import HyunJungMain from './pages/Hyunjung/Main/HyunjungMain';

const Router = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hyunjung-login" element={<HyunJungLogin />} />
        <Route path="/hyunjung-main" element={<HyunJungMain />} />

        <Route path="/daeyoung-login" element={<DaeYoungLogin />} />
        <Route path="/daeyoung-main" element={<DaeYoungMain />} />

        <Route path="/leejisoo-login" element={<LeeJiSooLogin />} />
        <Route path="/leejisoo-main" element={<LeeJiSooMain />} />

        <Route path="/leeSoo-login" element={<LeeSooLogin />} />
        <Route path="/leeSoo-main" element={<LeeSooMain />} />

        <Route path="/deokwoo-login" element={<DeokWooLogin />} />
        <Route path="/deokwoo-main" element={<DeokWooMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
