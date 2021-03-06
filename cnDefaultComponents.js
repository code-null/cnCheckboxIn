class CNCheckboxIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const checkedByDefault = this.getAttribute('checked') === '';
		this.shadowRoot.innerHTML = `
		${styles}	
		<label  class="cn-cbx-label">
        	<input type="checkbox" id="cn-cbx"
			${checkedByDefault ? 'checked' : ''}/>
			<span class="cn-cbx-checkmark"><slot></slot></span>
		</label>
		`;
	}

	isChecked() {
		const checkbox = this.shadowRoot.getElementById('cn-cbx');
		if (!checkbox) {
			return false;
		}
		return checkbox.checked;
	}
}

customElements.define('cn-checkbox-in', CNCheckboxIn);

class CNRadioButtonIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	renderRadioButtons(data) {
		if (!data || data.length == 0) {
			return;
		}

		let renderedButtons = '';
		data.forEach(({ value, label, checked }) => {
			renderedButtons += this.createRadioButton(value, label, checked);
		});
		this.shadowRoot.innerHTML = `
		${styles}
		${renderedButtons}
		`;
	}

	createRadioButton(value, label, checked) {
		return `
		<label class="cn-radio-wrapper cn-radio-wrapper-before">
        	<span class="cn-radio-input">
				<input type="radio" value="${value}" ${
			checked ? 'checked' : ''
		} name="cn-radio">
				<span class="cn-radio-control"></span>
			</span>
			<span class="cn-radio-label">${label}</span>
		</label>
		`;
	}

	getSelected() {
		const radioButtons = this.shadowRoot.querySelectorAll('[name=cn-radio]');
		const selected = Array.from(radioButtons).find(btn => btn.checked);
		if (!selected) {
			return null;
		}
		return selected.value;
	}

	unselectAll() {
		const radioButtons = this.shadowRoot.querySelectorAll('[name=cn-radio]');
		Array.from(radioButtons).forEach(btn => (btn.checked = false));
	}
}

customElements.define('cn-radio-in', CNRadioButtonIn);

const styles = `
	<style>
			* {
			--cn-blue: #4682b4;
			--cn-blue-light: #4f8bbd;
			--cn-red: #b94941;
			--cn-yellow: #ffca28;
			--cn-medium-grey: #474747;
			--cn-dark-grey: #2c2c2c;
			font-family: sans-serif;
    		font-size: 1rem;
		}

		*,
		*:before,
		*:after {
			box-sizing: border-box;
		}


		.cn-div {
			padding: 1rem;
			margin: 1rem;
			background-color: var(--cn-medium-grey);
			border-radius: 0.2rem;
		}

		.cn-warning-div {
			padding: 1rem;
			margin: 1rem;
			background-color: var(--cn-medium-grey);
			border-radius: 0.2rem;
			background-color: var(--cn-red);
		}

		.cn-cbx-div{
			margin: auto;
		}

		.cn-hide {
			display: none;
		}

		.cn-show {
			display: block;
		}

		.cn-button {
			background-color: var(--cn-blue);
			color: white;
			padding: 1rem;
			border-radius: 0.2rem;
			border: none;
		}

		.cn-button:active {
			background-color: var(--cn-blue-light);
		}

		.cn-button:focus {
			outline: none;
		}

		.cn-cbx-label {
			display: inline-flex;
			cursor: pointer;
			position: relative;
			 align-items: center;
		}

		.cn-cbx-label > span {
			padding: 0.5rem 0.25rem;
		}

		.cn-cbx-label > input {
			-webkit-appearance: none;
			-moz-appearance: none;
			-o-appearance: none;
			appearance: none;
			height: 25px;
			width: 25px;
			border-radius: 0.2rem;
			outline: none;
			transition-duration: 0.3s;
			background-color: #eee;
			cursors: pointer;
			
		}

		.cn-cbx-label > input:checked {
			background-color: var(--cn-blue);
		}
		
		.cn-cbx-label > input:checked + span::before {
			content: '\\2713';
			display: block;
			text-align: center;
			color: white;
			position: absolute;
			left: 0.6rem;
			top: 0.4rem;
		}

		.cn-cbx-label > input:active {
			background-color: #ccc
		}

		.cn-radio-wrapper {
			display: grid;
			grid-template-columns: -webkit-min-content auto;
			grid-template-columns: min-content auto;
			grid-gap: 0.2em;
			font-size: 2.25rem;
			padding: 0.25rem 0;
		}

		.cn-radio-wrapper:focus-within .cn-radio-label {
			color: var(--cn-blue-light)
			
		}

		.cn-radio-label {
			line-height: 1;
			transition: 180ms all ease-in-out;
		}

		.cn-radio-input {
			display: flex;
		}

		.cn-radio-input input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		.cn-radio-input input:focus + .cn-radio-control {
			box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
		}

		.radio-gradient input:checked + .cn-radio-control {
			background: radial-gradient(currentcolor 50%, rgba(255, 0, 0, 0) 51%);
		}

		.cn-radio-wrapper-before .cn-radio-control {
			display: grid;
			place-items: center;
		}

		.cn-radio-wrapper-before input + .cn-radio-control::before {
			content: "";
			width: 0.5em;
			height: 0.5em;
			box-shadow: inset 0.5em 0.5em currentColor;
			border-radius: 50%;
			transition: 180ms transform ease-in-out;
			transform: scale(0);
		}

		.cn-radio-wrapper-before input:checked + .cn-radio-control::before {
			transform: scale(1);
		}

		.cn-radio-control {
			display: block;
			width: 1em;
			height: 1em;
			border-radius: 50%;
			border: 0.1em solid currentColor;
			
			color: var(--cn-blue)
		}
		
	
		</style>
	`;
