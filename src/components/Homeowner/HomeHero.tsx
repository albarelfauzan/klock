"use client";
import styles from "@/assets/styles";
import { logoText } from "@/assets/images";

import { useRouter } from "next/navigation";
import TronWeb from "tronweb";

import { useGetKeyInfo } from "@/hooks/getKeyInfo";
import { useEffect, useState } from "react";

const HomeHero = () => {
  const navigate = useRouter();

  const goToKeyInstruction = () => {
    navigate.push("/openkey");
  };

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


  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`flex-1 flex-col`}>
        <div className={` ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className="flex flex-row justify-center text-center w-full">
          {keyInfo && typeof keyInfo === 'object' && Object.keys(keyInfo).length > 0 && (
            <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
              {keyInfo.status === "Owner" ? "Home Owner" : "Shared"}
            </h1>
          )}

          </div>

          <p
            className={`${styles.paragraph} ss:font-['inter'] text-[#12141D] text-center max-w-[600px] mt-5`}
          >
            Welcome, Homeowners! In this section, you can view information about
            your keys, smart lock locations, and codes. and, utilize your keys.
          </p>
          <p className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px]`}>
            Smart Lock Key : <span className="font-extrabold">{keyInfo.id}</span>
          </p>

          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Smart Lock Location :  <span className="font-extrabold">{keyInfo.location}</span>
          </p>
          <p
            className={`${styles.paragraph} text-[#12141D] ss:text-2xl text-lg ss:font-['Space Gortesk'] font-bold mt-6 text-center max-w-[600px] `}
          >
            Smart Lock Code : <span className="font-extrabold">{keyInfo.code}</span>
          </p>
          <button
            onClick={goToKeyInstruction}
            className="text-white font-poppins bg-black px-6 py-2.5 rounded-full ss:mt-8 mt-6"
          >
            Open Key
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
