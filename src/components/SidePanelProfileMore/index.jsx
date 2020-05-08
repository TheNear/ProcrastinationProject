import React, { useRef, useEffect } from 'react';
import WithAnimation from '../../HOCs/WithAnimation';


const SidePanelProfileMore = ({changeRef, show}) => {


  const wrapRef = useRef(null);

  useEffect(() => {
    changeRef(wrapRef)
  }, [wrapRef, changeRef])

  return (
    <div  ref={wrapRef} className={`side-more ${show ? 'active' : ''}`}>
      <p>some text</p>
      <h1>some h1</h1>
    </div>
  )
}

export default WithAnimation(SidePanelProfileMore);