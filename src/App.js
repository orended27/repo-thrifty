import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from './pages/signUp';
import Login from './pages/login';
import ShoePage from './pages/shoePage';
import Card from './pages/cart/Card'
import {ShopContextProvider} from "../src/context/shop-context"

function App() {
  return (
    <ShopContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NoPage />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="ShoePage" element={<ShoePage />} />
          <Route path='Card' element={<Card/>}/>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
