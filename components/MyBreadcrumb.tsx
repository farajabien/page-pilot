import React from 'react'
import {
	Breadcrumb as BreadcrumbRoot,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'

interface BreadcrumbProps {
	items: {
		href?: string
		label: string
	}[]
}

export function MyBreadcrumb({ items }: BreadcrumbProps) {
	return (
		<BreadcrumbRoot>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>
						<Home className='h-4 w-4' />
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				{items.map((item, index) => (
					<React.Fragment key={index}>
						<BreadcrumbItem>
							{index === items.length - 1 ? (
								<BreadcrumbPage>{item.label}</BreadcrumbPage>
							) : (
								<BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
							)}
						</BreadcrumbItem>
						{index < items.length - 1 && <BreadcrumbSeparator />}
					</React.Fragment>
				))}
			</BreadcrumbList>
		</BreadcrumbRoot>
	)
}
