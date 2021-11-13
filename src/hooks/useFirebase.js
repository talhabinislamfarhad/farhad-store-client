import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import initilaizationAuth from "../Firebase/firebase.init";
initilaizationAuth();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // get name
    function getName(e) {
        setName(e?.target?.value);
    }

    // get Email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    // Get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }
    //

    // sign up with email password
    function singUp() {
        saveUser(email, name, 'PUT')
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // set name
    function setDisplayName() {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then((result) => {
                Swal.fire(
                    "Good job!",
                    "Set Your Profile SuccessFull!",
                    "Success"
                )
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    "error"
                )
            });
    }
    // Email sign in
    function signInWithEmail() {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google sign in
    function signinGoogle() {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);
    // check admin 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    // sign out
    function logOut() {
        setIsLoading(true)
        return signOut(auth);
    }
    return {
        signInWithEmail,
        logOut,
        signinGoogle,
        user,
        setUser,
        saveUser,
        getPassword,
        getEmail,
        singUp,
        getName,
        isLoading,
        setDisplayName,
        setIsLoading,
        admin
    }
}
export default UseFirebase;