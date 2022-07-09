import React from 'react';
import './Sidebar.css'
import Twitter from '@material-ui/icons/Twitter'
import Home from '@material-ui/icons/Home'
import Search from '@material-ui/icons/Search'
import NotificansNone from '@material-ui/icons/NotificationsNone'
import MailOutline from '@material-ui/icons/MailOutline'
import BookmarkBorder from '@material-ui/icons/BookmarkBorder'
import ListAlt from '@material-ui/icons/ListAlt'
import PermIdentity from '@material-ui/icons/PermIdentity';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import SidebarOption from './SidebarOption';
import { Button } from '@material-ui/core';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Twitter className='sidebar__twitterIcon'/>
            <SidebarOption active Icon={Home} text='Home' />
            <SidebarOption Icon={Search} text='Explore' />
            <SidebarOption Icon={NotificansNone} text='Notifications'/>
            <SidebarOption Icon={MailOutline} text='Messages'/>
            <SidebarOption Icon={BookmarkBorder} text='Bookmarks'/>
            <SidebarOption Icon={ListAlt} text='Lists'/>
            <SidebarOption Icon={PermIdentity} text='Profile'/>
            <SidebarOption Icon={MoreHoriz} text='More'/>

            <Button variant='outlined' class='sidebar__tweet'>Tweet</Button>
        </div>
    );
}

export default Sidebar;
