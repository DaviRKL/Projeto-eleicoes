import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function SettingScreen({ route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Text>userParam: {JSON.stringify(user)}</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}