'use client'
import {useState, useEffect, useRef} from 'react'
import {get} from '@/util/request'
import FilterChoice from '@/components/FilterChoice'
import PeopleList from '@/components/PeopleList'

export default function Staff() {
	const [data, setData] = useState<any>({staff: [], filterValues: {}})
	const locationRef = useRef<HTMLSelectElement>()
	const subdivisionRef = useRef<HTMLSelectElement>()
	const departmentRef = useRef<HTMLSelectElement>()
	const groupRef = useRef<HTMLSelectElement>()

	const getdefault = () => {
		get('/structure/get').then(data => {
			const staff = data.employees.filter((p: any) => p.full_name != 'Вакансия');
			const filterValues = data.new_filters;
			console.log(filterValues.location)
			setData({staff, filterValues: filterValues})
		})
	}

	useEffect(() => {
		getdefault();
		
	}, [data.length])

	const reload = () => {
		console.log(locationRef.current)
		// console.log(Array.from(locationRef.current!.options).filter(opt => opt.selected).map(opt => opt.value))

		const params: any = {}

		if (locationRef.current!.value)
			params["location"] = locationRef.current!.value;

		if (subdivisionRef.current!.value)
			params["subdivision"] = subdivisionRef.current!.value;

		if (departmentRef.current!.value)
			params["department"] = departmentRef.current!.value;

		if (groupRef.current!.value)
			params["group"] = groupRef.current!.value;

		get('/structure/get', params).then(data => {
			console.log(data)
			const staff = data.employees.filter((p: any) => p.full_name != 'Вакансия');
			const filterValues = data.new_filters;
			console.log(filterValues.location)
			setData({staff, filterValues: filterValues})
		})
	}

	return (
		<main>
			<div className="container mx-auto">
				<h1 className="text-3xl mb-4 mt-16">Сотрудники</h1>
			</div>
			<div className="filters border-dark border-b-1 border-t-1">
				<div className="container mx-auto flex">
					<FilterChoice ref={locationRef} name="Локация" options={data.filterValues.location} />
					<FilterChoice ref={subdivisionRef} name="Подразделение" options={data.filterValues.subdivision} />
					<FilterChoice ref={departmentRef} name="Отдел" options={data.filterValues.department} />
					<FilterChoice ref={groupRef} name="Группа" options={data.filterValues.group} />
					<div className="my-auto">
						<button onClick={reload} className="px-4 py-1 ml-2 block border-dark border-1">Обновить</button>
					</div>
					<div className="my-auto">
						<button onClick={getdefault} className="px-4 py-1 ml-2 block border-dark border-1">Сбросить</button>
					</div>
					
				</div>
			</div>
			<div className="container mx-auto">
				<PeopleList data={data.staff}/>
			</div>
		</main>
	)
}