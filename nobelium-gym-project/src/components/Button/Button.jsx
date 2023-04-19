import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
    function learnMore(){
        alert("Clicked from About Us section")
    }
  return (
    <button className={styles.button} onClick={learnMore}>{props.buttonText}</button>
  )
}

export default Button