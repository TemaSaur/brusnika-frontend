import UnitList from '@/components/UnitList';

export default function Divisions() {
	const data = [
		{
			name: "Орион",
			first: 23,
		},
		{
			name: "Дружная",
			first: 32,
		},
		{
			name: "Новая",
			first: 10,
		},
		{
			name: "Без данных",
		},
		{
			name: "Разработчики",
			first: 20,
			second: 120,
		},
	];
	return (
		<main>
			<div className="container mx-auto">
				<UnitList
					name="Группы"
					single="Группа"
					firstName="сотрудников"
					secondName=""
					data={data} />
			</div>
		</main>
	);
}