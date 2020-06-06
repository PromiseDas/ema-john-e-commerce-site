import React, { useContext, useEffect } from 'react'; 
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";
import { Route, Redirect } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext(); 
// Declaration of the provider and passing all the descendants from App.js using props.children
export const AuthContextProvider = (props) => {
    const auth = Auth(); 
    return <AuthContext.Provider value={auth}> {props.children} </AuthContext.Provider>
}

// Declaration of useContext so that repeated declaration is not required 
export const useAuth = () => useContext(AuthContext);
// Declaration of protected route  
export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
           auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

// Declaration of getUser() function 
const getUser = (user) => { 
    const { displayName, email } = user;
    return { name: displayName, email };
}

const Auth = () => {
    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        //returning the whole auth rather than promise
        return firebase.auth().signInWithPopup(provider).then(res => {
            const signedInUser = getUser(res.user);
            setUser(signedInUser);
            return res.user;
        }).catch(err => {
            setUser(null);
            return err.message; 
        });
    };

    const signOutFromGoogle = () => {
        return firebase.auth().signOut().then(function() {
            setUser(null);
            return true;
          }).catch(function(error) {
            console.log(error);
            return false;
          });
    };

    // Getting the current user by setting an observer
    useEffect( () => {
        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
                const currentUser = getUser(usr);
                setUser(currentUser);
            } else {
              
            }
          });
    }, [])
    return {
        user, 
        signInWithGoogle, 
        signOutFromGoogle
    }
};

export default Auth;