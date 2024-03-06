import React from "react";

function Button(props: React.JSX.IntrinsicAttributes & { title: string }) {
	return <button>{props.title}</button>;
}

export default Button;
