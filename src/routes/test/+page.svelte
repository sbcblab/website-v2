<script lang="ts">
	import { onMount } from 'svelte';

	type Form = {
		target: string;
		fields: (
			| {
					name: string;
					type: 'textarea' | 'email' | 'text';
					label: string;
			  }
			| {
					name: string;
					type: 'select' | 'checkbox' | 'radio';
					label: string;
					options: { value: string | number; label: string | number }[];
			  }
		)[];
	};

	function getCountryList() {
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
		return countries;
	}

	const countries = getCountryList();
	const randomId = Math.random().toString(36).substring(16);

	const form: Form = {
		target: 'https://sbcb.inf.ufrgs.br/compute/nias',
		fields: [
			{ name: 'mail', type: 'email', label: 'Email' },
			{ name: 'uni', type: 'text', label: 'University' },
			{
				name: 'country',
				type: 'select',
				label: 'Country',
				options: countries.map((country) => ({ value: country, label: country }))
			},
			{ name: 'aa', type: 'textarea', label: 'Target Amino Acid Sequence' },
			{ name: 'ss', type: 'textarea', label: 'Secondary Structure', description: '' },
			{
				name: 'apl',
				type: 'checkbox',
				label: 'APLs',
				options: [
					{ value: 1, label: 1 },
					{ value: 2, label: 2 },
					{ value: 3, label: 3 },
					{ value: 5, label: 5 },
					{ value: 7, label: 7 },
					{ value: 9, label: 9 }
				]
			},
			{
				name: 'database',
				type: 'radio',
				label: 'Database',
				options: [
					{ value: 'CULLPDB', label: 'CullPDB Benchmark [Resol <= 3.0]: 16.475 struct' },
					{ value: 'SOLIDNMR', label: 'Solid NMR [FS >= 400 MHz]: 146 struct' },
					{ value: 'XRAY25', label: 'X-Ray [Resol <= 2.5; R-Factor = 20]: 23.524 struct' },
					{ value: 'XRAY40', label: 'X-Ray [Resol <= 4.0; R-Factor = 20]: 24.199 struct' },
					{ value: 'EC', label: 'Electron Crystallography: 212 struct.' },
					{ value: 'SOLUTIONNMR400', label: 'Solution NMR [FS >= 400 MHz]: 12.793 struct' },
					{ value: 'SOLUTIONNMR600', label: 'Solution NMR [FS >= 600 MHz]: 11.568 struct' },
					{ value: 'SOLUTIONNMR800', label: 'Solution NMR [FS >= 800 MHz]: 5.810 struct' },
					{ value: 'ELETRONMICROSCOPY4', label: 'EM [Resol <= 4] (AG): 7.632 struct' },
					{ value: 'ELETRONMICROSCOPY10', label: 'EM [Resol <= 10] (AG): 10.466 struct' },
					{
						value: 'XRAY25NR',
						label: 'X-Ray [Resol <= 2.5; R-Factor = 20; Non-Redundant]: 12.588 struct'
					},
					{
						value: 'XRAY40NR',
						label: 'X-Ray [Resol <= 4.0; R-Factor = 20; Non-Redundant]: 13.020 struct'
					}
				]
			}
		]
	};

	onMount(() => console.log({ countries, randomId }));
</script>

<div class="container">
	<form>
		{#each form.fields as field}
			<div class="flex flex-col">
				<label for={field.name}>{field.label}</label>
				{#if field.type === 'textarea'}
					<textarea id={field.name} name={field.name}></textarea>
				{:else if field.type === 'email'}
					<input type="email" id={field.name} name={field.name} />
				{:else if field.type === 'text'}
					<input type="text" id={field.name} name={field.name} />
				{:else if field.type === 'select'}
					<select id={field.name} name={field.name} style="appearance:base-select">
						{#each field.options as option}
							<option value={option.value}>{option.label}</option>
						{/each}
					</select>
				{:else if field.type === 'checkbox'}
					{#each field.options as option}
						<div class="flex-start flex justify-start gap-4">
							<input
								type="checkbox"
								id={`${field.name}${option.value}`}
								name={field.name}
								value={option.value}
								class="w-fit"
							/>
							<label for={`${field.name}${option.value}`}>{option.label}</label>
						</div>
					{/each}
				{:else if field.type === 'radio'}
					{#each field.options as option}
						<div>
							<input type="radio" name={field.name} value={option.value} />
							<label for={field.name}>{option.label}</label>
						</div>
					{/each}
				{/if}
			</div>
		{/each}
		<button type="submit">Submit</button>
	</form>
</div>
