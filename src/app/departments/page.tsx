import UnitList from '@/components/UnitList';

export default function Departments() {
	const data = [
		{
			name: 'Отдельный',
			first: 5,
			second: 30,
		},
		{
			name: 'Не Орион',
			first: 3,
			second: 26,
		},
		{
			name: 'Еще один',
			first: 10,
			second: 50,
		},
		{
			name: 'Без данных',
		},
		{
			name: 'Хороший',
			first: 1,
			second: 27,
		},
		{
			name: 'Спортивный',
			first: 20,
			second: 180,
		},
		{
			name: 'Орион',
			first: 4,
			second: 20
		},
		{
			name: 'Дракон',
			first: 5,
			second: 36
		},
		{
			name: 'Новый',
			first: 4,
			second: 87,
		}
	];
	return (
		<main>
			<div className="container mx-auto">
				<UnitList
					name="Отделы"
					single="Отдел"
					firstName="групп"
					secondName="сотрудников"
					data={data} />
			</div>
		</main>
	);
}