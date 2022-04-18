import React from 'react'
import * as style from './style'

function Button(props) {
  return (
    <style.StyleButton {...props}/>
  )
}
Button.defaultProps = {
    type: 'primary',
}

export default Button