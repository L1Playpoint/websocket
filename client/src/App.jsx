import React from "react";
import { useContextData } from "./Context/Context";
import { ConnectWallet } from "./Utils/ConnectWallet";

export default function App() {
  const [{ isWalletConnected, account }, dispatch] = useContextData();
  const handleLogin = () => {
    console.log(isWalletConnected, account);
    if(!isWalletConnected){
      ConnectWallet(dispatch);
    }
  };

  return (
    <div className="app__container">
      <h1>{isWalletConnected ? account : "not logged in"}</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
