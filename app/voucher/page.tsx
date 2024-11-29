'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

export default function EnterVoucher() {
  const [voucherCode, setVoucherCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!voucherCode) return

    if (!/^\d{7}$/.test(voucherCode)) {
      toast.error('Please enter a valid 7-digit voucher code')
      return
    }

    setIsLoading(true)
    try {
      // Simulate voucher activation
      await new Promise(resolve => setTimeout(resolve, 2000))
      // Redirect to success page
      router.push('/success?activated=true')
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => router.push('/')} className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Enter Voucher</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="voucher">Voucher Code</Label>
            <Input
              id="voucher"
              type="text"
              placeholder="Enter your voucher code"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={!voucherCode || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Activating...
              </>
            ) : (
              'Activate Voucher'
            )}
          </Button>
        </form>
      </div>
    </main>
  )
}

