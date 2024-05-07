"use client";

import styles from "@/assets/styles";
import React, { useState, useEffect } from "react";

// @ts-ignore
import TronWeb from "tronweb";

const ProductCode = () => {
  const [keyId, setKeyId] = useState("");
  const fullNode = "https://api.shasta.trongrid.io"; // Alamat node Shasta Testnet
  const solidityNode = "https://api.shasta.trongrid.io"; // Alamat node solidity Shasta Testnet
  const eventServer = "https://api.shasta.trongrid.io";

  const privateKey = "459a06eb848d5a3bffb7a71056a6236f26f560e1c55e9d9b094ba6f4361c2085";

  const contractAddress = "TEkaxsGJ3sYQ92L457D5C9PCoHBDLUNFFT";
  const contractAbi = [
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
  ];

  // Initialize TronWeb
  const tronweb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

  // Contract instance
  const klockContract = tronweb.contract(contractAbi, contractAddress);

  const handleSubmit = async () => {
    try {
      if (!keyId) {
        throw new Error("Please enter a valid Key ID");
      }

      // Call contract method
      const claim = await klockContract.methods.claimKey(keyId).send({
        shouldPollResponse: true,
        callValue: 0,
      });

      if (!claim) {
        throw new Error("Failed to claim key");
      }

      // Transaction successful
      alert("Transaction successful");
    } catch (error: any) {
      alert("Failed to claim key: " + error.message);
    }
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-center text-center w-full">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Input Your Product Code
          </h1>
        </div>
        <p className={`${styles.paragraph2} text-center max-w-[470px] mt-5`}>
          Simply input your smart lock's product code here to gain access to
          your homeowner key. It's your gateway to home security!
        </p>
        <input
          type="text"
          className="form-input mt-6 px-16 py-3 rounded-full sm:w-auto sm:px-16"
          placeholder="Enter Key ID"
          value={keyId}
          onChange={(e) => setKeyId(e.target.value)}
        />
        <button
          className="text-white bg-black px-10 py-2 rounded-full mt-6 text-lg font-semibold hover:bg-gray-900 transition duration-300 ease-in-out transform active:scale-95 sm:px-16"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default ProductCode;
