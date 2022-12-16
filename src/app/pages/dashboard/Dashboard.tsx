import { Link } from 'react-router-dom';

export const Dashboard = () => {
    return (
        <div>
            <p>Bem vindo</p>

            <Link to={"/login"}>Login</Link>
        </div>
    );
}