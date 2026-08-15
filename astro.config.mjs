// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'stardux',
    customCss: [
        './src/styles/stardux.css',
      ],
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
