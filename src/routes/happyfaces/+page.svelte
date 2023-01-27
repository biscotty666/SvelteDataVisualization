<script>
	import Face from "./Face.svelte";

	// const width = 160;
	// const height = 160;
	// const centerX = width / 2;
	// const centerY = height / 2;
	// const strokeWidth = 6
	// const eyeOffsetX = 20
	// const eyeOffsetY = 20
	// const eyeRadius = 5
	// const mouthWidth = 7
	// const	mouthRadius = 30
	const width = 960
	const height = 500
	const circleX = width / 2
	const circleY = height / 2
	const circleRadius = 30

	$: mousePosition = {x: width/2, y:height/2}

	const handleMouseMove = (event) => {
		const { clientX, clientY } = event
		mousePosition.x = clientX
		mousePosition.y = clientY
	}

</script>

<div class="container">
	<!-- {#each Array(6 * 3) as _}
	<Face
		{width} {height}
		{centerX} {centerY}
		strokeWidth={strokeWidth + Math.random() * 3}
		eyeOffsetX={eyeOffsetX + Math.random() * 9}
		eyeOffsetY={eyeOffsetY + Math.random() * 15}
		eyeRadius={eyeRadius + Math.random() * 10}
		mouthWidth= {mouthWidth + Math.random() * 9}
		mouthRadius={mouthRadius + Math.random() * 10}
	/>
	{/each} -->
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
