import React from 'react';
import { useEffect } from 'react';

export function useLocalStorage(key,initialValue) {
    const [links,setLinks] = React.useState(initialValue);
    // const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        loadLinks()
    },[])

    const loadLinks = () => {
        try {
            const localStorageItem = window.localStorage.getItem(key);
            let parsedItem;
                if (!localStorageItem) {
                    localStorageItem.setItem(key,JSON.stringify(initialValue));
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }
                setLinks(parsedItem)
            } catch(error) {
                console.log(error);
            }
    }


    const addLink = (value) => {
        try {
            setLinks(value)
            window.localStorage.setItem(key, JSON.stringify(value))

        } catch (error) {
            console.error(error)
        }
    }

    return [links,addLink,loadLinks]
}
