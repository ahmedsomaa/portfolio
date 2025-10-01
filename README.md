# Portfolio ✨

My personal portfolio built with Next.js 15 & contentlayer.

## Built With

- [Next.js](https://nextjs.org/) for bootstrapping the project.
- [Contentlayer](https://contentlayer.dev/) for content management.
- [Tailwindcss](https://tailwindcss.com/) for styling.
- [Shiki](https://shiki.style/) for syntax highlighting.
- [Lucide React](https://lucide.dev/) for icons.
- [Shadcn/ui](https://ui.shadcn.com/) for components.
- [Enhanced version of shadcn-button component](https://enhanced-button.vercel.app/) for better shadcn buttons.
- [Origin UI](https://originui.com/) for extended shadcn components.
- [Deployment](https://netlify.com/) for deployment.

## Running Locally

```sh
git clone https://github.com/ahmedsomaa/portfolio
cd portfolio
bun install
bun run content:build && bun run dev
```

## How to use

### Fonts

I use 4 font variables. Change them to your own styles in `app/layer.tsx`.

- `font-logo` for the website's logo.
- `font-display` for the landing page headline.
- `font-sans` for the website's body.
- `font-mono` for code blocks.

### Content

Replace my content under the `/content` directory with yours. This includes:

- Navigation items.
- Social links.
- Projects.
- Education & Experience.

### Blog Posts

I use contentlayer alongside mdx. Delete the files under `/posts`, and add your own.

### Syntax Highlighting

I made a custom code block component `/components/code-block.tsx` using shiki. Change your
light & dark themes there.
