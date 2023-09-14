import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <h1 className='text-2xl'>Tradehub</h1>
      <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href="/">New</Link>
    </div>
  )
}

export default Header
