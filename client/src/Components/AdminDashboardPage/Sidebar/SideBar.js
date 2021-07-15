import React  from 'react'
import { useHistory } from 'react-router-dom'
import {Sidebar, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import DynamicDashLogo from '../../../Images/DynamicDashLogo.png'


function SideBar(props) {

    const history = useHistory();

    const gotoUserManagement = () =>
    {
        history.push('/user-management');
    }

    
   
    return (
        <div>
                     
        <Sidebar bgColor='red' isCollapsed={false}>
        <Logo
          image={DynamicDashLogo}
          imageName='Dynamic Dash logo'/>
        <LogoText  >Dynamic<span className="text-danger">Dash</span> </LogoText>
        <DropdownItem
          values={['Change Password', 'Logout']}
          bgColor={'#ADD8E6'}>
          Welcome  <span className="username-dash">{props.username}</span>
        </DropdownItem>

        <div onClick={gotoUserManagement}>
        <Item  bgColor='#ADD8E6'>
          <Icon><i className="fas fa-users"/></Icon>
          Manage Users
        </Item>
        </div>
     
        <Item bgColor='#ADD8E6'>
          <Icon><i className="fas fa-chart-line"/></Icon>
          Manage KPI Dashboard
        </Item>
        <Item bgColor='#ADD8E6'>
          <Icon><i className="fas fa-sitemap"/></Icon>
          About
        </Item>
      </Sidebar>
        </div>
    )
}

export default SideBar
