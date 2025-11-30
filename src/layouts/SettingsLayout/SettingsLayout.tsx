import { Title } from '@/components/Title'
import { Button } from '@/components/ui/button'
import { FormProvider, useForm } from 'react-hook-form'
import { Outlet } from 'react-router'
import { twJoin } from 'tailwind-merge'
import { SettingsNavBar } from './components'

export const SettingsLayout = () => {
  const form = useForm({})
  return (
    <main className='flex w-full flex-col items-center'>
      <Title>Settings</Title>
      <section className='flex gap-8 pt-16'>
        <SettingsNavBar />
        <FormProvider {...form}>
          <form className='flex w-96 flex-col gap-6'>
            <Outlet />
            <Button
              type='submit'
              className={twJoin(
                'mt-8 cursor-pointer bg-accent-normal font-normal',
                'text-lg uppercase tracking-wide hover:bg-accent-light',
              )}
            >
              Save Changes
            </Button>
          </form>
        </FormProvider>
      </section>
    </main>
  )
}
