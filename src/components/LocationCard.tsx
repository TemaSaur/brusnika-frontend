import FancyFont from "./FancyFont"

export default function LocationCard({name, src, div, emp}: {name: string, src: string, div: number, emp: number}) {
	return <div className="flex flex-col items-center hover:scale-[1.02] hover:shadow-md hover:shadow-dark/10 cursor-pointer transition-all">
		<FancyFont>
			<div className="flex flex-col bg-grey">
			<img src={src} />
			<div className="p-4">

				<span className="text-xl text-center block">{name}</span>
				<div className="flex my-4 justify-between items-center border-b-1 border-dark">
					<span className="max-w-[12ch] text-center inline-block">Количество подразделений</span>
					<span className="text-xl w-8 block text-center">{div ? div : '-'}</span>
				</div>
				<div className="flex justify-between items-center border-b-1 border-dark">
					<span className="max-w-[12ch] text-center inline-block">Количество сотрудников</span>
					<span className="text-xl w-8 block text-center">{emp ? emp : '-'}</span>
				</div>
			</div>
			</div>
		</FancyFont>
	</div>
}