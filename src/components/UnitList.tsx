import FancyFont from '@/components/FancyFont'
import UnitCard from '@/components/UnitCard'

export default function UnitList({name, single, firstName, secondName, data, param, subparam}
	: {name: string, single: string, firstName: string, secondName: string, data: any, param: string, subparam?: string}) {
	return <div className="mt-16">
		<h1 className="text-3xl mb-4">{name}</h1>
		<div className="grid grid-cols-4 gap-8">
			{data.map((unit: any) =>
				<UnitCard
					name={unit}
					firstName={firstName}
					first={unit.first}
					secondName={secondName}
					second={unit.second}
					key={unit}
					param={param}
					subparam={subparam}/>
			)}
		</div>
	</div>
}