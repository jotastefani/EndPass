import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./app.routes";
import React from "react";

export function AppRoutes() {
  return <NavigationContainer>{<Routes />}</NavigationContainer>;
}
