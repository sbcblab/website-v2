<script lang="ts">
	import Markdown from '$components/markdown.svelte';
	import { Button } from '$components/ui/button';
	import type { Form } from '$lib/types';
	import { onMount } from 'svelte';

	export let component: Form;

	let form: HTMLFormElement | undefined;
	let singleFields: HTMLElement | undefined;
	let splitFields: HTMLElement | undefined;
	let response: any;

	populateCountrySelect();

	onMount(() => {
		// isolateFields();
		// singleFields = form?.firstChild?.cloneNode(true) as HTMLElement;
		// splitFields = createSplitFields();
		// updateLayout();
		// window.addEventListener('resize', debounce(updateLayout, 100));
	});

	function updateLayout() {
		if (window.innerWidth > 768) {
			form?.firstChild?.replaceWith(splitFields as HTMLElement);
		} else {
			form?.firstChild?.replaceWith(singleFields as HTMLElement);
		}
	}

	function getCountries() {
		const A = 65;
		const Z = 90;
		const countries: string[] = [];
		const countryName = new Intl.DisplayNames(['en'], { type: 'region' });
		for (let i = A; i <= Z; i++) {
			for (let j = A; j <= Z; j++) {
				const code = String.fromCharCode(i) + String.fromCharCode(j);
				const name = countryName.of(code);
				if (name && name !== code) {
					countries.push(name);
				}
			}
		}
		return countries.sort();
	}

	function populateCountrySelect() {
		const countrySelect = component.fields.find(
			(field) => field.__component === 'form.select' && field.name === 'country'
		);
		if (countrySelect) {
			countrySelect.options = getCountries().map((country) => ({ value: country, label: country }));
		}
	}

	function processCheckboxGroup(e: any) {
		if (!form) return;

		const fieldName = e.target.name;
		const hiddenInput = document.querySelector(`#${e.target.name}`) as HTMLInputElement;
		const checkedInputs = form.querySelectorAll(`input[name="${fieldName}"]:checked`);

		hiddenInput.value = Array.from(checkedInputs)
			.map((input: any) => input.value)
			.join(',');
	}

	function omitCheckboxGroups() {
		if (!form) return;

		const inputs = form.querySelectorAll('input[type="checkbox"]');
		inputs.forEach((input: any) => {
			if (input.name !== input.id) {
				input.removeAttribute('name');
			}
		});
	}

	function createSplitFields() {
		if (!form) return;

		const splitFields = form.firstChild?.cloneNode(true) as HTMLElement;
		const fieldsWrapper = form.firstChild?.firstChild as HTMLElement;
		const fields = fieldsWrapper.childNodes;

		let totalHeight = 0;
		fields.forEach((field: any) => (totalHeight += field.clientHeight));
		const midHeight = totalHeight / 2;

		let heightSum = 0;
		let splitIndex: number | undefined;
		fields.forEach((field: any, index) => {
			if (splitIndex) return;

			const newHeightSum = heightSum + field.clientHeight;
			if (newHeightSum > midHeight) {
				if (Math.abs(newHeightSum - midHeight) > Math.abs(heightSum - midHeight)) {
					splitIndex = index;
				} else {
					splitIndex = index + 1;
				}
			}
			heightSum = newHeightSum;
		});

		if (!splitIndex) return;

		splitFields.appendChild(fieldsWrapper.cloneNode(true));

		for (let i = 0; i < fields.length; i++) {
			if (i < splitIndex) {
				splitFields.lastChild?.firstChild?.remove();
			} else {
				splitFields.firstChild?.lastChild?.remove();
			}
		}

		const selects = splitFields.querySelectorAll('select');
		selects.forEach((select) => {
			const field = component.fields.find((field) => field.name === select.name);
			select.value = field.defaultValue;
		});

		return splitFields;
	}

	function isolateFields() {
		const isolatedFieldNames = component.fields
			.filter((field) => field.isolated)
			.map((field) => field.name);
		const submitButton = form?.querySelector('button[type="submit"]');

		isolatedFieldNames.forEach((fieldName) => {
			const matchingFieldset = form?.querySelector(`fieldset:has(input[name=${fieldName}])`);
			if (matchingFieldset && submitButton) {
				form?.insertBefore(matchingFieldset, submitButton);
			}
		});
	}

	function submitForm(e: any) {
		e.preventDefault();
		omitCheckboxGroups();

		const formData = new FormData(e.target) as any;
		const target = component.target;

		if (!target) return;

		if (component.method == 'GET') {
			const queryString = new URLSearchParams(formData).toString();

			fetch(`${target}?${queryString}`)
				.then((response) => response.json())
				.then((data) => (response = data));
		}

		if (component.method == 'POST') {
			const jsonData = Object.fromEntries(formData.entries());

			fetch(target, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(jsonData)
			})
				.then((res) => res.json())
				.then((data) => (response = data));
		}
	}
