import { Link } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <div>
            <p>Página dois</p>

            <Link to={"/login"}>Login</Link>
        </div>
    );
}