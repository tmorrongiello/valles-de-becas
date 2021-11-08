 <!-- //  ------- FUNCIONES ----- // 

- Mostrar todos los becados
	Filtrar por equipo
	- Ver los reportes (SLP Diarios, totales, copas)

Agregar becados
reemplazar becados 
Lista de suplentes con filtro c/exp 


-->

<script>
	import { db } from './firebase'


	let beca = {
		beca_num: '',
		nombre: '',
		id_tgm: '',
		mail: '',
	//	grupo: '' // Poder filtrar entre c/u de los grupos  
	
	
	}

// Anular repetidos 

	let lista_becas = []



	db.collection('becas').onSnapshot(querySnapshot => {
		 let docs = []
		querySnapshot.forEach(doc => {
			docs.push({...doc.data(), id_fbs: doc.id})
		})
		lista_becas = [...docs]
		
	})


	const nueva_beca = async () => {
		
		await db.collection('becas').doc().set({...beca, creadoEl: Date.now()
		});
		console.log('becado añadido con éxito')
	}

	const handleSubmit = () => {
		nueva_beca()

		beca = {beca_num:'', nombre: '', id_tgm: '', mail: ''}
	}


	let bec_activ = false
	let add_beca = false

	const mostrar_becados = () => bec_activ = true
	const agregar_becados = () => add_beca = true


</script>


<main>

	{#if add_beca === true}
		<form on:submit|preventDefault={handleSubmit} action="">
		
			<input class="border border-solid border-black" bind:value={beca.beca_num} type="text" placeholder="Numero de Beca"/>
			<input class="border border-solid border-black" bind:value={beca.nombre} type="text" placeholder="Nombre" />
			<input class="border border-solid border-black"  bind:value={beca.id_tgm} type="text" placeholder="ID Telegram"/>
			<input class="border border-solid border-black"  bind:value={beca.mail} type="text" placeholder="E-mail"/>
			<button class="invisible">Fafaf</button>		
		</form>	
	{/if}
<navbar>	
	<button class="bg-yellow-500 p-3 m-1 rounded-2xl" on:click={agregar_becados}>Agregar becado</button>	
	<br>
	<button class="bg-green-500" on:click={mostrar_becados}>Mostrar lista de becados</button>	
</navbar>	
	{#if bec_activ === true}
		<div class="bg-gray-200 p-2">	
				<div class="flex underline justify-around">
					<p class="">ID de Beca</p>
					<p>Nombre</p>
					<p>Id de Telegram</p>
					<p>Correo Electrónico</p>
				</div><br />
		{#each lista_becas as becado}
		<div class="flex justify-around text-color-red-400">

				<h5 class="text-center font-bold">{becado.beca_num}</h5>
				<p class="text-center">{becado.nombre}</p>
				<p class="text-center">{becado.id_tgm}</p>
				<p class="text-center">{becado.mail}</p>
			
			</div>
			{/each}
		</div>		

			{/if}
</main>

