// app/auth/signin/page.tsx
'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignIn() {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		const res = await signIn('credentials', {
			redirect: false,
			email,
			password,
		})

		if (res?.ok) {
			router.push('/protected')
		} else {
			alert('Invalid credentials')
		}
	}

	return (
		<div className='container mx-auto px-4 py-16 max-w-md'>
			<h2 className='text-2xl font-semibold mb-4 text-center'>Sign In</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label className='block text-sm font-medium'>Email</label>
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className='mt-1 block w-full border border-gray-300 rounded-md p-2'
					/>
				</div>
				<div>
					<label className='block text-sm font-medium'>Password</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className='mt-1 block w-full border border-gray-300 rounded-md p-2'
					/>
				</div>
				<button
					type='submit'
					className='bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors'>
					Sign In
				</button>
			</form>
		</div>
	)
}
