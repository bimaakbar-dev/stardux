// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Stradocs',
			logo: {
				src: './src/assets/stradocs-logo.svg'
			},
			customCss: ['./src/styles/stardux.css',],
			components: {
				Pagination: './src/components/stardux/Pagination.astro',
			},
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/bimaakbar-dev/starlight' 
				}
			],
			sidebar: [
     {
					label: 'Debug',
					items: [
						{ label: 'Tipography', slug: 'debug/tipography' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Components',
					items: [
						{ label: 'Cards', slug: 'components/cards-stardux' },
						{ label: 'Link Cards', slug: 'components/linkcards-stardux' },
						{ label: 'File Tree', slug: 'components/filetree-stardux' },
						{ label: 'Aside', slug: 'components/aside-stardux' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ autogenerate: { directory: 'reference' } }
					],
				},
				{
					label: 'Changelog',
					items: [
						{ autogenerate: { directory: 'reference' } }
					],
				},
			],
		}),
	],
});