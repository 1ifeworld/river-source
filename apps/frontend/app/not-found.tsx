import Link from 'next/link';
import { Body, Stack } from '@river/design-system';
import { FourOhFour } from '../components/server/FourOhFour';

export default function NotFound() {
  return (
    <Stack className='items-center justify-center gap-[280px]'>
      <FourOhFour />
      <Body className='text-label'>
        page not found,{' '}
        <Link className='underline hover:text-label-muted' href='/'>
          go back
        </Link>
      </Body>
    </Stack>
  );
}
