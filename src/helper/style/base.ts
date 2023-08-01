import { CSSObject } from "@emotion/react";

let baseColor = "#cacaca";
const baseStyles: CSSObject = {
	html: {
		fontSize: "100%",
		lineHeight: "1.5rem",
	},
	body: {
		color: baseColor,
		fontFamily: "Arial,sans-serif",
		fontSize: "100%",
		lineHeight: "1.5rem",
		margin: 0,
		padding: 24,
		background: "#000000",
	},
	strong: {
		fontWeight: 600,
	},
};

export default baseStyles;