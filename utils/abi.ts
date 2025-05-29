export const abi = [
  {
    type: "function",
    name: "assign_buyer",
    stateMutability: "nonpayable",
    inputs: [
      { name: "user", type: "address", components: null, internalType: null },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "assign_seller",
    stateMutability: "nonpayable",
    inputs: [
      { name: "user", type: "address", components: null, internalType: null },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "assign_shipper",
    stateMutability: "nonpayable",
    inputs: [
      { name: "user", type: "address", components: null, internalType: null },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "admin",
    stateMutability: "view",
    inputs: [],
    outputs: [
      { name: "", type: "address", components: null, internalType: null },
    ],
  },
  {
    type: "function",
    name: "buyers",
    stateMutability: "view",
    inputs: [
      { name: "arg0", type: "uint256", components: null, internalType: null },
    ],
    outputs: [
      { name: "", type: "address", components: null, internalType: null },
    ],
  },
  {
    type: "function",
    name: "sellers",
    stateMutability: "view",
    inputs: [
      { name: "arg0", type: "uint256", components: null, internalType: null },
    ],
    outputs: [
      { name: "", type: "address", components: null, internalType: null },
    ],
  },
  {
    type: "function",
    name: "shippers",
    stateMutability: "view",
    inputs: [
      { name: "arg0", type: "uint256", components: null, internalType: null },
    ],
    outputs: [
      { name: "", type: "address", components: null, internalType: null },
    ],
  },
  {
    type: "function",
    name: "buyer_count",
    stateMutability: "view",
    inputs: [],
    outputs: [
      { name: "", type: "uint256", components: null, internalType: null },
    ],
  },
  {
    type: "function",
    name: "shipper_count",
    stateMutability: "view",
    inputs: [],
    outputs: [
      { name: "", type: "uint256", components: null, internalType: null },
    ],
  },
  {
    type: "function",
    name: "seller_count",
    stateMutability: "view",
    inputs: [],
    outputs: [
      { name: "", type: "uint256", components: null, internalType: null },
    ],
  },
  { type: "constructor", stateMutability: "nonpayable", inputs: [] },
] as const;
