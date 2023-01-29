<script>
	import { page } from "$app/stores";

	$: routeId = $page.route.id;
	
</script>

<nav>
	<div class="container">
		<h1><a href="/" class="active">Data Visualizations</a></h1>
		<ul>
			<li>
				<a href="/mmworldmap" class:active={routeId == "/mmworldmap"}>World Map</a>
				<a href="/sfline" class:active={routeId == "/sfline"}>SF Line</a>
				<a href="/irisscatter" class:active={routeId == "/irisscatter"}>Iris Scatter</a>
				<a href="/popbarchart" class:active={routeId == "/popbarchart"}>UN Pop Preds</a>
				<a href="/happyfaces" class:active={routeId == "/happyfaces"}>Happy Faces</a>
				<a href="/stickycircle" class:active={routeId == "/stickycircle"}>Sticky Circle</a>
				<a href="/colors" class:active={routeId == "/colors"}>Colors</a>
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
