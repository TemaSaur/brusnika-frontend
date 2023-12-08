import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ weight: '400', subsets: ['latin'] })

export default function FancyFont({ children }
	: { children: React.ReactNode }) {
	return (
		<div className={playfair.className}>
			{children}
		</div>
  )
}
