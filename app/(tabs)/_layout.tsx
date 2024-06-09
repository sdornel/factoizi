import { Stack, Tabs } from "expo-router";
import { Colors } from "../Colors";
import { useColorScheme } from "react-native";
import React from "react";
import { TabBarIcon } from "../TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[useColorScheme() ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'EcranPrincipal',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='EcranDeNoteSalvate'
        options={{
          title: 'EcranDeNoteSalvate',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />

{/* <Stack.Screen
        name="Dosar"
        options={{
          headerShown: true,
          title: 'Dosar',
        }}
      /> */}
    </Tabs>
  );
}
