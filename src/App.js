// import './App.css'; 
// import NavBar from './components/NavBar/index';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import Home from './pages/Home'
import Page_1 from './pages/Page_1'
import NoPage from './pages/NoPage'


function App (){
return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signUp" element={<Page_1 />}/>
          <Route path="*" element={<NoPage />} />
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
)
  // return (<NavBar/>
  // <p> blalalalalala
  // </p>
  
  // )
}

export default App;
