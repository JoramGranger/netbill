'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone');
  const activated = searchParams.get('activated');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-6 shadow-xl text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="text-2xl font-bold text-gray-900">Success!</h1>
        {phone ? (
          <p className="text-gray-600">
            Your package has been purchased. A voucher code has been sent to {phone}.
          </p>
        ) : activated ? (
          <p className="text-gray-600">
            Your voucher has been activated. You can now access the internet.
          </p>
        ) : null}
        <Link href="/">
          <Button className="mt-4 bg-black hover:bg-gray-800 text-white">Back to Home</Button>
        </Link>
      </div>
    </main>
  );
}

export default function Success() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}