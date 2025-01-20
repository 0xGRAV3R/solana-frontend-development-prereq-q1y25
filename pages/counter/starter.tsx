import React, { useState, useEffect } from "react";
import * as web3 from "@solana/web3.js";
import { toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { Program, AnchorProvider } from "@coral-xyz/anchor";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import CounterIDL from "../../programs/idls/counter.json";
import { Counter } from "../../programs/types/counter";
import { Keypair, PublicKey } from "@solana/web3.js";
import BoilerPlate from '../../components/BoilerPlate';

const Starter = () => {
    const [counterKey, setCounterKey] = useState("");
    const [count, setCount] = useState(0);
    const [txSig, setTxSig] = useState("");

    const { connection } = useConnection();
    const { publicKey, wallet } = useWallet();

    const provider = new AnchorProvider(
        connection,
        wallet?.adapter as unknown as NodeWallet,
        AnchorProvider.defaultOptions()
    );
    
    const counterProgram = new Program(
        CounterIDL as unknown as Counter,
        provider
    );

    const getPreparedTransaction = async () => {
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
        return transaction;
    };

    <BoilerPlate />
}

export default Starter;