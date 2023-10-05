import React, { useEffect, useState } from 'react';
import './toggleSwitch.scss';
import { useRecoilState } from 'recoil';
import { powerSwitchAtom } from '../../atoms/heist';

const ToggleSwitch = () => {

    //Fetches power state of the TV from atom
    const [powerOn, setPowerOn] = useRecoilState(powerSwitchAtom);
    //Toggler state to switch the styles
    const [toggleClassName, setToggleClassName] = useState('off');
    //Useeffect to toggle between switches based on power state
    useEffect(()=>{
        setToggleClassName(powerOn ? "on" : "off");
    },[powerOn])
    
    const toggleOn = () =>{
        setPowerOn(true);
    }
    const toggleOff = () =>{
        setPowerOn(false);
    }
  return (
    <div className="toggleSwitchBoard">
        <div className={`toggleSwitch ${toggleClassName}`}>
            <div className="switchOn" onClick={toggleOn}>on</div>
            <div className="switchOff" onClick={toggleOff}>off</div>
        </div>
    </div>
  )
}



export default ToggleSwitch;