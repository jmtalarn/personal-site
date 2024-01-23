import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import CodeBlock from "./CodeBlock";


import styles from './blog-post.module.css'

const postsDirectory = path.join(process.cwd(), 'content/posts');
const fileNames = fs.readdirSync(postsDirectory);
const allPostsData = fileNames.map((fileName) => {
	// Remove ".md" from file name to get id
	const id = fileName.replace(/\.md$/, '');

	// Read markdown file as string
	const fullPath = path.join(postsDirectory, fileName);
	const fileContents = fs.readFileSync(fullPath, 'utf8');

	// Use gray-matter to parse the post metadata section
	const { data, content } = matter(fileContents);
	const { slug, ...restData } = data;
	// Combine the data with the id
	return {
		id, content, slug, ...restData
	};
});
const allPostsDataPerSlug = new Map(allPostsData.map(data => [data.slug.replaceAll("/", ""), data]))

export async function generateStaticParams() {
	return allPostsData.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({ params: { slug } }: Readonly<{ params: { slug: string } }>) {
	const blogPost = allPostsDataPerSlug.get(slug);
	const { title, content } = blogPost;

	return (
		<main className={styles.article}>
			<h1>{title}</h1>
			<article>
				<Markdown
					rehypePlugins={[rehypeRaw]} //,rehypePrism ]} 
					remarkPlugins={[remarkGfm]}
					components={{
						code: CodeBlock
					}}
				>
					{content}
				</Markdown>
			</article>

		</main>
	)
}
