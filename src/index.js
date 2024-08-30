import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Tab from './Tab';
import { TabProvider } from './TabProvider';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <TabProvider>
      <Navbar />
      <Tab />
    </TabProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();