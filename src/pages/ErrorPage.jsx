import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-8'>
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p className='text-xl'>Sorry, an unexpected error has occurred.</p>
      <p className='text-md text-gray-500'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
