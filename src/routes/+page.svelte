<script lang="ts">
	import { tooltip } from '$lib/action.js';
	import Tooltip from '$lib/Tooltip.svelte';
</script>

<Tooltip class="bg-gray-400" />

<!-- <div class="h-[60rem]" /> -->
<div class="flex">
	<div class="w-[35%]" />
	<button
		class="text-nowrap"
		use:tooltip={{
			text: 'Test!',
			orientation: 'horizontal'
		}}>Hello there!</button
	>
</div>
