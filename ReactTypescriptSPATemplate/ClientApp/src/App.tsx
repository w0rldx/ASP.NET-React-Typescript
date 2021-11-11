import { useState, useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css';

export default function App() {
  const [baseUrl, setBaseUrl] = useState('');

  useEffect(() => {
    let path = document.getElementsByTagName('base')[0].getAttribute('href');
    if (path !== null) {
      setBaseUrl(path);
    } else {
      setBaseUrl('');
    }
  }, []);

  return (
    <BrowserRouter basename={baseUrl}>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/fetch-data/' element={<FetchData />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
