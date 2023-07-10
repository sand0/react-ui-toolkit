import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import Docs from './pages/Docs';
import GenericDocumentationContent from './components/documentation/GenericDocumentationContent';

import checkboxDoc from './pages/docs/checkbox.doc.json';
import checkboxGroupDoc from './pages/docs/checkbox-group.doc.json';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'documentation',
        element: <Docs />,
        children: [
          { index: true, element: <Navigate to='checkbox' replace /> },
          {
            path: checkboxDoc.anchor,
            element: <GenericDocumentationContent data={checkboxDoc} />,
          },
          {
            path: checkboxGroupDoc.anchor,
            element: <GenericDocumentationContent data={checkboxGroupDoc} />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
