import FancyFont from "./FancyFont"
import Image from "next/image"

export default function LocationCard({name, firstName, first, secondName, second}: {name: string, firstName: string, first: number, secondName: string|undefined, second: number|undefined}) {
	return <div className="hover:scale-[1.02] hover:shadow-md hover:shadow-dark/10 cursor-pointer transition-all border-1 border-dark">
		<FancyFont>
			<div className="flex flex-col">
			
			<span className="text-lg text-center block p-2 border-dark border-b-1">{name}</span>
				
			<div className="p-4">
				<div className="flex mb-4 justify-between items-center border-b-1 border-dark">
					<span className="text-sm max-w-[12ch] text-center inline-block">Количество {firstName}</span>
					<span className="text-xl w-8 block text-center">{first ? first : '-'}</span>
				</div>
				{secondName &&
					<div className="flex justify-between items-center border-b-1 border-dark">
						<span className="text-sm max-w-[12ch] text-center inline-block">Количество {secondName}</span>
						<span className="text-xl w-8 block text-center">{second ? second : '-'}</span>
					</div>
				}
			</div>
			</div>
		</FancyFont>
	</div>
}