</script>

<form
	bind:this={form}
	on:submit={submitForm}
	class="flex flex-col items-center gap-12 md:items-start"
>
	<div class="flex w-full gap-12">
		<div class="flex w-full flex-col gap-8">
			{#each component.fields as field}
				<fieldset>
					{#if field.__component === 'form.input'}
						<label for={field.name}>{field.label}</label>
						<input
							type={field.type}
							name={field.name}
							id={field.name}
							value={field.defaultValue}
							placeholder={field.placeholder}
							required={field.required}
							{...field.extraAttributes}
						/>
						{#if field.description}
							<Markdown inline content={field.description} class="description" />
						{/if}
					{:else if field.__component === 'form.select'}
						<label for={field.name}>{field.label}</label>
						<select
							name={field.name}
							id={field.name}
							placeholder={field.placeholder}
							required={field.required}
							{...field.extraAttributes}
						>
							{#each field.options as option}
								<option value={option.value} selected={option.value === field.defaultValue}>
									{option.label || option.value}
								</option>
							{/each}
						</select>
						{#if field.description}
							<Markdown inline content={field.description} class="description" />
						{/if}
					{:else if field.__component === 'form.textarea'}
						<label for={field.name}>{field.label}</label>
						<textarea
							name={field.name}
							id={field.name}
							placeholder={field.placeholder}
							required={field.required}
							value={field.defaultValue || ''}
							{...field.extraAttributes}
						/>
						{#if field.description}
							<Markdown inline content={field.description} class="description" />
						{/if}
					{:else if field.__component === 'form.checkbox-group'}
						<input type="hidden" id={field.name} name={field.name} />
						<legend class="mb-2">{field.label}</legend>
						<div class="flex gap-5">
							{#each field.options as option}
								<div class="flex items-center gap-2">
									<input
										type="checkbox"
										id={`${field.name}${option.value}`}
										name={field.name}
										value={option.value}
										checked={option.checked}
										on:change={processCheckboxGroup}
									/>
									<label for={`${field.name}${option.value}`}>{option.label || option.value}</label>
								</div>
							{/each}
						</div>
						{#if field.description}
							<Markdown inline content={field.description} class="description" />
						{/if}
					{:else if field.__component === 'form.radio-group'}
						<div class="flex flex-col gap-5">
							<legend>{field.label}</legend>
							{#each field.options as option}
								<div class="flex items-start gap-3">
									<input
										type="radio"
										id={`${field.name}${option.value}`}
										name={field.name}
										value={option.value}
										checked={option.checked}
									/>
									<div class="flex flex-col gap-0.5">
										<label for={`${field.name}${option.value}`}
											>{option.label || option.value}</label
										>
										{#if option.description}
											<Markdown inline content={option.description} class="description" />
										{/if}
									</div>
								</div>
							{/each}
						</div>
						{#if field.description}
							<Markdown inline content={field.description} class="description" />
						{/if}
					{:else if field.__component === 'form.number-input'}
						<label for={field.name}>{field.label}</label>
						<div class="flex items-center gap-2">
							<div class="relative w-fit">
								<input
									type="number"
									step={field.step}
									name={field.name}
									id={field.name}
									value={field.defaultValue}
									placeholder={field.placeholder}
									required={field.required}
									{...field.extraAttributes}
								/>
								<span class="unit">{field.unit || ''}</span>
							</div>
							{#if field.description}
								<Markdown inline content={field.description} class="description" />
							{/if}
						</div>
					{/if}
				</fieldset>
			{/each}
		</div>
	</div>
	<Button type="submit">{component.submitButton}</Button>

	{#if response}
		<div class="response">
			{#each Object.entries(response) as [key, value]}
				<div class="flex flex-col items-center gap-2 rounded-2xl bg-gray-50 p-5 text-center">
					<span class="font-medium text-[var(--description)]">{key}</span>
					<span class="text-lg">{value}</span>
				</div>
			{/each}
		</div>
	{/if}
</form>
