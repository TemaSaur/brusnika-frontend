import Image from "next/image"
import Link from "next/link"
import FancyFont from "@/components/FancyFont"

export default function Header() {
	return <footer className="bg-grey py-10 mt-16">
		<div className="container mx-auto flex justify-between">
			<Link href="/" className="flex gap-4 items-center">
				<Image src="icon.svg" alt="" width={54} height={22} />
				<FancyFont>
					<span className="text-lg">BRUSNIKA</span>
				</FancyFont>
			</Link>
			<div>
				<div className="flex flex-col gap-2">
					<span className="underline">Контактная информация</span>
					<span>8 (800) 123-45-12</span>
					<span>brusnika@gmail.com</span>
				</div>
			</div>
		</div>	
	</footer>
}