'use client'
import Arrow, {Direction} from '@/components/Arrow'
import { useState } from 'react'

export default function FilterChoice({name, options} : {name: string, options: string[]}) {
	const [showMenu, setShowMenu] = useState(false);

	return <div
		className="relative py-2 px-5 w-48 flex justify-center items-center cursor-pointer outline-dark hover:outline outline-1"
		onMouseOver={() => setShowMenu(true)}
		onMouseOut={() => setShowMenu(false)}
	>
		<span className="text-lg">{name}</span>
		<Arrow direction={Direction.Down} />
		<div className={`${showMenu ? 'block' : 'hidden'} absolute top-full bg-white w-48 outline-1 outline-dark outline translate-y-[1px]`}>
			{options.map(option =>
				<div className="p-2 underline hover:bg-dark/10" key={option}>{option}</div>	
			)}
		</div>
	</div>
} 