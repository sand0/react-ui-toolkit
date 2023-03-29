import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import Demo from './pages/Demo';
import GenericExample from './pages/GenericExample'

import checkboxDoc from './pages/docs/checkbox.doc.json';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'documentation', element: <Demo />, children: [
                {path: 'checkbox', element: <GenericExample data={checkboxDoc} />}
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
