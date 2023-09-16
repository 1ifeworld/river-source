import { Flex } from '@river/design-system'
import { Listing } from '../../../gql/sdk.generated'
import { ListingCard } from '../../client'

export function ChannelBody({ listings }: { listings: Listing[] }) {

  return (
    <Flex className="gap-x-10">
      <div className="flex flex-wrap gap-5 pb-4">
        {listings.map((listing: Listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </Flex>
  )
}
