'use client'

import React from 'react'
import { PaystackButton } from 'react-paystack'

interface PayButtonProps {
	config: {
		email: string
		amount: number // amount should be in cents
		publicKey: string
		text: string
		currency: string
		channels?: string[]
		metadata?: {
			name?: string
			phone?: string
		}
	}
	onSuccess: (reference: string) => void
	onClose: () => void
}

const PayButton: React.FC<PayButtonProps> = ({
	config,
	onSuccess,
	onClose,
}) => {
	const handleSuccess = (response: { reference: string }) => {
		onSuccess(response.reference)
	}

	const componentProps = {
		...config,
		onSuccess: handleSuccess,
		onClose,
	}

	return (
		<PaystackButton
			className='paystack-button 
			bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300'
			{...componentProps}
		/>
	)
}

export default PayButton
