<script>
	import { Canvas } from '@threlte/core'
	import Scene from './scene.svelte'
	import IndestLabs from '$lib/components/IndestLabs.svelte'
	import Hamburger from '$lib/components/Hamburger.svelte'
	let open = false
</script>

<div class="scene">
	<Canvas>
		<Scene />
	</Canvas>
</div>
<IndestLabs />

<Hamburger bind:open />

<style>
	.scene {
		position: absolute;
		inset: 0;
		background-color: hsl(200 10% 10%);
	}
</style>
