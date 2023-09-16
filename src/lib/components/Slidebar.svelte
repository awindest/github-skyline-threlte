<script>
	import fly from './transitions.js'
	export let open = false
</script>

{#if open}
	<div class="drawer" transition:fly={{ x: '100%' }}>
		<center><h1>Attribution</h1></center>
		<p>
			This little experiment was an initial foray into threlte (<a href="https://threlte.xyz/"
				>https://threlte.xyz/</a
			>) and an experiment to duplicate what Matt from Joy of Code has done (<a
				href="https://joyofcode.xyz/threlte-github-skyline"
				>https://joyofcode.xyz/threlte-github-skyline</a
			>) which I believe builds quite nicely on this threlte tutorial
			<a href="https://www.datavizcubed.com/basicTutorial"
				>https://www.datavizcubed.com/basicTutorial</a
			>.
		</p>

		<p>
			This visualization shows the distribution of my github contributions in a grid for the year
			2023. The data is static due to github pages only supports static-only web sites.
		</p>
		<p>
			Instructions: scroll to zoom; click and drag to rotate; click and hold to stop the annoying
			rotation.
		</p>
	</div>
{/if}

<style>
	.drawer {
		position: fixed;
		z-index: 10;
		top: 0;
		right: 0;
		padding: 25px;
		height: 100vh;
		width: 400px;
		border-left: 1px solid rgba(0, 0, 0, 0.1);
		box-shadow: -2px 0px 6px -1px rgba(0, 0, 0, 0.1);
		background: #4a4b4a;
		opacity: 0.6;
		backdrop-filter: blur(20px);
		overflow: auto;
	}
	div {
		font-size: 20px;
		color: #ffffff;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
	}
</style>
