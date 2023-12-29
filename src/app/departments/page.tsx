'use client'
import {useState, useEffect} from 'react';
import {get} from '@/util/request'
import UnitList from '@/components/UnitList';

export default function Departments() {
	const [data, setData] = useState<any[]>([])

	useEffect(() => {
		get('/structure/get').then(res => {
			setData(res.new_filters.department.filter((s: any) => s != 'not_specified'));
		});
	}, [data.length])
	return (
		<main>
			<div className="container mx-auto">
				<UnitList
					name="Отделы"
					single="Отдел"
					firstName="сотрудников"
					secondName="групп"
					data={data}
					param="department"
					subparam="group" />
			</div>
		</main>
	);
}