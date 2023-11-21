import { Slot } from 'expo-router';
import * as React from 'react';
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";

export default function Main() {
  return (
    <GluestackUIProvider>
      <Slot />
    </GluestackUIProvider>
  );
}
