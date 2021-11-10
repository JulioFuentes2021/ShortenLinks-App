import React from 'react';
import { useLocalStorage } from '../LocalStorage/useLocalStorage';
import swal from 'sweetalert';

const Context = React.createContext();

function Provider(props) {
    const [allCopyElements, setAllCopyElements, loadLinks] = useLocalStorage('links',[]);

    const shortUrl = async (url) => {
        let res;
        let newLink;
        try {
            res = await fetch(url);
            newLink = await res.json();
        } catch(error) {
            console.log('error')
        }

        if (!res) {
            swal("Uups! Something went wrong", {
                buttons: false,
                timer: 3000,
                icon: "error",
            });
        }
        if (newLink.ok === true) {
            allCopyElements.push(newLink)
            setAllCopyElements(allCopyElements)
            loadLinks()
            swal("Link created successfully", {
                buttons: false,
                timer: 3000,
                icon: "success",
              });
        } else {
            swal("Uups! Something went wrong", {
                buttons: false,
                timer: 3000,
                icon: "error",
            });
        }
    }

    return (
        <Context.Provider value={{
            allCopyElements,
            setAllCopyElements,
            shortUrl,
            allCopyElements,
            setAllCopyElements,
        }}
        >
            {props.children}
        </Context.Provider>
    )

}

export { Context, Provider };