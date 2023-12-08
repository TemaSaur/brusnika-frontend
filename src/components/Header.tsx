// import Image from "next/image"
import Link from "next/link"
import FancyFont from "./FancyFont"

export default function Header() {
	return <header className="bg-dark py-10">
		<div className="container flex justify-between mx-auto items-center">
			<Link href="/"><img src="logo.svg" alt="Брусника" /></Link>

			<FancyFont>
				<nav className="flex gap-20 uppercase">
					<Link href="/" className="text-white">Подразделения</Link>
					<Link href="/" className="text-white">Отделы</Link>
					<Link href="/" className="text-white">Группы</Link>
					<Link href="/" className="text-white">Сотрудники</Link>
				</nav>
			</FancyFont>
		</div>
	</header>
}