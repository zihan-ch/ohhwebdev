import { globalStyle, style } from "@vanilla-extract/css"
import { color } from "~/styles/theme/color.css"
import { borderRadius } from "~/styles/theme/sizes.css"
import { transition } from "~/styles/theme/transition.css"

export const button = style({
	all: "unset",
	cursor: "pointer",
	padding: "12px 36px",
	borderRadius,
	gap: "15px",
	boxSizing: "border-box",
	backgroundColor: color.backgroundLight,
	transition,
	":hover": {
		backgroundColor: color.font.primary,
		color: color.background,
		transform: "scale(1.1)",
	},
	":active": {
		transform: "scale(1.3)",
	},
	display: "flex",
	alignItems: "center",
})

export const pointerWrapper = style({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
})
const arrowWidth = "25px"
const arrowStroke = "4px"

export const pointer = style({
	marginTop: "1px",
	width: arrowWidth,
	background: color.background,
	borderRadius: "2px",
	height: arrowStroke,
	position: "relative",
	transition: ".3s",
})

globalStyle(`${button}:not(:hover) ${pointer}`, {
	background: color.backgroundLight,
})

globalStyle(`${button} ${pointer}::before`, {
	content: "",
	boxSizing: "border-box",
	borderColor: color.font.primary,
	borderStyle: "solid",
	position: "absolute",
	borderWidth: `0 ${arrowStroke} ${arrowStroke} 0`,
	display: "inline-block",
	top: "-6px",
	right: "6px",
	transition: ".3s",
	padding: "6px",
	borderRadius: "2px",
	transform: "rotate(-45deg)",
})

globalStyle(`${button}:hover ${pointer}`, {
	transform: "scale(1.5)",
})

globalStyle(`${button}:hover ${pointer}::before`, {
	borderColor: color.background,
	right: "0",
})
