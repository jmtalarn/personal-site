import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ children, className, node, ...rest }) => {

	const match = /language-(\w+)/.exec(className || '')
	return match ? (
		<SyntaxHighlighter
			{...rest}
			customStyle={{ marginLeft: '2rem' }}
			PreTag="div"
			language={match[1]}
			style={theme}
		>{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
	) : (
		<code {...rest} className={className}>
			{children}
		</code>
	)
}


export default CodeBlock;
