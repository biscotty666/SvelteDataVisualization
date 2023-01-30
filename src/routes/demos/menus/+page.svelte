<script>
	const width = 960
	const height = 500

	const options = [
		{ id: "1", value: 'dog', label: 'Dog'},
		{ id: "2", value: 'cat', label: 'Cat'},
		{ id: "3", value: 'hamster', label: 'Hamster'},
		{ id: "4", value: 'parrot', label: 'Parrot'},
		{ id: "5", value: 'spider', label: 'Spider'},
		{ id: "6", value: 'goldfish', label: 'Goldfish'},
	]	
	const label = 'title'

	let selected_id = "1"
	$: selected = options.find((o) => o.id === selected_id)
	console.log(selected);
</script>

<div class="container">
	<label for="pet-select">Choose a pet:</label>
	<select id='pet-select' bind:value={selected_id}>
		{#each options as option}
			<option value={option.id}>{option.value}</option>
		{/each}	
	</select>
	<p>
		Selected {JSON.stringify(selected)}
	</p>
</div>

<style>
	.container {
		text-align: center;
		font-family: Roboto, sans-serif;
		font-size: 2em;
	}
	select {
		font-size: .8em;
	}
</style>
