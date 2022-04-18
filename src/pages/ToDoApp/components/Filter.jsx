import React from 'react'
import Button from '../../../components/Button/Button'

function Filter() {
  const ButtonList = ['All', 'Last day', 'Today', 'Next day'];
  return (
      <div style={{display:'flex', justifyContent:'space-around', marginBottom:20}}>
        {ButtonList.map((btnItem)=>(
          <Button>{btnItem}</Button>
        ))}
      </div>
  )
}

export default Filter