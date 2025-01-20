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

    const handleTransaction = async () => {
        if (!connection || !publicKey) {
          toast.error("Please connect your wallet.");
          return;
        }
    
        const { blockhash, lastValidBlockHeight } =
          await connection.getLatestBlockhash();
        const txInfo = {
          /** The transaction fee payer */
          feePayer: publicKey,
          /** A recent blockhash */
          blockhash: blockhash,
          /** the last block chain can advance to before tx is exportd expired */
          lastValidBlockHeight: lastValidBlockHeight,
        };
        const transaction = new web3.Transaction(txInfo);
        const instruction = web3.SystemProgram.transfer({
          fromPubkey: publicKey,
          lamports: amount * web3.LAMPORTS_PER_SOL,
          toPubkey: new web3.PublicKey(account),
        });
    
        transaction.add(instruction);
    
        try {
          const signature = await sendTransaction(transaction, connection);
          setTxSig(signature);
    
          const newBalance = balance - amount;
          setBalance(newBalance);
        } catch (error) {
          console.log(error);
          toast.error("Transaction failed!");
        }
    }; 

    return <BoilerPlate />;
  };

 

export default Starter;