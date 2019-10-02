import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [isActivated, setIsActivated] = useLocalStorage();

    useEffect(() => {
        if (isActivated === true) {
            return document.body.classList.add('dark-mode')
        } else {
            return document.body.classList.remove('dark-mode')
        }
    }, [isActivated])

    // const handleChanges = e => {
    //     e.preventDefault();
    //     setIsActivated(!isActivated)
    // }

    return [isActivated, setIsActivated]
}