import React, { useState, useEffect } from "react";
import * as web3 from "@solana/web3.js";
import { toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import BoilerPlate from '../../components/BoilerPlate';

const Starter = () => {
    const [account, setAccount] = useState("");
    const [amount, setAmount] = useState(0);
    const [balance, setBalance] = useState(0);
    const [txSig, setTxSig] = useState("");
  
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    return <BoilerPlate />;
  };

export default Starter;