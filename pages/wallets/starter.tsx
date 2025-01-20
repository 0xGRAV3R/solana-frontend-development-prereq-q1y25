// imports methods relevant to the react framework
import * as React from "react";
// library we use to interact with the solana json rpc api
import * as web3 from "@solana/web3.js";
// applies the styling to the components which are rendered on the browser
require("@solana/wallet-adapter-react-ui/styles.css");
// imports methods for deriving data from the wallet's data store
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import BoilerPlate from '../../components/BoilerPlate';

const Starter = () => {
    // connection context object that is injected into the browser by the wallet
    const { connection } = useConnection();

    // user's public key of the wallet they connected to our application
    const { publicKey } = useWallet();

    // allows us to add the wallet account balance to our react function component
    const [balance, setBalance] = React.useState<number | null>(0);

    // we now have a function that returns a component
    return <BoilerPlate />;
}

export default Starter;