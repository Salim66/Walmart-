import React, { useState } from 'react'

const useCustomPopupControl = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return { isOpen, toggleMenu };
}

export default useCustomPopupControl