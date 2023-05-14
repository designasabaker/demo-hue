import React, {useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import { useAppContext } from '../Context/AppContext.jsx';

const Home = () => {
    const {turnDark} = useAppContext();
    const navigate = useNavigate();
    const handleMenuBtnClick = useCallback(() => {
        turnDark();
        navigate('/menu');
    },[])

    return (
        <section className='section'>
            <h2>Home Page</h2>
            <button onClick={handleMenuBtnClick}>Menu</button>
        </section>
    );
};
export default Home;
