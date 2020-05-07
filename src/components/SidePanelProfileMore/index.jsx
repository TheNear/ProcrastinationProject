import React, { useRef, useEffect } from 'react';

export default function SidePanelProfileMore({changeRef}) {
  const wrapRef = useRef(null);

  useEffect(() => {
    changeRef(wrapRef)
  }, [wrapRef, changeRef])

  return (
    <div ref={wrapRef} className="side-more active">
      <p>some text</p>
      <h1>some h1</h1>
    </div>
  )
}
