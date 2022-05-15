import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ closeToast }) => {
return (
    <div>
        Something went wrong!
        <button onClick={closeToast}>Close</button>
    </div>
  )
}

toast.configure()
function ToastNotifications() {


    const notify = () => {
        toast('Basic notification', {position: toast.POSITION.TOP_LEFT, autoClose: 8000})
        toast.success('Basic notification', {position: toast.POSITION.TOP_CENTER, autoClose: false})
        toast.info('Basic notification', {position: toast.POSITION.TOP_RIGHT})
        toast.warn(<CustomToast />, {position: toast.POSITION.BOTTOM_LEFT})
        toast.error('Basic notification', {position: toast.POSITION.TOP_CENTER})
        toast('Basic notification', {position: toast.POSITION.BOTTOM_RIGHT})
        
    }
    return (
        <div>
      <button onClick={notify}> Notify! </button>      
        </div>
    )
}

export default ToastNotifications
