'use client'
import React, { useEffect, useState } from 'react'
import { PopupButton } from 'react-calendly'

export default function BookCalendly() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<PopupButton
			url='https://calendly.com/farajabien'
			rootElement={document.body}
			text='Schedule a Call'
			prefill={{
				name: 'Your Name',
				email: 'your@email.com',
				customAnswers: {
					a1: 'Meeting with Bienvenu Faraja',
					a2: 'Discuss potential collaboration or project',
				},
			}}
			className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
		/>
	)
}
