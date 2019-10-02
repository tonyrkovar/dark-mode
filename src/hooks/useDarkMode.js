import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [isActivated, setIsActivated] = useLocalStorage('');

    useEffect(() => {
        if (isActivated === true) {
            return document.body.className.add = 'dark-mode'
        } else {
            return document.body.className.remove = 'dark-mode'
        }
    }, [isActivated])

    // const handleChanges = e => {
    //     e.preventDefault();
    //     setIsActivated(!isActivated)
    // }

    return [isActivated, handleChanges, setIsActivated]
}