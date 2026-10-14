import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
          height: 65,
        },
      }}
    >
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
        }}
      />

      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />

      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
        }}
      />



    </Tabs>
  );
}