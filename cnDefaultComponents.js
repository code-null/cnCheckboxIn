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
	@charset "UTF-8";
			* {
			font-family: sans-serif;
			font-size: 1.2rem;
			margin: 0;
			}

			* + * {
			margin-top: 1em;
			}
			.cn-cbx-div {
			margin: auto;
			}

			.cn-cbx-label *,
			.cn-radio-wrapper * {
			margin: 0;
			}

			.cn-cbx-label {
			display: inline-flex;
			cursor: pointer;
			position: relative;
			align-items: center;
			}
			.cn-cbx-label span {
			padding: 0.5rem 0.25rem;
			}
			.cn-cbx-label input {
			-webkit-appearance: none;
			-moz-appearance: none;
			-o-appearance: none;
			appearance: none;
			height: 25px;
			width: 25px;
			border-radius: 0.2rem;
			outline-color: #32cd32;
			transition-duration: 0.3s;
			background-color: #eee;
			margin: 3px;
			cursor: pointer;
			}
			.cn-cbx-label input:checked {
			background-color: #32cd32;
			}
			.cn-cbx-label input:checked + span::before {
			content: "✓";
			display: block;
			text-align: center;
			color: white;
			position: absolute;
			left: 0.6rem;
			top: 0.4rem;
			}
			.cn-cbx-label input:focus {
			outline: none;
			box-shadow: 0 0 0 0.05em #32cd32, 0 0 0.15em 0.1em #32cd32;
			}

			.cn-radio-wrapper {
			display: grid;
			grid-template-columns: -webkit-min-content auto;
			grid-template-columns: min-content auto;
			grid-gap: 0.2em;
			font-size: 2.25rem;
			padding: 0.25rem 0;
			margin-top: 0.2em;
			cursor: pointer;
			}

			.cn-radio-wrapper:focus-within .cn-radio-label {
			color: #4f8bbd;
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
			box-shadow: 0 0 0 0.05em #32cd32, 0 0 0.15em 0.1em #32cd32;
			}

			.radio-gradient input:checked + .cn-radio-control {
			background: radial-gradient(#32cd32 50%, rgba(255, 0, 0, 0) 51%);
			}

			.cn-radio-wrapper-before .cn-radio-control {
			display: grid;
			place-items: center;
			}
			.cn-radio-wrapper-before input + .cn-radio-control::before {
			content: "";
			width: 0.5em;
			height: 0.5em;
			box-shadow: inset 0.5em 0.5em #32cd32;
			border-radius: 50%;
			transition: 180ms transform ease-in-out;
			transform: scale(0);
			}
			.cn-radio-wrapper-before input:checked + .cn-radio-control::before {
			transform: scale(1);
			}

			.cn-radio-control {
			width: 1em;
			height: 1em;
			border-radius: 50%;
			border: 0.1em solid #32cd32;
			color: #32cd32;
			}
	
		</style>
	`;
