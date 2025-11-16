import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p className="mt-2">Page Not Found</p>
      <Link href="/" className="mt-4 px-4 py-2 md:px-6 py-3 bg-black text-white rounded-3xl">Go to Home</Link>
    </div>
  )
}