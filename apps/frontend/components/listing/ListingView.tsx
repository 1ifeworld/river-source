import React from "react";
import { Flex, Stack, Body, BodySmall } from "@river/design-system";
import Image from "next/image";
import { truncateText, shortenAddress } from "../../utils";
import { MediaRenderer, MediaContainer } from ".";

type ListingViewProps = {
  listings: any[]; // You can replace 'any' with the actual type of your listings
  error?: string;
};

export function ListingView({ listings, error }: ListingViewProps) {
  // If there's an error, display the error message
  if (error) {
    return <Flex className="flex-col">{error}</Flex>;
  }

  // If no listings are available, display a message
  if (!listings || listings.length === 0) {
    return (
      <Flex className="flex-col">
        No listings found for the provided listingId
      </Flex>
    );
  }

  // If listings are still being fetched, display a loading message
  if (!listings) {
    return <Flex className="flex-col">Loading...</Flex>;
  }

  const mediaURL: string = listings?.[0]?.listingTargetMetadata?.pieceImageURL
    ? listings?.[0]?.listingTargetMetadata?.pieceImageURL
    : "";

  return (
    // outer flex is the skeleton of the media container. we let w expand fully, and set height to 765px
    // its a flex box, and will always center the media renderer inside
    <Stack className="w-full h-full items-center border-2 border-label">
        <MediaContainer>
            <MediaRenderer mediaURL={mediaURL} />
        </MediaContainer>
    </Stack>
  );
}
