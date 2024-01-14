'use client'
import {useState, useEffect} from 'react'
import {get} from '@/util/request'
import FancyFont from "./FancyFont"
import Image from "next/image"

export default function LocationCard({name, src, div, emp}: {name: string, src: string, div: number, emp: number}) {
	const [data, setData] = useState({divisions: 0, employees: 0})
	const locationName = name == 'Штаб' ? name : 'Брусника.' + name
	useEffect(() => {
		get('/structure/get', {'location': locationName}).then(res => {
			setData({
				employees: res.employees.length,
				divisions: res.new_filters.subdivision.length
			});
		});
	}, [data.employees, locationName])

	return <div className="flex flex-col items-center hover:scale-[1.02] hover:shadow-md hover:shadow-dark/10 cursor-pointer transition-all">
		<FancyFont>
			<div className="flex flex-col bg-grey">
			<Image src={src} alt={name} width={302} height={160} />
			
			<div className="p-4">

				<span className="text-xl text-center block">{name}</span>
				<div className="flex my-4 justify-between items-center border-b-1 border-dark">
					<span className="max-w-[12ch] text-center inline-block">Количество подразделений</span>
					<span className="text-xl w-8 block text-center">{data.divisions ? data.divisions : '-'}</span>
				</div>
				<div className="flex justify-between items-center border-b-1 border-dark">
					<span className="max-w-[12ch] text-center inline-block">Количество сотрудников</span>
					<span className="text-xl w-8 block text-center">{data.employees ? data.employees : '-'}</span>
				</div>
			</div>
			</div>
		</FancyFont>
	</div>
}