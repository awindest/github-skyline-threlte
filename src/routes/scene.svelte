<script>
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { quadInOut } from 'svelte/easing'
	import { T } from '@threlte/core'
	import { Center, Grid, OrbitControls, Text } from '@threlte/extras'

	// export let contributions = []

	function getColor(level) {
		// these colors are what github uses on their overview page for your contributions 'level'
		const colors = ['#0e0e0e', '#00442a', '#006d35', '#00a648', '#00d35c']
		return colors[level]
	}

	function normalize(count, base = 4, offset = 2) {
		switch (true) {
			case count === 0: // give it a little height
				return base
			case count > 40: // clamp so we don't spike
				return count
			default:
				return count * (base * offset)
		}
	}

	const scaleY = tweened(0, { duration: 2000, easing: quadInOut })

	onMount(() => {
		$scaleY = 1
	})
	const font = '/fonts/Averox-webfont.woff2'
</script>

<Grid infiniteGrid sectionColor="#4a4b4a" sectionSize={20} cellSize={20} fadeDistance={400} />

<T.PerspectiveCamera makeDefault position={[10, 100, 600]} fov={60}>
	<OrbitControls enableDamping autoRotate autoRotateSpeed={0.1} />
</T.PerspectiveCamera>

<T.AmbientLight color="#fff" intensity={0.4} />
<T.DirectionalLight position={[0, 200, 200]} intensity={2} color="#fff" />
<T.DirectionalLight position={[0, 200, -200]} intensity={2} color="#fff" />
<Center autoCenter position.y={40}>
	{#each contributions as row, i}
		{#each row as day, j}
			{#if day}
				{@const color = getColor(day.level)}
				{@const y = normalize(day.count)}
				<T.Group position={[0, 0, 12 * i]} scale.y={$scaleY}>
					<T.Mesh position={[12 * j, y / 2, 0]}>
						<T.BoxGeometry args={[10, y, 10]} />
						<T.MeshStandardMaterial {color} />
					</T.Mesh>
				</T.Group>
			{/if}
		{/each}
	{/each}
</Center>

<Text
	text="awindest"
	color="#00d35c"
	{font}
	fontSize="10"
	anchorX="50%"
	anchorY="100%"
	characters="abcdefghijklmnopqrstuvwxyz"
/>

<style>
	@font-face {
		font-family: 'Averox';
		src: url('/fonts/Averox-webfont.woff2') format('woff2');
		font-style: normal;
		font-weight: 500;
		font-display: swap;
	}
</style>
