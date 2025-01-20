import React, { useState, useEffect } from "react";
import * as web3 from "@solana/web3.js";
import { toast } from "react-toastify";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import BoilerPlate from '../../components/BoilerPlate';

const Starter = () => (
    <BoilerPlate />
)

export default Starter;