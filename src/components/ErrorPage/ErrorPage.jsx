import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is Error Page</h2>
            <NavLink to="/">Go Back</NavLink>
        </div>
    );
};

export default ErrorPage;