import React, { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const ToastComponent = ({ status, message }) => {

    useEffect(() => {
        if (status && message) {
            if (status === 'success') {
                toast.success(message);
            } else if (status === 'error') {
                toast.error(message);
            }
        }
    }, [status, message]);

    return <Toaster
        position="top-center"
        reverseOrder={false}
    />;
};

export default ToastComponent;
