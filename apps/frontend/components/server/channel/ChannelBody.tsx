import { Grid } from '@river/estuary'
import { Listing } from '@/gql'
import { ListingCard } from '@/client'

export function ChannelBody({ listings }: { listings: Listing[] }) {
  return (
    <Grid className="grid-cols-[repeat(auto-fill,_minmax(224px,_1fr))] gap-5 pb-4">
      {listings.map((listing: Listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </Grid>
  )
}
