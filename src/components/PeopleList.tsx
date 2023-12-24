export default function PeopleList({data}: {data: any}) {
	return <div className="grid grid-cols-4 gap-4 mt-10">
		{data.map((person: any) => 
			<div className="border-dark border-1 p-4" key={person.name}>
				<div className="bold">{person.name}</div>
				<div>{person.position}</div>
				<div>{person.type}</div>
			</div>
		)}
	</div>
}