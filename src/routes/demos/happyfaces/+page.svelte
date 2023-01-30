<script>
	import Face from "./Face.svelte";

	const width = 160;
	const height = 160;
	const centerX = width / 2;
	const centerY = height / 2;
	const strokeWidth = 6
	const eyeOffsetX = 20
	const eyeOffsetY = 20
	const eyeRadius = 5
	const mouthWidth = 7
	const	mouthRadius = 30
</script>

<div class="container">
	<h1>Random Faces</h1>
	{#each Array(6 * 3) as _}
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
	{/each}
	<p>Demonstrates looping and component management with Svelte</p>
</div>

<style>
	.container {
		text-align: center;
		font-family: Roboto, sans-serif;
	}
</style>
