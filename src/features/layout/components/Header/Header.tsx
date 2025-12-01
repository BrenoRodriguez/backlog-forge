import { Title } from '@/components'
import { Navbar } from './NavBar'

export const Header = () => {
  return (
    <header className='flex items-end justify-between p-10'>
      <Title as='h1' type='header' size='header'>
        Backlogg
        <span className='text-accent-light'>y</span>
      </Title>
      <Navbar />
    </header>
  )
}
