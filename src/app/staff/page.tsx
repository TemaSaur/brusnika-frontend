import Locations from '@/components/Locations'
import FancyFont from '@/components/FancyFont'
import FilterChoice from '@/components/FilterChoice'
import PeopleList from '@/components/PeopleList'

export default function Staff() {
	const locations = [
		'Екатеринбург',
		'Курган',
		'Омск',
	]
	const divisions = [
		'Орион',
		'Не Орион',
		'Еще один',
		'Без данных',
		'Хороший',
	]
	const departments = [
		'Отдельный',
		'Не Орион',
		'Еще один',
		'Без данных',
		'Хороший',
		'Спортивный',
		'Орион',
		'Дракон',
		'Новый',
	]
	const groups = [
		"Орион",
		"Дружная",
		"Новая",
		"Без данных",
		"Разработчики",
	]
	const people = [
		{
			name: 'Иванова Кристина Михайловна',
			position: 'Специалист',
			type: 'Бизнес',
		}
	]
	for (let i = 0; i < 20; ++i)
	{
		people.push(
			{
				name: `Сотрудник ${i}`,
				position: 'Должность',
				type: 'Тип работы'
			}
		)
	}
	return (
		<main>
			<div className="container mx-auto">
				<h1 className="text-3xl mb-4 mt-16">Сотрудники</h1>
			</div>
			<div className="filters border-dark border-b-1 border-t-1">
				<div className="container mx-auto flex">
					<FilterChoice name="Локация" options={locations} />
					<FilterChoice name="Подразделение" options={divisions} />
					<FilterChoice name="Отдел" options={departments} />
					<FilterChoice name="Группа" options={groups} />
				</div>
			</div>
			<div className="container mx-auto">
				<PeopleList data={people}/>
			</div>
		</main>
	)
}