import { StrictMode } from 'react';
import { createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Info from './routes/Info.jsx';
import Caught from './routes/Caught.jsx';

const router = createBrowserRouter([
  { path: '/', 
    element: <App/>,
    children: [
      { path: '/', element: <Home/> },
      { path: '/:pokeName', element: <Info/>},
      { path: '/caught', element: <Caught/>}
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
