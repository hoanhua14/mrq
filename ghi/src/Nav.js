import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MRQ</NavLink>
                <NavLink className="navbar-brand" to="/login">Login</NavLink>
                <NavLink className="navbar-brand" to="/signup">Sign Up</NavLink>
            </div>
        </nav>
    )
}
export default Nav;
