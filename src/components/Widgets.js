import React from 'react'
import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed'
import Search from '@material-ui/icons/Search'

export default function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <Search className='widgets__searchIcon' />
            <input placeholder='Search Twitter' type='text' />
        </div>
        <div className='widgets__widgetContainer'>
            <h2>What's happening</h2>

            <TwitterTweetEmbed tweetId={'1542958774339747846'}  className='widgets__tweetEmbed' />
            
            <div className='widgets__timelineContainer'>
                <TwitterTimelineEmbed sourceType='profile' screenName='NASA' />
            </div>
        </div>
    </div>
  )
}
