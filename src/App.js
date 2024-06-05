import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import BookShelf from './pages/BookShelf';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/bookshelf', element: <BookShelf /> }
    ]
  },

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
