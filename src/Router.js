import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 지수's 컴포넌트
import LeeJiSooLogin from './pages/LeeJiSoo/Login/LeeJiSooLogin';
import LeeJiSooMain from './pages/LeeJiSoo/Main/LeeJiSooMain';
// 수광's 컴포넌트
import LeeSooLogin from './pages/LeeSoo/Login/LeeSooLogin';
import LeeSooMain from './pages/LeeSoo/Main/LeeSooMain';

// 덕우's 컴포넌트
import DeokWooLogin from './pages/DeokWoo/Login/DeokWooLogin';
import DeokWooMain from './pages/DeokWoo/Main/DeokWooMain';

// 대영's 컴포넌트
import DaeYoungLogin from './pages/DaeYoung/Login/DaeYoungLogin';
import DaeYoungMain from './pages/DaeYoung/Main/DaeYoungMain';

// 현정's 컴포넌트
import HyunJungLogin from './pages/HyunJung/Login/HyunJungLogin';
import HyunJungMain from './pages/HyunJung/Main/HyunJungMain';

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

        <Route path="/deokwoologin" element={<DeokWooLogin />} />
        <Route path="/deokwoomain" element={<DeokWooMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
