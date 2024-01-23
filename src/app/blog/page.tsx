import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Image from 'next/image'
import Link from 'next/link'


import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkExcerpt from 'remark-excerpt';
import remarkStrip from 'strip-markdown';

import rehypeRaw from 'rehype-raw';
import rehypeRemoveImages from 'rehype-remove-images';

import getReadTime from '/lib/read-time'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTags,
	faFolderTree,
	faTimer
} from '@fortawesome/pro-light-svg-icons';

import styles from './blog-index.module.css'

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

const allPostsDataPerSlug = new Map(allPostsData.map(data => [data.slug.replaceAll("/", ""), data]));


export default async function BlogIndex() {

	const blogPosts = Array.from(allPostsDataPerSlug.values());
	blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

	//allPostsDataPerSlug do some calculations here and then decide the wide or large of the bigCard

	return (<div className={styles.blogIndex}>
		<h1>Blog index</h1>
		<div className={styles.blogGrid}>
			{blogPosts
				.map(post => {
					const { content, slug, cover, title, tags, category } = post;

					const readTime = getReadTime(content);

					const markDownContent = (<Markdown
						rehypePlugins={[
							rehypeRaw,
							rehypeRemoveImages
						]}
						remarkPlugins={[
							remarkGfm,
							remarkExcerpt,
							remarkStrip
						]}
					>
						{post.content}
					</Markdown>);
					const excerptLength = content.indexOf('<!--more-->');
					console.log({ length: content.length, excerptLength })

					return (
						<Link className={`${styles.blogPostLink} ${excerptLength >= 400 ? styles.bigCard : ''}`} href={slug} key={slug}>
							<article className={styles.blogPostCard} >
								<div className={styles.blogPostCardImageContainer}>
									<Image
										className={styles.blogPostCardImage}
										src={cover}
										alt={title}
										fill={true}
										style={{ objectFit: "cover" }}
									/>
									<h3 className={styles.blogPostCardTitle}>{title}</h3>
									<div className={styles.blogPostCardAdditionalInfo}>
										<div className={styles.pills}>
											<FontAwesomeIcon
												className={styles.icon} color="white"
												icon={faTags}
											/>
											{tags
												.map(tag => <span className={styles.pill} key={tag}>{tag}</span>)
												.reduce((acc, x) => acc === null ? [x] : [acc, ' , ', x], null)}
										</div>
										<div className={`${styles.pills} ${styles.category}`}>
											{category
												.map(categoryItem =>
													<span key={categoryItem}>
														<FontAwesomeIcon
															className={styles.icon}
															color="white"
															icon={faFolderTree}
														/>
														<span
															className={styles.pill}
														>
															{categoryItem}
														</span>
													</span>)
											}
										</div>
									</div>
									<div className={styles.readingTime}>
										<FontAwesomeIcon
											className={styles.icon} color="white"
											icon={faTimer}
										/> {readTime} minutes
									</div>
								</div>
								<div className={styles.blogPostCardContent} >
									<p>
										{markDownContent}
									</p>
								</div>
							</article>
						</Link>)
				})
			}
		</div>
	</div >
	)
}
