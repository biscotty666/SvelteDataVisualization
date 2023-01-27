<script>
	const width = 960
  const height = 500
	const centerX = width / 2
	const centerY = height / 2
	const strokeWidth = 10
	const eyeOffsetX = 90
	const eyeOffsetY = 100
	const eyeRadius = 50
</script>

<div class="container">
	<svg width={width} height={height}>
		<circle 
			cx={centerX} 
			cy={centerY} 
			r={centerY - strokeWidth} 
			fill="yellow"
			stroke="black"
			stroke-width={strokeWidth}
		/>
		<circle 
			cx={centerX - eyeOffsetX} 
			cy={centerY - eyeOffsetY} 
			r={eyeRadius} 
		/>
		<circle 
			cx={centerX + eyeOffsetX}  
			cy={centerY - eyeOffsetY} 
			r={eyeRadius} 
		/>
	</svg>
</div>

<style>
</style>