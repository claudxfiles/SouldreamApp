import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Inicio' }} />
      {/* Aquí podrás añadir más pantallas al Stack principal en el futuro */}
    </Stack>
  );
}
