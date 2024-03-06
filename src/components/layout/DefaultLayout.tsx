import React from "react";
import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';

const DefaultLayout = (props: React.JSX.IntrinsicAttributes & { children: React.JSX.Element }) => {
	return (
		<>
			<PagesMetaHead />
			<AppHeader />
			<div>{props.children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
