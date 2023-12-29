'use client'
import {useState, useEffect} from 'react';
import UnitList from '@/components/UnitList';
import {get} from '@/util/request'

export default function Divisions() {
	const [data, setData] = useState<any[]>([])
	useEffect(() => {
		get('/structure/field', {field: 'subdivision'}).then(res => {
			setData(res);
		});
	}, [data.length])
	return (
		<main>
			<div className="container mx-auto">
				<UnitList
					name="Подразделения"
					single="Подразделение"
					firstName="сотрудников"
					secondName="отделов"
					data={data}
					param="subdivision"
					subparam="department" />
			</div>
		</main>
	);
}