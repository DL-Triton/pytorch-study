const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, 'posts');

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
  fs.writeFileSync('posts.json', JSON.stringify([]));
  console.log('No posts found, created empty posts.json');
  process.exit(0);
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, body: content };

  const data = {};
  match[1].split('\n').forEach(line => {
    const [key, ...val] = line.split(':');
    if (key && val.length) data[key.trim()] = val.join(':').trim().replace(/^["']|["']$/g, '');
  });

  return { data, body: content.slice(match[0].length).trim() };
}

const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

const posts = files.map(file => {
  const content = fs.readFileSync(path.join(postsDir, file), 'utf-8');
  const { data } = parseFrontmatter(content);
  const slug = file.replace('.md', '');
  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    description: data.description || '',
  };
}).sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
console.log(`Built posts.json with ${posts.length} posts`);
