'use client'
import { useState, useEffect } from "react"

export default function Infos() {
	const [locations, setLocations] = useState<string[]>([])
	const [subdivisions, setSubdivisions] = useState<string[]>([])
	useEffect(() => {
		setLocations([
			'Дирекция',
			'Проектирование',
			'Екатеринбург',
			'Новосибирск',
			'Московская область',
			'Тюмень',
			'Омск',
			'Сургут',
			'Курган',
		]);
		setSubdivisions([
			'Арес',
			'Артемида',
			'Апполон',
			'Афина',
			'Гефест',
			'Персей',
			'Орфей',
			'Геракл',
			'Афродита',
			'Посейдон',
			'Гера',
			'Зевс',
			'Гестия',
			'Тессей',
			'Одиссей',
			'Ахилл'
		])
	}, [setLocations, setSubdivisions])

	return <div className="infos">
		<h2 className="text-center text-lg pb-4">Company Information</h2>

		<div className="infos-data grid grid-cols-3">
			<div className="location-list bg-red-50 py-6">
				<h3 className="text-center">Location List</h3>
				{locations.map((loc, i) =>
					<p key={i} className="py-1 mx-4 border-b-2 border-black">{loc}</p>
				)}
			</div>
			<div className="subdivisions col-span-2 bg-red-100 py-6">
				<h3 className="text-center">Subdivision List</h3>
				<div className="grid grid-cols-2">
					{subdivisions.map((loc, i) =>
						<p key={i} className="py-1 mx-4 border-b-2 border-black">{loc}</p>
					)}
				</div>
				
			</div>
		</div>
		
	</div>
}