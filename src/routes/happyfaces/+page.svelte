<script>
	import { arc } from "d3";
	import BackgroundCircle from "./BackgroundCircle.svelte";

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

	const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthRadius + mouthWidth)
		.startAngle(Math.PI / 2)
		.endAngle(Math.PI * 3 / 2);


</script>

<div class="container">
	<svg {width} {height}>
		<g transform={`translate(${centerX},${centerY})`}>
			<BackgroundCircle {centerY} {strokeWidth}/>
			<circle
				cx={-eyeOffsetX}
				cy={-eyeOffsetY}
				r={eyeRadius}
			/>
			<circle
				cx={eyeOffsetX}
				cy={-eyeOffsetY}
				r={eyeRadius}
			/>
			<path d={mouthArc()} />
		</g>
	</svg>
</div>

<style>
</style>
