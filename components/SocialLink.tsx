// components/SocialLink.tsx
import Link from 'next/link'

interface SocialLinkProps {
	href: string
	icon: React.ComponentType<{ className?: string }>
	label: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
	return (
		<Link
			href={href}
			className='text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary'
			aria-label={label}>
			<Icon className='w-6 h-6' />
		</Link>
	)
}

export default SocialLink
