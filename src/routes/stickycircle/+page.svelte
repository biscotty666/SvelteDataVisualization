<script>
	const width = 960
	const height = 500
	const circleRadius = 30

	$: mousePosition = {x: width/2, y:height/2}

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event
		mousePosition.x = clientX
		mousePosition.y = clientY
	}

</script>

<div class="container">
	<svg {width} {height} on:mousemove={handleMouseMove}>
		<circle 
			cx={mousePosition.x}
			cy={mousePosition.y}
			r={circleRadius}
		/>
	</svg>
</div>

<style>
</style>
