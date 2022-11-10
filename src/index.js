import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route , Routes , BrowserRouter} from 'react-router-dom';
import NewsLoader from './Components/newsLoader';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route path='/sports' element={<NewsLoader type={"sports"}/>} />
      <Route path='/business' element={<NewsLoader type={"business"}/>} />
      <Route path='/entertainment' element={<NewsLoader type={"entertainment"}/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
