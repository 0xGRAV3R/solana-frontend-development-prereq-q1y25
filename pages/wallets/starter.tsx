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

    // when the status of "connection" or "publicKey" changes, we execute the code block below
    React.useEffect(() => {
        const getInfo = async () => {
        if (connection && publicKey) {
            // we get the account info for the user's wallet data store and set the balance in our application's state
            const info = await connection.getAccountInfo(publicKey);
            setBalance(info!.lamports / web3.LAMPORTS_PER_SOL);
        }
        };
        getInfo();
        // the code above will execute whenever these variables change in any way
    }, [connection, publicKey]);

    // we now have a function that returns a component
    return <BoilerPlate />;
}

export default Starter;