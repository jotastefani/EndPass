import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, User } from 'react-native-google-signin';

const Auth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['profile', 'email'],
      webClientId: '582106960960-atjnn3n3uil4412nclrbe973odo9lgdp.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const handleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      setError(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <View>
      {user ? (
        <View>
          <Text>Bem-vindo, {user.name}!</Text>
          <Button title="Sair" onPress={handleSignOut} />
        </View>
      ) : (
        <GoogleSigninButton onPress={handleSignIn} />
      )}
      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
};

export default Auth;
