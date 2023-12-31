import Image from 'next/image'
import Link from 'next/link'
import {
  Body,
  Card,
  Headline,
  BodySmall,
  Stack,
  cn,
  Flex,
  C,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  BodyLarge,
  Separator,
} from '@river/estuary'
import { type Channel } from '@/gql'
import { truncateText, ipfsToHttps, getAddressDisplay } from '@/utils'
import { Hex } from 'viem'

export async function ChannelCard({
  channel,
  className,
}: {
  channel: Channel
  className?: string
}) {
  const { display } = await getAddressDisplay(channel.createdBy as Hex)

  return (
    <Stack className={cn('gap-y-2', className)}>
      {/* Image */}
      <Link href={`channel/${channel.id}`}>
        <Card className="relative shadow-reg hover:brightness-50 hover:bg-base transition-all">
          <Image
            className="object-cover aspect-square"
            src={ipfsToHttps(channel.contractUri?.image as string)}
            alt={channel.contractUri?.name as string}
            fill
          />
        </Card>
      </Link>
      {/* Caption */}
      <Stack className="md:min-w-[224px]">
        <Flex className="justify-between items-center">
          <HoverCard>
            <HoverCardTrigger>
              <Link href={`channel/${channel.id}`}>
                <Body className="text-label font-medium leading-[14px] hover:underline truncate">
                  {channel.contractUri?.name}
                </Body>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <Stack className="gap-8">
                <span>
                  <Headline className="font-medium leading-none">
                    {channel.contractUri?.name}
                  </Headline>
                  <Headline className="text-label-muted font-normal leading-none">
                    {display}
                  </Headline>
                </span>
                <Stack className="gap-8">
                  <Body className="text-label">
                    {channel.contractUri?.description}
                  </Body>
                  <Separator className="bg-base-shade" />
                  <Flex className="gap-8">
                    {/* Members */}
                    <Stack>
                      <Headline className="font-medium leading-none">
                        {
                          channel?.logicTransmitterMerkleAdmin[0].accounts
                            ?.length
                        }
                      </Headline>
                      <Body className="text-label-muted leading-none">
                        {channel?.logicTransmitterMerkleAdmin[0].accounts &&
                        channel?.logicTransmitterMerkleAdmin[0].accounts
                          ?.length > 1
                          ? 'members'
                          : 'member'}
                      </Body>
                    </Stack>
                    {/* Items */}
                    <Stack>
                      <Headline className="font-medium leading-none">
                        {channel?.listings.length}
                      </Headline>
                      <Body className="text-label-muted leading-none">
                        {channel?.listings.length &&
                        channel?.listings.length > 1
                          ? 'items'
                          : 'item'}
                      </Body>
                    </Stack>
                  </Flex>
                </Stack>
              </Stack>
            </HoverCardContent>
          </HoverCard>
          <C />
        </Flex>
        {channel?.logicTransmitterMerkleAdmin[0].accounts?.length &&
        channel?.logicTransmitterMerkleAdmin[0].accounts?.length > 1 ? (
          <BodySmall className="text-label-muted">
            {`${display} + ${
              channel?.logicTransmitterMerkleAdmin[0].accounts?.length - 1
            } others`}
          </BodySmall>
        ) : (
          <BodySmall className="text-label-muted">{display}</BodySmall>
        )}
      </Stack>
    </Stack>
  )
}
