import * as React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import './Notification.css';

export const Confirm = function (text) {
  return new Promise((resolve, reject) => {
    confirmAlert({
      buttons: [
        {
          label: 'NO',
          onClick: () => resolve(false)
        },
        {
          label: 'YES',
          onClick: () => resolve(true) 
        }
      ],
      message: text,
      title: 'Are you sure? ',
    })
  })
}



