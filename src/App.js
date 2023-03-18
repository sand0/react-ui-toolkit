import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import Demo from './pages/Demo';
import CheckboxExample from './components/examples/CheckboxExample'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'demo', element: <Demo />, children: [
                {path: 'checkbox', element: <CheckboxExample />}
            ] }
        ]
    },
])

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
