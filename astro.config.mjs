// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import astroExpressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroExpressiveCode({
			
			styleOverrides: {
				borderWidth: '1px',
				borderRadius: 'var(--radius-md)',
				borderColor: 'var(--border)',

				codeBackground: 'var(--bg-subtle)',
				frames: {
					shadowColor: 'transparent',
				},
			},
		}),
		starlight({
			title: 'Stradocs',
			logo: {
				light: './src/assets/images/stradocs-logo-light.svg',
				dark: './src/assets/images/stradocs-logo.svg'
			},
			customCss: [
				'./src/styles/stradocs.css',
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
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Writting',
					items: [
						{ label: 'Typography', slug: 'writting/typography' },
					],
				},
				{
					label: 'Components',
					items: [
						{ label: 'Asides', slug: 'components/asides' },
						{ label: 'Cards', slug: 'components/cards' },
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
