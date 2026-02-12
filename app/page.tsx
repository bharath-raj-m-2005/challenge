'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SECRET_CODE = 'steganography';
const DAWN_IMAGE = '/imagee.jpg';

export const dynamic = 'force-static';

export default function Home() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      setError('Please enter the code');
      return;
    }

    if (code.toLowerCase() === SECRET_CODE) {
      setIsLoading(true);
      localStorage.setItem('authenticated', 'true');
      router.push('/download');
    } else {
      setError('Incorrect code. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Welcome to the Secret Vault
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Unlock the hidden treasure with the right code
          </p>
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={DAWN_IMAGE}
            alt="Dawn landscape"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-md mx-auto space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  if (error) setError('');
                }}
                className="w-full px-4 py-3 text-lg text-center text-gray-900 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Enter the secret code"
                autoComplete="off"
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Unlocking...' : 'Unlock'}
            </button>
          </form>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hint: The code is hidden in plain sight
          </p>
        </div>
      </div>
    </div>
  );
}