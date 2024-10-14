import React, { ReactNode } from 'react'

interface SectionProps {
	title: string
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	children?: ReactNode
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, children }) => {
	return (
		<section className='bg-card text-card-foreground p-4 mx-0 md:mx-2 my-4 rounded-lg shadow-md'>
			<div className='flex items-center space-x-2 mb-4'>
				<Icon className='h-6 w-6 text-primary' aria-hidden='true' />
				<h2 className='text-xl font-bold'>{title}</h2>
			</div>
			<div className='section-content'>{children}</div>
		</section>
	)
}

export default Section
