import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core';
import Verified from '@mui/icons-material/Verified';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import Repeat from '@material-ui/icons/Repeat';
import FavouriteBorder from '@material-ui/icons/FavoriteBorder'
import Publish from '@material-ui/icons/Publish';

const Post = ({displayName, username, verified, text, image, avatar}) => {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src={avatar} />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                             {displayName} {''}<span className='post__headerSpecial'>
                            {verified && <Verified className='post__badge' />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} />
                <div className='post__footer'>
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavouriteBorder fontSize='small' />
                    <Publish fontSize='small' />
                </div>  
            </div>
        </div>
    );
}

export default Post;
