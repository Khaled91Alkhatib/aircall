import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import GeneralContext from './contexts/GeneralContext.js';

import Header from './Header.jsx';
import AllCalls from './components/AllCalls.jsx';
import ArchivedCalls from './components/ArchivedCalls.jsx';
import Footer from './Footer.jsx';

const App = () => {
  const [calls, setCalls] = useState([]);

  // Retrieve all calls from API
  useEffect(() => {
    axios.get("https://cerulean-marlin-wig.cyclic.app/activities")
      .then((res) => {
        setCalls(prev => res.data);
      });
  }, []);
  // console.log("calls", calls);

  // The code below is used to automatically enable cross-domain requests when needed (Solves CORS error)
  (function () {
    var cors_api_host = 'charming-bat-singlet.cyclic.app';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
      var args = slice.call(arguments);
      var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
      if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
        targetOrigin[1] !== cors_api_host) {
        args[1] = cors_api_url + args[1];
      }
      return open.apply(this, args);
    };
  })();

  return (
    <div>
      <GeneralContext.Provider value={{ calls, setCalls }}>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<AllCalls />} />
            <Route path='/archivedcalls' element={<ArchivedCalls />} />
          </Routes>
          <Footer />
        </div>
      </GeneralContext.Provider>
    </div>
  );
};

export default App;