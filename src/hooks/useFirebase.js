
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../firebase/firebase.config";



initializeFirebaseApp();
const useFirebase = () => {

    const auth = getAuth();
    //state declare here  

   

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [token , setToken] = useState('')

    // email pass sign in methods 

    const registerEmailPass = (email, password, name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                console.log(user)

                // save user to dataBase 

                saveUserToDataBase(email, name)
                setError('')
                // update is to the firebase

                // redirect to home page 

                history.push('/dashboard')

               

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    console.log(user)

                }).catch((error) => {

                });

                console.log(user)
                // ...
            })
            .catch((error) => {
                setError(error.message)

                // ..
            })
            .finally(() => setLoading(false))



    }


    // sign in with email and pass 

    const signInEmailPass = (email, password, history , uri) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError('')
                console.log('signin success');
                history.push(uri)
                // ...
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    }

    //log out user 
    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false))

    }


    //onAuth state change 


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then((idtoken) => {
                    setToken(idtoken)
                })

            } else {
                setUser({})
            }
            setLoading(false)
        });

        return () => unSubscribe


    }, [])






    const saveUserToDataBase = (email, displayName) => {
        const user = { email, displayName, role: 'user' };
        fetch('https://aqueous-cove-16901.herokuapp.com/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })



    }


    // check Admin 

   useEffect(()=> {
       fetch(`https://aqueous-cove-16901.herokuapp.com/adminCheck/${user.email}`)
       .then(res=> res.json())
       .then(data => {
           console.log(data.admin);
           setIsAdmin(data.admin);
       })
   },[user.email])
  





    //  console.log(user)










    return {
        registerEmailPass, signInEmailPass, logOut, loading, user, error, isAdmin, token

    }

}


export default useFirebase;