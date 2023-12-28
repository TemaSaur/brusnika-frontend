'use client'
import {useState, useEffect} from 'react'
import {get} from '@/util/request'
import FancyFont from "./FancyFont"

export default function LocationCard({name, firstName, first, secondName, second, param}: {name: string, firstName: string, first: number, secondName: string|undefined, second: number|undefined, param: string}) {
	const [data, setData] = useState(0)
	useEffect(() => {
		const params: any = {}
		params[param] = name
		get('/structure/get', {subdivision: name}).then(res => {
			setData(res.employees.length);
			console.log(res)
		});
	}, [data, name, param])

	first = data;

	return <div className="hover:scale-[1.02] hover:shadow-md hover:shadow-dark/10 cursor-pointer transition-all border-1 border-dark">
		<FancyFont>
			<div className="flex flex-col">
			
			<span className="text-lg text-center block p-2 border-dark border-b-1">{name}</span>
				
			<div className="p-4">
				<div className="flex mb-4 justify-between items-center border-b-1 border-dark">
					<span className="text-sm max-w-[12ch] text-center inline-block">Количество {firstName}</span>
					<span className="text-xl w-8 block text-center">{first ? first : '-'}</span>
				</div>
				{/* {secondName &&
					<div className="flex justify-between items-center border-b-1 border-dark">
						<span className="text-sm max-w-[12ch] text-center inline-block">Количество {secondName}</span>
						<span className="text-xl w-8 block text-center">{second ? second : '-'}</span>
					</div>
				} */}
			</div>
			</div>
		</FancyFont>
	</div>
}