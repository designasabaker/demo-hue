import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
    return (
        <section className='section'>
            <Outlet />
        </section>
    );
};
export default SharedLayout;
