import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from "remark";
import html from "remark-html";

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

	// Combine the data with the id
	return {
		id, ...data, content
	};
});
const allPostsDataPerSlug = new Map(allPostsData.map(data => [data.slug.replaceAll("/", ""), data]))

export async function generateStaticParams() {
	return allPostsData.map(({ slug }) => ({ slug }));
}


async function markdownToHtml(markdown: string) {
	const result = await remark().use(html).process(markdown);
	return result.toString();
}


export default async function BlogPost({ params: { slug } }: Readonly<{ params: { slug: string } }>) {
	const blogPost = allPostsDataPerSlug.get(slug);
	const { title, content } = blogPost;
	const contentHTML = await markdownToHtml(content);
	return (
		<main>
			<h1>{title}</h1>
			<article className={styles.article} dangerouslySetInnerHTML={{ __html: contentHTML }} />
		</main>
	)
}
