<script>
	import { page } from "$app/stores";

	$: routeId = $page.route.id;
	
</script>

<nav>
	<div class="container">
		<ul>
			<li>
				<a href="/demos/worldmap" class:active={routeId == "/demos/worldmap"}>World Map</a>
				<a href="/demos/menus" class:active={routeId == "/demos/menus"}>Menus</a>
				<a href="/demos/happyfaces" class:active={routeId == "/demos/happyfaces"}>Happy Faces</a>
				<a href="/demos/stickycircle" class:active={routeId == "/demos/stickycircle"}>Sticky Circle</a>
				<a href="/demos/colors" class:active={routeId == "/demos/colors"}>Colors</a>
			</li>
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
		padding-left: 5px;
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
