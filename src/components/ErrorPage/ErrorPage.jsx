import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col gap-5 items-center justify-center min-h-screen'>
                <h2 className='font-bold text-4xl'>404 Page Not Found</h2>
                <NavLink className="btn" to="/">Go Back</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;