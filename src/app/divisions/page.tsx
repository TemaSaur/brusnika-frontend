import UnitList from '@/components/UnitList';

export default function Divisions() {
	const data = [
		{
			name: "Орион",
			first: 23,
			second: 78,
		},
		{
			name: "Не Орион",
			first: 32,
			second: 102,
		},
		{
			name: "Следующее",
			first: 10,
			second: 59,
		},
		{
			name: "Без данных",
		},
		{
			name: "Последнее",
			first: 20,
			second: 120,
		},
	];
	return (
		<main>
			<div className="container mx-auto">
				<UnitList
					name="Подразделения"
					single="Подразделение"
					firstName="отделов"
					secondName="сотрудников"
					data={data} />
			</div>
		</main>
	);
}