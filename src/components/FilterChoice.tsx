'use client'
import { Ref, forwardRef } from 'react';
import Arrow, {Direction} from '@/components/Arrow'
import { useState } from 'react'

export default forwardRef(function FilterChoice({name, options} : {name: string, options: string[]}, ref: any) {
	const [showMenu, setShowMenu] = useState(false);

	if (options)
		options = options.filter((o:any) => o != 'not_specified');
	const length = options?.length ?? 0;

	return <div
		className="relative py-2 px-5 w-48 flex justify-center items-center cursor-pointer outline-dark hover:outline outline-1"
		onMouseOver={() => setShowMenu(true)}
		onMouseOut={() => setShowMenu(false)}
	>
		<span className="text-lg">{name}</span>
		<Arrow direction={Direction.Down} />
		<select ref={ref} className={`${showMenu ? 'block' : 'hidden'} absolute top-full bg-white w-48 outline-1 outline-dark outline translate-y-[1px] max-h-none`} size={Math.min(10, length)} multiple>
			{options && options.map(option =>
				<option className="p-2 hover:bg-dark/10" key={option} value={option}>
					{name != 'Локация'
						? option.split('"')[1] : option.split('.').at(-1)
					}</option>	
			)}
		</select>
	</div>
})
