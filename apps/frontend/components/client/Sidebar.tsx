import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetTrigger,
  Menu,
  Flex,
  BodySmall,
  Globe,
} from '@river/design-system';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className='px-5 w-[208px]' side={'left'}>
        <div className='grid gap-4 py-4'>
          <Flex className='items-center gap-x-2'>
            {/* TODO: replace with custom `SearchIcon` */}
            <MagnifyingGlassIcon fill={'#484848'} />
            <BodySmall>Search</BodySmall>
          </Flex>
          <Flex className='items-center gap-x-2'>
            <Globe />
            <BodySmall>Home</BodySmall>
          </Flex>
          <BodySmall className='text-sonic-silver font-medium'>
            My Channels
          </BodySmall>
        </div>
        <SheetFooter>{/* Auth Placeholder */}</SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
