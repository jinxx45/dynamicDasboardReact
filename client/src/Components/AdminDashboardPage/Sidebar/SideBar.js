import React from 'react'
import {Sidebar, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import DynamicDashLogo from '../../Images/DynamicDashLogo.png'


function SideBar() {
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
          Welcome  <span className="username-dash"> {this.state.user.userName}</span>
        </DropdownItem>

        <Item  bgColor='#ADD8E6'>
          <Icon><i className="fas fa-home"/></Icon>
          Manage Users
        </Item>
        <Item bgColor='#ADD8E6'>
          <Icon><i className="fas fa-info"/></Icon>
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
