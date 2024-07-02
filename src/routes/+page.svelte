<script lang="ts">
	import { tooltip } from '$lib/action.js';
	import Tooltip from '$lib/Tooltip.svelte';
</script>

<Tooltip class="bg-gray-400 mr-16" />

<div class="h-[30rem]" />
<div class="flex">
	<div class="w-[95%]" />
	<button
		class="text-nowrap"
		use:tooltip={{
			text: 'Delilius!',
			orientation: 'horizontal'
		}}>Hello there!</button
	>
</div>
<button
	class="text-nowrap"
	use:tooltip={{
		text: 'Bye bye!',
		orientation: 'horizontal'
	}}>Hello !</button
>
