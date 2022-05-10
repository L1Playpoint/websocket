import React from "react";
import { useContextData } from "./context/Context";
import { ConnectWallet } from "./utils/ConnectWallet";

export default function App() {
  const [{ isWalletConnected, account }, dispatch] = useContextData();

  console.log(isWalletConnected)
  console.log(account)

  const handleLogin = () => {
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