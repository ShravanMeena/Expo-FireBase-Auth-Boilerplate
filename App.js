import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { auth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from './firebaseConfig';

export default function LoginScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  const signInWithGoogleAsync = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  if (user) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome, {user.displayName}!</Text>
        <Text>{user.email}</Text>
        <Button title="Logout" onPress={handleSignOut} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Sign In with Google" onPress={signInWithGoogleAsync} />
    </View>
  );
}
