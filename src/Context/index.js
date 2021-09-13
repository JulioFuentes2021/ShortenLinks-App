import React from 'react';
import { useLocalStorage } from '../LocalStorage/useLocalStorage';

const Context = React.createContext();

function Provider(props) {
    // const [links,setLinks] = React.useState('');
    const [allCopyElements, setAllCopyElements,loadLinks] = useLocalStorage('links',[]);
    const [loading, setLoading] = React.useState(false);
    // const [prueba,setPrueba] = React.useState([])


    let prueba;


    const shortUrl = async (url) => {
        const res = await fetch(url);
        const newLink = await res.json();

        const elementLength = allCopyElements.length;
        // if (elementLength === 0  || elementLength === 1) {
        //     setElement([elementLength] = newLink)
        // } else 
        //     setElement([elementLength] = newLink)
        // }
       
        try {
            allCopyElements.push(newLink)
        setAllCopyElements(allCopyElements)
        loadLinks()
        } catch(error) {
            console.log('error')
        }
        
        console.log('Este es el newLink',newLink)
        console.log('Este es el elment',allCopyElements)
    }

    // const addLink = (link) => {
    //     const newLink = [...prueba];
    //     newLink.push(link)
    //     setAllCopyElements(newLink);
    // }

    

    return (
        <Context.Provider value={{
            allCopyElements,
            setAllCopyElements,
            loading,
            setLoading,
            shortUrl,
            allCopyElements,
            setAllCopyElements,
            prueba
        }}
        >
            {props.children}
        </Context.Provider>
    )

}

export { Context, Provider }