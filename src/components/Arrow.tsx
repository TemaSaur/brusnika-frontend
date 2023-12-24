export default function Arrow({direction=Direction.Down}: {direction: Direction}) {
	const a = {
		's': '2'
	}
	const byDirection = new Map<Direction, number>()
	byDirection.set(Direction.Up, 135)
	byDirection.set(Direction.Down, 45)
	byDirection.set(Direction.Left, 45)
	byDirection.set(Direction.Right, -135)

	const angle = byDirection.get(direction);
	return <span className="border-dark border-b-1 border-r-1 w-3 h-3 block rotate-45 m-2 -translate-y-0.5"></span>
}

export enum Direction {
	Up,
	Down,
	Left,
	Right
}