import React from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('Dark');
    return {}
}

export default useDarkMode