class CNCheckboxIn extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		const checkedByDefault = this.getAttribute('checked') === '';
		this.shadowRoot.innerHTML = `
		${styles}	
		<label for="cn-cbx" class="cn-cbx-label">
        	<input type="checkbox" class="cn-cbx" id="cn-cbx"
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
    		font-size: 1.1rem;
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

		.cn-cbx-label{
			display: inline-flex;
			cursor: pointer;
			position: relative;
			 align-items: center;
		}

		.cn-cbx-label > span{
			color: #fffff;
			padding: 0.5rem 0.25rem;
		}

		.cn-cbx-label > input{
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

		.cn-cbx-label > input:checked{
			background-color: var(--cn-blue);
		}
		
		.cn-cbx-label > input:checked + span::before{
			content: '\\2713';
			display: block;
			text-align: center;
			color: white;
			position: absolute;
			left: 0.6rem;
			top: 0.4rem;
		}

		.cn-cbx-label > input:active{
			background-color: #ccc
		}
	
		</style>
	`;
