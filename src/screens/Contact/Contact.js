import React from 'react'
import classNames from 'classnames/bind'
import styles from './Contact.module.sass'

const cx = classNames.bind(styles)

const Contact = ({id}) => {
  return(
    <div id={id} className={cx('contact')}>
        Contact
    </div>
  )
}
export default Contact