import React from 'react';
import ReactDom from 'react-dom';
import './Notification.scss'

const Notification = () => {
    return ReactDom.createPortal(
        <div className='notification'>
                test notification
        </div>, document.getElementById('portal-root')
    )
}

export default Notification;