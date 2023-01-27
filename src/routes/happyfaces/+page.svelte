<script>
	import BackgroundCircle from "./BackgroundCircle.svelte";
	import Eyes from "./Eyes.svelte";
	import Mouth from "./Mouth.svelte";

	const width = 960;
	const height = 500;
	const centerX = width / 2;
	const centerY = height / 2;
	const strokeWidth = 10;
	const eyeOffsetX = 90;
	const eyeOffsetY = 100;
	const eyeRadius = 50;
	const mouthWidth = 20
	const mouthRadius = 140

</script>

<div class="container">
	<svg {width} {height}>
		<g transform={`translate(${centerX},${centerY})`}>
			<BackgroundCircle {centerY} {strokeWidth}/>
			<Eyes {eyeOffsetX} {eyeOffsetY} {eyeRadius} />
			<Mouth {mouthRadius} {mouthWidth} />
		</g>
	</svg>
</div>

<style>
</style>
