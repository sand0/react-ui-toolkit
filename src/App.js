import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Demo from './pages/Demo';
import Home from './pages/Home';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
    {   
        path: '/', 
        element: <RootLayout />,
        children: [
            {index: true, element: <Home />},
            {path: 'demo', element: <Demo />}
        ]
    },
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
