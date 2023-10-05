import React from 'react';
import './overlay.scss'
import { channelDataAtom, tvChannelAtom } from '../../atoms/heist';
import { useRecoilState, useRecoilValue } from 'recoil';

const Overlay = () => {

  //Fetches Channel number Recoil value on change
  const tvChannel = useRecoilValue(tvChannelAtom);

  //Fetches the inital chanell data
  const [channelData,setChannelData] = useRecoilState(channelDataAtom);

  //Subscription function to modify newly subscribed chanels
  const subscribe = () =>{
    let newSubscription = [...channelData];
    
    newSubscription[tvChannel-1] = {
      ...newSubscription[tvChannel-1],
      isSubscribed:true};

    newSubscription[tvChannel-1].subscribedDate = new Date();
    setChannelData(newSubscription);
  }

  return (
    <div className='overlay'>
      <div className="content">Channel is not Subscribed.</div> 
      <button className="subscribeButton" onClick={subscribe}>subscribe</button>
    </div>
  )
}

export default Overlay