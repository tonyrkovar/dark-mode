import React, { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    if (typeof kay !== 'string') {
        throw new Error('Invalid Params: useLocalStorage should receive a string for the first argument')
    }
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return (item ? JSON.parse(item) : initialValue)
    });

    return storedValue;
}