import React, { useEffect, useState } from 'react';
import Channel from '../channel';
import './tv.scss';
import VolumeBar from '../volumeBar';
import { useRecoilValue } from 'recoil';
import { channelDataAtom, powerSwitchAtom, tvChannelAtom, tvVolumeAtom } from '../../atoms/heist';

const Tv = () => {
    //Fetches volumes Recoil value on change
    const volumeLevel = useRecoilValue(tvVolumeAtom);
    //Fetches Channel number Recoil value on change
    const tvChannel = useRecoilValue(tvChannelAtom);
    //Fetches TV power Recoil value on change
    const power = useRecoilValue(powerSwitchAtom);
    //Fetches channel Data Recoil value on change
    const programs = useRecoilValue(channelDataAtom);
    //States to toggle on styles of volume and channel number
    const [hideVolume, setHideVolume] = useState('hidden');
    const [hideChannelNo, setHideChannelNo] = useState('hidden');


    let channelProgram = programs[tvChannel-1];

    // use effect to show and hide the volume level based on user interactions
    useEffect(()=>{
        power && setHideVolume('');
        const volumeTimeout = setTimeout(()=>{
            setHideVolume('hidden');
        },2000);
        return ()=>{
            clearTimeout(volumeTimeout)
        }
    },[volumeLevel,power])


    // use effect to show and hide the channel number based on user interactions
    useEffect(()=>{
        power && setHideChannelNo('');
        const channelTimeout = setTimeout(()=>{
            setHideChannelNo('hidden');
        },2000);
        return ()=>{
            clearTimeout(channelTimeout)
        }
    },[tvChannel,power])

    //Function to construct Volume bars
    let displayVolumeLevel = []
    for(let decibel=0; decibel<Math.floor(volumeLevel/2); decibel++)
    {
        displayVolumeLevel.push(<VolumeBar key={`volume${decibel}`} soundNumber={2}/>)
    }
    if(volumeLevel%2 === 1)
    {
        displayVolumeLevel.push(<VolumeBar key={`volumeSingle`} soundNumber={1}/>)
    }


    return (
        <div className='tv'>
            {power && <><div className={`channelNo ${hideChannelNo}`}>{tvChannel}</div>
            <Channel source={channelProgram.source} mediaType={channelProgram.mediaType} isSubscribed={channelProgram.isSubscribed}/>
            <div className={`volume ${hideVolume}`}>
                <div className="volumeNo">{volumeLevel}</div>
                <div className="volumeBars">
                    {displayVolumeLevel}
                </div>
            </div></>
            }
        </div>
    )
}

Tv.propTypes = {}

export default Tv