<script>
  export let eyeOffsetX
  export let eyeOffsetY
  export let eyeRadius
</script>

<circle
cx={eyeOffsetX}
cy={-eyeOffsetY}
r={eyeRadius}
/>
<circle
cx={-eyeOffsetX}
cy={-eyeOffsetY}
r={eyeRadius}
/>
