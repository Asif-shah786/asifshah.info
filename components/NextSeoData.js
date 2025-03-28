import { ArticleJsonLd, NextSeo } from 'next-seo'

import React from 'react'

const NextSeoData = ({ slug, metadata, publishedDate }) => {
    return (
        <>
            <NextSeo
                additionalMetaTags={[
                    { property: 'twitter:card', content: 'summary_large_image' },
                    {
                        property: 'twitter:url',
                        content: `https://asifshah.info/blog/${slug}`,
                    },
                    { property: 'twitter:title', content: metadata.title },
                    {
                        property: 'twitter:description',
                        content: metadata.frontmatter.summary,
                    },
                    { property: 'twitter:image', content: metadata.frontmatter.image },
                ]}
                canonical={`https://asifshah.info/blog/${slug}`}
                description={metadata.frontmatter.summary}
                openGraph={{
                    url: `https://asifshah.info/blog/${slug}`,
                    site_name: 'Asif Shah',
                    title: metadata.title,
                    description: metadata.frontmatter.summary,
                    type: 'article',
                    article: {
                        authors: ['Asif Shah'],
                        publishedTime: publishedDate,
                        modifiedTime: publishedDate,
                        tags: ['Programming', 'Web Development', 'Software Engineering'],
                    },
                    images: [
                        {
                            url: metadata.frontmatter.image,
                            alt: metadata.title,
                        },
                    ],
                }}
                title={metadata.title}
            />
            <ArticleJsonLd
                authorName="Asif Shah"
                dateModified={publishedDate}
                datePublished={publishedDate}
                description={metadata.frontmatter.summary}
                images={[metadata.frontmatter.image]}
                publisherLogo="https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png"
                publisherName="Asif Shah"
                title={metadata.title}
                url={`https://asifshah.info/blog/${slug}`}
            />
        </>
    )
}

export default NextSeoData
