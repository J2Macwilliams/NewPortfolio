import { useState } from 'react'

const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const toggleSwitch = () => setIsShown(!isShown);
  // const show = () => setIsShown(true);

  return (
    <>
      {toggle(toggleSwitch)}
 
      {isShown && content(toggleSwitch)}
    </>
  );
};

export default ToggleContent;