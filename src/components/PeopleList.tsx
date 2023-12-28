export default function PeopleList({data}: {data: any}) {
	return <div className="grid grid-cols-4 gap-4 mt-10">
		{data.map((person: any) => 
			<div className="border-dark border-1 p-4 flex flex-col gap-3" key={person.full_name}>
				<div className="font-black">{person.full_name}</div>
				<div>{person.job_title}</div>
				<div>{person.type_of_work}</div>
			</div>
		)}
	</div>
}