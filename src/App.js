// import './App.css'; 
// import NavBar from './components/NavBar/index';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import SignUp from "./pages/signUp";
import Login from "./pages/login";

function App (){
return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="login" element={<Login/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  // <div>
  //     <NavBar />
  //     <br></br>
  //     <br></br>
  //     <br></br>
  //     <br></br>

  //     <div>
  //       <article>
  //         <h1>What is Lorem Ipsum? </h1>
  //       </article>
  //     </div>
  //   </div>
);
  // return (<NavBar/>
  // <p> blalalalalala
  // </p>
  
  // )
}

export default App;
