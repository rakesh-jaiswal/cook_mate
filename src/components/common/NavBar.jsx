
import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item name="Home" as ={Link} to="/cook_mate">
                <img src={logo} alt="logo" className='logo' />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/cook_mate" /> 
           <Menu.Item name="Recipes" as={Link} to="/cook_mate/recipes" /> 
        </Menu>
    )
}

export default NavBar;