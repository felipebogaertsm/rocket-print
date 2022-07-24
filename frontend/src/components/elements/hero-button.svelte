<button><slot /></button>

<style>
	button {
		background-color: var(--primary-color);
		cursor: pointer;
		display: inline-block;
		border: none;
		border-radius: 1rem;
		padding: 1rem;
		font-size: 1.2rem;
		text-align: center;
		color: var(--dark-color);
		animation: glowing 10s infinite;
	}

	@keyframes glowing {
		0% {
			filter: brightness(1.1);
			box-shadow: 0 0 3px var(--primary-color);
		}
		50% {
			filter: brightness(1.2);
			box-shadow: 0 0 10px var(--primary-color);
		}
		100% {
			filter: brightness(1.1);
			box-shadow: 0 0 3px var(--primary-color);
		}
	}
</style>
