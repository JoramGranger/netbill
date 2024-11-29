import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Wifi } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-blue-500 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-6 shadow-xl">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Wifi className="h-12 w-12 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-900">WiFi Hotspot Billing</h1>
          <p className="text-gray-600">Choose an option to get connected</p>
        </div>
        <div className="space-y-4">
          <Link href="/buy" className="w-full">
            <Button className="w-full bg-blue-500 hover:bg-blue-600">Buy Package</Button>
          </Link>
          <Link href="/voucher" className="w-full">
            <Button variant="outline" className="w-full">Enter Voucher</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
