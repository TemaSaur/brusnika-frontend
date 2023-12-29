'use client'
import {useState, useEffect} from 'react';
import {get} from '@/util/request'
import UnitList from '@/components/UnitList';

export default function Groups() {
	const [data, setData] = useState<any[]>([])

	useEffect(() => {
		get('/structure/get').then(res => {
			setData(res.new_filters.group.filter((s: any) => s != 'not_specified'));
		});
	}, [data.length])
	return (
		<main>
			<div className="container mx-auto">
				<UnitList
					name="Группы"
					single="Группа"
					firstName="сотрудников"
					secondName=""
					data={data}
					param="group" />

			</div>
		</main>
	);
}