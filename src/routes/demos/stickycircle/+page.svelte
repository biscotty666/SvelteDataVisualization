<script>
	const width = 960
	const height = 500
	const circleRadius = 30
	const yPositionOffset = -150

	$: mousePosition = {x: width/2, y:height/2}

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event
		mousePosition.x = clientX
		mousePosition.y = clientY+yPositionOffset
	}

</script>

<div class="container">
	<h1>Sticky Circle</h1>
	<svg {width} {height} on:mousemove={handleMouseMove}>
		<circle 
			cx={mousePosition.x}
			cy={mousePosition.y}
			r={circleRadius}
		/>
	</svg>
	<p>Demonstrates state management in Svelte</p>
	<pre>
		&lt;h1&gt;Hello&lt;/h1&gt;
	</pre>
</div>

<style>
	.container {
		text-align: center;
		font-family: Roboto, sans-serif;
	}
	pre {
		text-align: left;
	}
</style>
