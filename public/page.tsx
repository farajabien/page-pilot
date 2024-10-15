import { Star } from 'lucide-react'
import Link from 'next/link'
import {

	ExternalLink,

	Award,
	Code,

	Briefcase,
	FileText,
	User,
	Book,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	projects,
	kwetunovaProjects,
	techStack,
	socialLinks,
	achievements,
	Project,
	Achievement,
} from '@/lib/utils'
import SocialLink from '@/components/SocialLink'
import Section from '@/components/Section'
import { Card } from '@/components/ui/card'
import BookCalendly from '@/components/BookCalendly'

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<Card className='p-6 hover:shadow-xl transition-shadow relative group'>
			{index === 0 && <Star className='absolute top-2 right-2 text-primary' />}
			<h3 className='text-2xl font-semibold mb-2'>{project.title}</h3>
			<p className='text-sm text-muted-foreground mb-4'>{project.subtitle}</p>
			<p className='mb-4'>{project.description}</p>
			<div className='flex flex-wrap gap-2 mb-4'>
				{project.technologies.map((tech) => (
					<span
						key={tech}
						className='inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full transition-colors duration-300 hover:bg-primary/20'>
						{tech}
					</span>
				))}
			</div>
			{project.link && (
				<div className='mt-4'>
					<Button asChild variant='outline' size='sm'>
						<Link
							href={project.link}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center'>
							Visit site <ExternalLink className='ml-2 w-4 h-4' />
						</Link>
					</Button>
				</div>
			)}
		</Card>
	)
}

export default function Home() {
	return (
		<div className='min-h-screen bg-background text-foreground flex flex-col'>
			<main className='container mx-auto px-2 md:px-4 pt-4 md:pt-8 max-w-4xl flex-grow'>
				<div className='text-center mb-12 md:mb-16'>
					<h1 className='text-4xl md:text-5xl font-bold mb-4 animate-fade-in'>
						Faraja<span className='text-primary'>Bien</span>
					</h1>
					<p className='text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground'>
						Full-Stack Developer & Startup Innovator
					</p>
					<div className='flex flex-wrap justify-center gap-4 mb-6 md:mb-8'>
						{socialLinks.map((link) => (
							<SocialLink
								key={link.label}
								href={link.href}
								icon={link.icon}
								label={link.label}
							/>
						))}
					</div>
					<div className='flex flex-col sm:flex-row justify-center gap-4 mb-8'>
						<Button asChild variant='outline' size='lg'>
							<Link
								href='/files/farajabien_resume_2024.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center'>
								<FileText className='mr-2 h-4 w-4' /> View Resume
							</Link>
						</Button>
						<Button asChild variant='outline' size='lg'>
							<Link href='/resources' className='inline-flex items-center'>
								<Book className='mr-2 h-4 w-4' /> Resources
							</Link>
						</Button>
						<Button asChild variant='outline' size='lg'>
							<Link
								href='/online-payment-button'
								className='inline-flex items-center'>
								<ExternalLink className='mr-2 h-4 w-4' /> Go to Payment Demo
							</Link>
						</Button>
					</div>
				</div>

				<Section title='About Me' icon={User}>
					<p className='mb-4'>
						As a full-stack developer and tech entrepreneur, I specialize in
						rapidly prototyping and implementing innovative solutions tailored
						for the African market. My approach bridges the gap between ideation
						and implementation, making me an asset for startups and established
						companies.
					</p>
				</Section>

				<Section title='Skills' icon={Award}>
					<h3 className='text-xl font-semibold mb-4'>Technology Stack</h3>
					<div className='flex flex-wrap gap-2'>
						{techStack.map((tech) => (
							<span
								key={tech.name}
								className='bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm'>
								{tech.name}
							</span>
						))}
					</div>
				</Section>

				<Section title='Featured Projects' icon={Code}>
					<div className='text-right text-sm text-muted-foreground mb-2'>
						Total Projects: {projects.length}
					</div>
					<div className='grid md:grid-cols-2 gap-8'>
						{projects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</div>
				</Section>

				<Section title='Kwetunova Web Agency Projects' icon={Briefcase}>
					<div className='text-right text-sm text-muted-foreground mb-2'>
						Total Projects: {kwetunovaProjects.length}
					</div>
					<div className='grid md:grid-cols-2 gap-8'>
						{kwetunovaProjects.map((project, index) => (
							<ProjectCard
								key={project.title}
								project={project}
								index={index}
							/>
						))}
					</div>
				</Section>

				<Section title='Achievements' icon={Star}>
					<div className='grid md:grid-cols-2 gap-8'>
						{achievements.map((achievement) => (
							<Card
								key={achievement.title}
								className='p-6 hover:shadow-lg transition-shadow'>
								<h3 className='text-2xl font-semibold mb-2'>
									{achievement.title}
								</h3>
								<p className='text-sm text-muted-foreground mb-4'>
									{achievement.description}
								</p>
							</Card>
						))}
					</div>
				</Section>
				<BookCalendly />
			</main>
		</div>
	)
}
