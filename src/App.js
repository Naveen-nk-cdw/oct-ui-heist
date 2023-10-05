import hallSetup from './assets/images/uiheist_oct.png';
import './App.scss';
import Tv from './components/tv';
import RemoteController from './components/remoteController';
import { useRecoilState, useRecoilValue } from 'recoil';
import { powerSwitchAtom, tvChannelAtom, tvVolumeAtom } from './atoms/heist';
import ToggleSwitch from './components/switch';

function App() {

  // Reading default values for volume,channelno from recoil
  const [tvVolume, setTvVolume] = useRecoilState(tvVolumeAtom);
  const [tvChannel, setTvChannel] = useRecoilState(tvChannelAtom);
  const power = useRecoilValue(powerSwitchAtom);
  // Imported background images from local
  const backGroundImageStyle = {
    backgroundImage: `url(${hallSetup})` ,
  }

  //Function to add volume
  const plusVolumeFunction = () =>{
    if(!(tvVolume+1 >50))
    setTvVolume(tvVolume+1);
  }

  //Function to reduce volume
  const minusVolumeFunction = () =>{
    if(tvVolume >0)
    setTvVolume(tvVolume-1);
  }

  //Function to go forward in channel
  const plusChannelFunction = () =>{
    if(!(tvChannel+1 >50)){
      setTvChannel(tvChannel+1);
    }
    else{
      setTvChannel(1);
    }
    
  }

  //Function to go back in channel
  const minusChannelFunction = () =>{
    if(tvChannel-1 >0){
      setTvChannel(tvChannel-1);
    }
    else{
      setTvChannel(50);
    }
  }
  
  return (
    <div className="app" style={backGroundImageStyle}>
      <Tv/>
      <div className="volumeRemote">
        {power && <RemoteController title={'VOL'} plusCallBack={plusVolumeFunction} minusCallBack={minusVolumeFunction}/>}
      </div>
      <div className="programeRemote">
        {power && <RemoteController title={'PGM'} plusCallBack={plusChannelFunction} minusCallBack={minusChannelFunction}/>}
      </div>
      <div className="powerSwitch">
        <ToggleSwitch />
      </div>
    </div>
  );
}

export default App;
