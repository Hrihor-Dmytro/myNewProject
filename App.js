// import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useRouter } from "./screens/router";
import { useState } from "react";

export default function App() {
  const [isAutch, setIsAutch] = useState(false);

  const onClickLogin = () => {
    setIsAutch(true);
  };

  const routing = useRouter(isAutch, onClickLogin);
  // console.log(routing);

  return (
    <NavigationContainer onClickLogin={onClickLogin}>
      {routing}
    </NavigationContainer>
  );
}
