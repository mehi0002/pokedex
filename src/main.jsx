import { StrictMode } from 'react';
import { createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Details from './routes/Details.jsx';

const router = createBrowserRouter([
  { path: '/', 
    element: <App/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/:name', element: <Details/>}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
