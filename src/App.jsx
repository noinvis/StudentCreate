import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './pages/layout/Layout';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import CreateStudent from './pages/create-student/CreateStudent';
import UpdateStudent from './pages/update-student/UpdateStudent';

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <CreateStudent />,
        },
        {
          path: "/edit/:id",
          element: <UpdateStudent />,
        }
      ],
    },
    {
      path: "*",
      element: <NotFound/>
      
    }
  ]);
}

export default memo(App)