import SidebarContainer from './SidebarContainer';
import { SpinningIcon, WaveEffectButton } from './WaveEffectButton';
import ColorSelection from './ColorSelection';
import { useState } from 'react';

const SidebarRightThemify: React.FC = () => {
  const [rightPos, setRightPos] = useState<boolean>(true)

  const handleHideTheam =()=>{
    setRightPos(!rightPos)
  }

  return (
    <SidebarContainer rightPos={rightPos}>
      <WaveEffectButton>
        <SpinningIcon  onClick={handleHideTheam}/>
      </WaveEffectButton>
      <ColorSelection />
    </SidebarContainer>
  );
};

export default SidebarRightThemify;