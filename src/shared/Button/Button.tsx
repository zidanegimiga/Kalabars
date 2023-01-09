import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    fill: string,
    text: string,
    action?: any
}

const Button = ({fill, text, action}: ButtonProps ) => {
  return (
    <div 
      className={styles.buttonWrapper}
      onClick={action}
      style={{backgroundColor: `${fill}`}}
    >
        <p>{text}</p>
    </div>
  )
}

export default Button