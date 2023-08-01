"use client";
import baseStyles from "@/helper/style/base";
import resetStyles from "@/helper/style/reset";
import { Global } from "@emotion/react";

type GlobalCssProps = {};

const GlobalCss = (props: GlobalCssProps) => {
	return <Global styles={[resetStyles, baseStyles]} />;
};

export { GlobalCss };
export type { GlobalCssProps }