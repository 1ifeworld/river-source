import React, { useState } from 'react';
import SearchGallery from './SearchGallery';
import SearchInput from './SearchInput';
import SearchAction from './SearchAction';
import { Nft } from 'alchemy-sdk';
import { useSendData } from '../../../../../hooks';
import {
  Hex,
  Hash,
  encodeAbiParameters,
  parseAbiParameters,
  zeroAddress,
  isAddress,
  getAddress,
} from 'viem';
import { Stack } from '@river/design-system';
import { type Listing } from '../../../../../types/types';
import { usePathname, useRouter } from 'next/navigation';

export function SearchContainer() {
  const [searchParams, setSearchParams] = useState<Listing>({
    chainId: BigInt(0),
    tokenId: BigInt(0),
    listingAddress: zeroAddress,
    hasTokenId: true,
  });
  const [searchResults, setSearchResults] = useState<Nft | undefined>();
  const pathname = usePathname();
  const cleanedPathname = getAddress(pathname.slice(9));
  const router = useRouter();

  const handleSetSearchParams = (updatedParams: {
    network?: number | undefined;
    contractAddress?: string | undefined;
    tokenId?: string | undefined;
  }) => {
    setSearchParams((prev) => ({
      ...prev,
      chainId: updatedParams.network
        ? BigInt(updatedParams.network)
        : prev.chainId,
      listingAddress: (updatedParams.contractAddress ||
        prev.listingAddress) as Hex,
      tokenId: updatedParams.tokenId
        ? BigInt(updatedParams.tokenId)
        : prev.tokenId,
    }));
  };

  /* sendData Hook */
  const sendInputs: Hash = encodeAbiParameters(
    parseAbiParameters('bytes32[], (uint128, uint128, address, bool)[]'),
    [
      // outer brackets to define as array
      [],
      [
        // outer brackets to define as array
        [
          // additional outer brackets to define as struct
          searchParams.chainId,
          searchParams.tokenId,
          isAddress(searchParams.listingAddress as Hex)
            ? (searchParams.listingAddress as Hex)
            : zeroAddress,
          searchParams.hasTokenId as boolean,
        ],
      ],
    ]
  );

  const { sendDataConfig, sendData, sendDataLoading, sendDataSuccess } =
    useSendData({
      press: cleanedPathname,
      data: sendInputs,
      value: '0.0005',
      prepareTxn: searchResults ? true : false,
      successCallback: router.refresh,
    });

  return (
    <Stack className='justify-center gap-4'>
      {searchResults && <SearchGallery nftMetadata={searchResults} />}
      <Stack className='gap-y-4 mx-[18px]'>
        <SearchInput
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          setSearchParams={handleSetSearchParams}
        />
        <SearchAction
          nameOfAdd={searchResults?.title}
          addReady={!!searchResults}
          addTrigger={sendData}
        />
      </Stack>
    </Stack>
  );
}
