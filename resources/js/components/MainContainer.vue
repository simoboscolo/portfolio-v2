<script>
export default {
	created() {
		window.addEventListener('keyup',this.keyEvent);
	},
	data() {
		return {
			step: 1,
		}
	},
	computed: {

	},
	methods: {
		nextStep(event) {
			this.step += 1;
		},
		keyEvent(event) {
			if (event.code == 'Space') {
				this.nextStep();
			}
		}
	}
}
</script>
