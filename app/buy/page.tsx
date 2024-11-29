'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { toast } from 'react-hot-toast'

const packages = [
  { id: 1, name: '12 Hours', price: 1000, duration: '12 hours' },
  { id: 2, name: '24 Hours', price: 1500, duration: '24 hours' },
  { id: 3, name: '1 Week', price: 9000, duration: '1 week' },
]

export default function BuyPackage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPackage || !phoneNumber) return

    if (!/^\d{10}$/.test(phoneNumber)) {
      toast.error('Please enter a valid 10-digit phone number')
      return
    }

    setIsLoading(true)
    try {
      // Simulate payment and voucher generation
      await new Promise(resolve => setTimeout(resolve, 2000))
      // Redirect to success page
      router.push(`/success?phone=${phoneNumber}`)
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-2xl space-y-8 rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center">
          <Button variant="ghost" onClick={() => router.push('/')} className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Choose a Package</h1>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`cursor-pointer transition-all ${selectedPackage === pkg.id ? 'ring-2 ring-blue-500' : ''}`} onClick={() => setSelectedPackage(pkg.id)}>
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
                <CardDescription>{pkg.duration}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{pkg.price} UGX</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white" disabled={!selectedPackage || !phoneNumber || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Buy Now'
            )}
          </Button>
        </form>
      </div>
    </main>
  )
}

