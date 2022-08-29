import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route , Routes , BrowserRouter} from 'react-router-dom';
import NewsLoader from './newsLoader';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
