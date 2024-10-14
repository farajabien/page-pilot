'use client'
import PayButton from '@/components/payment/PayButton'
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import BookCalendly from './BookCalendly'
import Link from 'next/link'
import { toast } from 'sonner'

const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || ''

const amount = 10
export default function PayButtonPageClient() {
	const config = {
		email: 'faraja.bien@gmail.com',
		amount: amount * 100, // Amount in cents
		publicKey,
		text: `Pay Now (${amount} KES)`,
		currency: 'KES',
	}

	const handleSuccess = (reference: string) => {
		// Ensure this code runs only in the browser
		if (typeof window !== 'undefined') {
			toast.success('Payment Success', { description: reference })
			console.log('Payment successful, reference:', reference)
		}
	}

	// Ensure this code runs only in the browser
	const handleClose = () => {
		if (typeof window !== 'undefined') {
			console.log('Payment dialog closed')
		}
	}

	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<main className='container mx-auto px-4 pt-8 max-w-4xl flex-grow'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl font-bold mb-4'>Payment Demo</h1>
					<p className='text-lg mb-6 text-muted-foreground'>
						Experience seamless payment processing for your business.
					</p>
				</div>

				<div className='text-center mb-8'>
					<h2 className='text-2xl font-semibold mb-4'>Pay for Services</h2>
					<PayButton
						config={config}
						onSuccess={handleSuccess}
						onClose={handleClose}
					/>
				</div>

				<Alert className='mb-8 bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-lg shadow-md'>
					<AlertTitle className='font-semibold'>
						Ready to Enhance Your Payment Experience?
					</AlertTitle>
					<AlertDescription>
						If you’re a business or service provider looking to implement
						payment features like this on your website, let me know!
					</AlertDescription>
				</Alert>

				<div className='flex flex-col items-center mb-8'>
					<BookCalendly />
					<div className='text-center'>
						<h2 className='text-xl font-semibold mb-2'>Contact Information</h2>
						<p>
							Email:
							<Link
								href={`mailto:faraja.bien@gmail.com`}
								className='text-primary'
								aria-label='Email Faraja Bien'>
								faraja.bien@gmail.com
							</Link>
						</p>
						<p>
							WhatsApp:
							<Link
								href={`https://wa.me/+254793643308`}
								className='text-primary'
								aria-label='WhatsApp Faraja Bien'>
								+254793643308
							</Link>
						</p>
					</div>
				</div>
			</main>
		</div>
	)
}
