export const config = {
  tronweb: {
    privateKey: process.env.NEXT_PUBLIC_TRONWEB_PRIVATE_KEY, // Masukkan private key Anda di sini
    fullNode: process.env.NEXT_PUBLIC_TRONWEB_FULL_NODE,
    solidityNode: process.env.NEXT_PUBLIC_TRONWEB_SOLIDITY_NODE,
    eventServer: process.env.NEXT_PUBLIC_TRONWEB_EVENT_SERVER,
    contractBlock: process.env.NEXT_PUBLIC_CONTRACT_BLOCK,
  },
};
