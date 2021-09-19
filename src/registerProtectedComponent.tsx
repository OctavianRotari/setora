import _ from 'lodash';
import React, {useEffect, useState, useContext} from 'react';
import {Navigation} from 'react-native-navigation';
import {View, ActivityIndicator} from 'react-native';
import firebaseAuth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {landingRoot} from './roots';

const CurrentUserContext = React.createContext<
  FirebaseAuthTypes.User | undefined
>(undefined);

export function useCurrentUserContext() {
  const context = useContext(CurrentUserContext);
  if (context === undefined) {
    throw new Error('useCurrentUserContext must be within CurrentUserProvider');
  }

  return context;
}

export const registerProtectedComponent = (
  screenName: string,
  Component: any,
) => {
  return Navigation.registerComponent(
    screenName,
    () => {
      const RegisteredProtectedComponent = ({...other}) => {
        const [currentUser, setCurrentUser] =
          useState<FirebaseAuthTypes.User | null>();

        useEffect(() => {
          const unsubscribe = firebaseAuth.onAuthStateChanged(
            //@ts-ignore
            (user: firebase.User | null) => {
              if (!_.isEqual(user, currentUser)) {
                setCurrentUser(user);
              }
            },
            (error: Error) => {
              throw error;
            },
          );

          return () => {
            unsubscribe();
          };
        }, [currentUser]);

        const signOut = async () => {
          await firebaseAuth().signOut();
          Navigation.setRoot(landingRoot());
        };

        if (currentUser === null) {
          signOut();

          return <View />;
        }

        if (currentUser === undefined) {
          return <ActivityIndicator size="large" color="00FFFF" />;
        }

        return (
          <CurrentUserContext.Provider value={currentUser}>
            <Component {...other} />
          </CurrentUserContext.Provider>
        );
      };

      return RegisteredProtectedComponent;
    },
    () => Component,
  );
};
