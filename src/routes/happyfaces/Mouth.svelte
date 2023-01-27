<script>
  import { arc } from "d3";

  export let mouthRadius
  export let mouthWidth
  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
</script>

<path d={mouthArc()} />
