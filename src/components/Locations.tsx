import LocationCard from "./LocationCard";

export default function Locations() {
	const locations = [
		{
			name: 'Екатеринбург',
			src: '/loc/ekb.png',
			divisions_number: 24,
			employees_number: 340,
		},
		{
			name: 'Курган',
			src: '/loc/krg.png',
			divisions_number: NaN,
			employees_number: NaN,
		},
		{
			name: 'Омск',
			src: '/loc/oms.png',
			divisions_number: NaN,
			employees_number: NaN,
		},
		{
			name: 'Новосибирск',
			src: '/loc/nsb.png',
			divisions_number: NaN,
			employees_number: NaN,
		},
		{
			name: 'Сургут',
			src: '/loc/srg.png',
			divisions_number: NaN,
			employees_number: NaN,
		},
		{
			name: 'Тюмень',
			src: '/loc/tmn.png',
			divisions_number: NaN,
			employees_number: NaN,
		},
		{
			name: 'Московская область',
			src: '/loc/msc.png',
			divisions_number: NaN,
			employees_number: NaN,
		},
		{
			name: 'Штаб',
			src: '/loc/hq.png',
			divisions_number: NaN,
			employees_number: NaN,
		},
	];

	return <div>
		<span className="text-2xl mb-4 block uppercase">Наши локации</span>
		<div className="grid grid-cols-4 gap-8">
			{locations.map(({name, src, divisions_number, employees_number}) =>
				<LocationCard name={name} src={src} div={divisions_number} emp={employees_number} key={name} />
			)}
		</div>
	</div>
}