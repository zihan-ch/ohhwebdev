import { JSXElement } from "solid-js"
import Box from "../Box"
import { tipH3, tipSvg } from "./index.css"

export default (props: { children: JSXElement }) => {
	return (
		<Box
			pre={
				<>
					{/* prettier-ignore */}
					<svg class={tipSvg} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.375 8.625L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10l-.625-1.375ZM18.05 3.95L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6l-.95-2.05ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-3-3q-.425 0-.713-.288T5 18q0-.425.288-.713T6 17h6q.425 0 .713.288T13 18q0 .425-.288.713T12 19H6Zm-.75-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z"></path></svg>
					<h3 class={tipH3}>Tip</h3>
				</>
			}
		>
			{props.children}
		</Box>
	)
}
