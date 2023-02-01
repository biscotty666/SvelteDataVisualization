<script>
	import { page } from "$app/stores";

	$: routeId = $page.route.id;
	
</script>

<nav>
	<div class="container">
		<h1><a href="/" class="active">Data Visualizations</a></h1>
		<ul>
			<li>
				<a href="/worldmapcities" class:active={routeId == "/worldmapcities"}>Cities 50k</a>
				<a href="/irisscatter" class:active={routeId == "/irisscatter"}>Iris Scatter</a>
				<a href="/popbarchart" class:active={routeId == "/popbarchart"}>UN Pop Preds</a>
				<a href="/demos/colors" class:active={routeId == "/demos/colors"}>Demos</a>
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
