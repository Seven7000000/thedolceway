import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  // Sort by date descending
  const sortedPosts = posts.sort((a, b) =>
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  return rss({
    title: 'The Dolce Way',
    description: '22 apps. One developer. Zero excuses. Follow the journey of building an app empire in public.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      author: 'Dolce',
    })),
    customData: `<language>en-us</language>
<copyright>© ${new Date().getFullYear()} The Dolce Way</copyright>
<managingEditor>dolce@thedolceway.com (Dolce)</managingEditor>
<webMaster>dolce@thedolceway.com (Dolce)</webMaster>
<ttl>60</ttl>`,
  });
}
