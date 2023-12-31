import { Body, Headline, Stack } from '@river/estuary'
import { getAddressDisplay } from '@/utils'

export async function ListingDetails({ listing }: { listing: any }) {
  const { display } = await getAddressDisplay(
    listing?.listingTargetMetadata?.pieceCreator,
  )

  return (
    <Stack className="p-6 gap-4">
      <span className="inline-block pb-2">
        <Headline>{listing?.listingTargetMetadata?.pieceName}</Headline>
        <Body className="text-label-muted">{display}</Body>
      </span>
      <span className="inline-block">
        <Body className="text-label">
          {listing?.listingTargetMetadata?.pieceDescription}
        </Body>
      </span>
    </Stack>
  )
}
