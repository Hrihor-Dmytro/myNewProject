// import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useRouter } from "./screens/router";
import { useState } from "react";

export default function App() {
  const [isAutch, setIsAutch] = useState(true);

  const routing = useRouter(isAutch);
  // console.log(routing);

  return <NavigationContainer>{routing}</NavigationContainer>;
}
