<script lang="ts">
	import { tooltip } from '$lib/action.js';
	import Tooltip from '$lib/Tooltip.svelte';
</script>

<Tooltip class="bg-gray-400 -mx-2" />

<div class="h-[60rem]" />
<div class="flex">
	<div class="w-[95%]" />
	<button
		class="text-nowrap"
		use:tooltip={{
			text: 'Test!',
			orientation: 'horizontal'
		}}>Hello there!</button
	>
</div>

