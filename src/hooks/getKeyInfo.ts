"use client";

import { config } from "config";
import { useEffect, useState } from "react";

// @ts-ignore
import TronWeb from "tronweb";

export const useGetKeyInfo = () => {
  const [keyInfo, setKeyInfo] = useState({
    id: "",
    location: "",
    code: "",
    status: "",
  });

  useEffect(() => {
    const fullNode = "https://api.shasta.trongrid.io";
    const solidityNode = "https://api.shasta.trongrid.io";
    const eventServer = "https://api.shasta.trongrid.io";
    const privateKey = "459a06eb848d5a3bffb7a71056a6236f26f560e1c55e9d9b094ba6f4361c2085"; // Ganti dengan private key Anda

    const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

    // const klockContractAddress = "TEkaxsGJ3sYQ92L457D5C9PCoHBDLUNFFT"; // Ganti dengan alamat kontrak klock Anda
    // const contractAbi = ; // Ganti dengan ABI kontrak klock Anda
    // const klockContract = tronWeb.contract(contractAbi, klockContractAddress);

    const getKeyInfo = async () => {
      try {
        // Tunggu hingga TronWeb siap
        await new Promise<void>((resolve) => {
          const checkTronWeb = () => {
            if ((window as any).tronWeb && (window as any).tronWeb.ready) {
              resolve();
            } else {
              setTimeout(checkTronWeb, 100); // Cek setiap 100 milidetik
            }
          };
          checkTronWeb();
        });
    
        // Setelah TronWeb siap, lanjutkan mendapatkan informasi kunci
        const tronWeb = (window as any).tronWeb;
        const address = tronWeb.defaultAddress.base58;
        console.log("Current address:", address);
    
        const contractAddress = "TEkaxsGJ3sYQ92L457D5C9PCoHBDLUNFFT";
        const klockContract = tronWeb.contract([
          {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
              },
            ],
            name: "claimKey",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_address",
                type: "address",
              },
            ],
            name: "getInfoKey",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
              {
                internalType: "string",
                name: "",
                type: "string",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            name: "keys",
            outputs: [
              {
                internalType: "string",
                name: "location",
                type: "string",
              },
              {
                internalType: "string",
                name: "code",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isShared",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "ownedKey",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "_id",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "_location",
                type: "string",
              },
              {
                internalType: "string",
                name: "_code",
                type: "string",
              },
            ],
            name: "registerKey",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_sharedAddress",
                type: "address",
              },
            ],
            name: "shareKey",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "sharedKey",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ], contractAddress);
    
        const keyInfo = await klockContract.methods.getInfoKey(address).call();
        console.log("Key Info:", keyInfo);
    
        setKeyInfo({
          id: keyInfo[0].toString(),
          location: keyInfo[1],
          code: keyInfo[2],
          status: keyInfo[3],
        });
      } catch (error) {
        console.error("Failed to get key info:", error);
      }
    };
    

    getKeyInfo();
  }, []);

  return { keyInfo, setKeyInfo };
};
