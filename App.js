import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useRouter } from "./screens/router";

export default function App() {
  const [isAutch, setIsAutch] = useState(false);
  const routing = useRouter(true);
  // console.log(routing);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
