import Head from 'next/head';

function PagesMetaHead(props: any) {
	const { title, keywords, description } = props;
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Daniel\'s Portfolio Project',
	keywords: 'Simple and multi-page next.js and react application',
};

export default PagesMetaHead;
