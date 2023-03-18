import { Outlet } from 'react-router-dom';

import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

const RootLayout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default RootLayout;
