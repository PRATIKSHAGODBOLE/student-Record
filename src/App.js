import React, { useState, useEffect } from 'react';
import CRUDApp from './component/CRUDApp';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="app ">
      <div className="container">
        {isLoading ? (
          <div className="text-center mt-9">
            <div className="spinner-border text-primary mt-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <CRUDApp />
        )}
      </div>
    </div>
  );
}

export default App;
