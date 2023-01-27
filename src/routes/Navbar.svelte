<script>
	import { page } from '$app/stores';

	const navs = [
		{
			title: 'Home',
			href: '/'
		},
		{
			title: 'Happy Faces',
			href: '/happyfaces'
		},
		{
			title: 'Sticky Circle',
			href: '/stickycircle'
		},
		{
			title: 'Colors',
			href: '/colors'
		}
	];
	$: routeId = $page.route.id;
</script>

<nav>
	<div class="container">
		<h1><a href='/' class="active">Data Visualizations</a></h1>
		<ul>
			{#each navs as { title, href }}
				<li>
					<a {href} class:active={routeId == href} {title}>{title}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		background-color: #212529;
		color: white;
	}

	.container {
		display: flex;
		align-items: center;
	}

	a {
		color: #aaa;
		text-decoration: none;
	}

	.active {
		color: white;
	}

	ul {
		display: flex;
		list-style: none;
		margin-left: auto;
		font-size: 1em;
	}
	li {
		margin-right: 20px;
	}

	h1 {
		margin: 0;
		font-size: 1.1em;
		font-weight: normal;
	}
</style>
