<script>
  export let strokeWidth
  export let centerY
</script>

<circle
  r={centerY - strokeWidth / 2}
  fill="yellow"
  stroke="black"
  stroke-width={strokeWidth}
/>