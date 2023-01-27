<script>
	import Face from "./Face.svelte";

	const width = 160;
	const height = 160;
	const centerX = width / 2;
	const centerY = height / 2;
	let strokeWidth = 6
	let eyeOffsetX = 20
	let eyeOffsetY = 20
	let eyeRadius = 5
	let mouthWidth = 7
	let	mouthRadius = 30

</script>

<div class="container">
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
</div>

<style>
</style>
