import { useEffect, useState } from "react";
import initializefirebase from "../Pages/Login/firebase/fireabse.init";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";



// initialize firebase app 
initializefirebase();

const useFirebase = () => {
    const [user, setuser] = useState({});

    const auth = getAuth();

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    // observer user state 
    useEffect(() => {
        const unsunscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
                // ...
            } else {
                setuser({})
            }
        });
        return () => unsunscribe;
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return {
        user,
        registerUser,
        loginUser,
        logout,

    }
}

export default useFirebase;