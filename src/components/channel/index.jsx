import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './channel.scss'
import Overlay from '../overlay';

const Channel = ({mediaType,source,isSubscribed}) => {

    // State to apply blurry effects
    const [subscriptionBlurry,setSubscriptionBlurry] = useState('');
    // UseEffect to change values based on subscription changes
    useEffect(()=>{
        setSubscriptionBlurry(isSubscribed?'':'blurred');
    },[isSubscribed])


    // Based on MediaType for the selected Channel respective media will be returned
    let tvShow = mediaType == 'image' ?
    <>
        {!isSubscribed && <Overlay/>}
        <img className={`imageChannel ${subscriptionBlurry}`} src={source} alt='Your Show is Interrupted due to unavoidable circumstances'/>
    </> :
    <>
        {!isSubscribed && <Overlay/>}
        <video className={`videoChannel ${subscriptionBlurry}`} controls autoPlay muted>
            <source src={source} type="video/mp4" />
            Your browser does not support the video tag.
        </video> 
    </>;
     
    return tvShow;
}

Channel.propTypes = {
    mediaType: PropTypes.string,
    source: PropTypes.string,
    isSubscribed: PropTypes.bool
}

export default Channel