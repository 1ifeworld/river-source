  import React, { useState, useEffect } from "react";
  import { Input, Stack, Label, Button, Flex, Grid } from "@river/estuary";
  import { createLanyardTree } from "@/hooks";
  import { useAccount } from "wagmi";
  import { Plus, X } from "lucide-react";
  import { getAddressDisplay } from "utils/getAddressDisplay";
  import { getAddressData } from "utils/getAddressData";
  import { Hash, Hex } from "viem";

  interface Props {
    onMerkleRootChange: (merkle: Hash) => void;
    currentMerkleRoot?: Hex;
    addresses: string[];
    setAddresses: React.Dispatch<React.SetStateAction<string[]>>;
    displayAddresses: string[];
    setDisplayAddresses: React.Dispatch<React.SetStateAction<string[]>>;
  }

  export function LanyardMerkle({
    onMerkleRootChange,
    currentMerkleRoot,
  }: Props) {
    const { address } = useAccount();
    const [addresses, setAddresses] = useState<string[]>(
      address ? [address] : []
    );
    const [displayAddresses, setDisplayAddresses] = useState<string[]>(
      address ? [address] : []
    );
    const [inputAddress, setInputAddress] = useState<string>("");
    const [merkleRoot, setMerkleRoot] = useState<Hex | undefined>(
      currentMerkleRoot
    );

    const handleRemoveAddress = (indexToRemove: number) => {
      // Remove the address from the addresses state
      setAddresses((prevAddresses) =>
        prevAddresses.filter((_, index) => index !== indexToRemove)
      );

      // Remove the address from the displayAddresses state
      setDisplayAddresses((prevDisplayAddresses) =>
        prevDisplayAddresses.filter((_, index) => index !== indexToRemove)
      );
    };

    useEffect(() => {
      const generateTree = async () => {
        if (!addresses.length) return;

        console.log("Addresses to be used for Merkle tree:", addresses);

        try {
          const response = await createLanyardTree(addresses as Hex[]);
          if (response?.merkle) {
            setMerkleRoot(response.merkle);
            onMerkleRootChange(response.merkle);
            console.log("Merkle root in LanyardMerkle:", response.merkle);
          } else if (response?.error) {
            console.error("Error from createLanyardTree:", response.error);
          }
        } catch (error) {
          console.error("Error generating Merkle tree:", error);
        }
      };
      generateTree();
    }, [addresses, onMerkleRootChange]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputAddress(e.target.value);
    };
    const resolveInputToAddress = async (
      input: string
    ): Promise<string | null> => {
      console.log("Resolving input:", input);
      try {
        const resolvedData = await getAddressData(input);
        console.log("Resolved data from getAddressData:", resolvedData);

        // Directly log the 'address' property
        console.log("Address property from resolvedData:", resolvedData.address);

        // Check if resolvedData has an address property
        if (resolvedData && resolvedData.address) {
          return resolvedData.address;
        } else {
          console.warn("Failed to resolve input:", input);
          return null;
        }
      } catch (error) {
        console.error("Error resolving input:", error);
        return null;
      }
    };
    // Resolve Ethereum address to its associated ENS name (if any)
    const resolveAddressToENS = async (address: string): Promise<string> => {
      console.log(`Checking if address ${address} has an associated ENS name.`);
      const { display } = await getAddressDisplay(address as Hex);
      if (display && display !== address) {
        console.log(`Address ${address} has associated ENS name: ${display}`);
        return display;
      } else {
        console.log(`Address ${address} does not have an associated ENS name.`);
        return address;
      }
    };
    const handleAddAddress = async () => {
      try {
        const resolvedAddress = await resolveInputToAddress(inputAddress);
        if (resolvedAddress) {
          console.log(`Adding to addresses: ${resolvedAddress}`);
          setAddresses((prevAddresses) => [...prevAddresses, resolvedAddress]);
          const displayValue = await resolveAddressToENS(resolvedAddress);
          setDisplayAddresses((prevDisplayAddresses) => [
            ...prevDisplayAddresses,
            displayValue,
          ]);
        } else {
          console.warn("Invalid address or ENS format:", inputAddress);
        }
        setInputAddress("");
      } catch (error) {
        console.warn("Error in handleAddAddress:", error);
      }

    };

    const handleClearAll = () => {
      setAddresses([]);
      setDisplayAddresses([]);
    };

    return (
      <Stack className="gap-y-4">
        <Label
          htmlFor="memberAddressInput"
          className="text-[#7B7B7B] w-fit text-[10px]"
        >
          Add Members
        </Label>

        <Flex className="items-center gap-x-2">
          <Input
            id="memberAddressInput"
            type="text"
            placeholder="Enter an ENS or Ethereum address"
            value={inputAddress}
            onChange={handleInputChange}
          />
          <Button size="icon" shape="circle" onClick={handleAddAddress}>
            <Plus />
          </Button>
        </Flex>
        <Stack>
          
          <Button onClick={handleClearAll}>Clear All</Button>
        </Stack>
        <ul>
          {displayAddresses.map((addr, index) => {
            if (addr !== address) {
              return (
                <li key={index}>
                  {addr}
                  <Button size="subicon" onClick={() => handleRemoveAddress(index)}>
                    <X />
                  </Button>
                </li>
              );
            }
            return null; // Return null for the connected address
          })}
        </ul>
      </Stack>
    );
  }
