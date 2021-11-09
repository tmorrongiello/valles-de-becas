 <!-- //  ------- FUNCIONES ----- // 

- Mostrar todos los becados
	Filtrar por equipo
	- Ver los reportes (SLP Diarios, totales, copas)

Agregar becados
reemplazar becados 
Lista de suplentes con filtro c/exp 


-->

<script>
	import { db } from '../firebase';

	let beca = {
		beca_num: '',
		nombre: '',
		id_tgm: '',
		mail: '',
	//	grupo: '' // Poder filtrar entre c/u de los grupos  
	
	
	}

// Anular repetidos 

	let lista_becas = []



	db.collection('becas').orderBy('beca_num','asc').onSnapshot(querySnapshot => {
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

	const borrar_becado = async (id_fbs) => {

		const cnf_del = confirm('Deseas eliminar éste registro?')
		if (cnf_del) {
			await db.collection('becas').doc(id_fbs).delete()
		}
	}

	const editar_becado = (becado_act) => {
        edit_beca = true
    }


	let bec_activ = false
	let add_beca = false
    let edit_beca = false

	const mostrar_becados = () => bec_activ = true
	const agregar_becados = () => add_beca = true


</script>

<navbar class="flex space-x-2 m-2">	
    <button class="bg-yellow-500 p-3 m-1 rounded-2xl ring-2 ring-black" on:click={agregar_becados}>Agregar becado</button>	
    <br>
<!--	<button class="bg-green-500 p-3 m-1 rounded-2xl ring-2 ring-black" on:click={mostrar_becados}>Mostrar lista de becados</button>	-->
</navbar>	


{#if add_beca === true}
    <form on:submit|preventDefault={handleSubmit} action="">		
     <input class="border border-solid border-black" bind:value={beca.beca_num} type="number" placeholder="Numero de Beca"/>
     <input class="border border-solid border-black" bind:value={beca.nombre} type="text" placeholder="Nombre" />
     <input class="border border-solid border-black"  bind:value={beca.id_tgm} type="text" placeholder="ID Telegram"/>
     <input class="border border-solid border-black"  bind:value={beca.mail} type="text" placeholder="E-mail"/>
     <button class="hidden"></button>		
    </form>	
{/if}


<div class="bg-white p-2 my-0 mx-auto">	
    <div class="flex underline space-x-60">
        <p class="">ID de Beca</p>
        <p class="ml-8">Nombre</p>
        <p>Id de Telegram</p>
        <p>Correo Electrónico</p>
    </div>



    <br />
    {#each lista_becas as becado}
        <div class="flex space-x-44 ring-2 ring-blue-100 p-2 hover:bg-gray-200">
            <div class="flex w-4 px-8 justify-end">
                <h5 class="font-bold">{becado.beca_num}</h5>
            </div>
            <div class="flex w-64 px-8 justify-start">	
                <p class="">{becado.nombre}</p>
            </div>
            <div class="flex w-48 px-8 justify-start">	
                <p class="">{becado.id_tgm}</p>
            </div>
            <div class="flex w-48 px-8 justify-start">	
                <p class="">{becado.mail}</p>
            </div>
            <div class="flex w-24 px-8 justify-start space-x-5">
                <button on:click={editar_becado(becado)} class="ring-2 ring-black p-2 bg-blue-400 text-gray-100 hover:opacity-70">Editar</button>
                <button on:click={borrar_becado(becado.id_fbs)} class="ring-2 ring-black p-2 bg-red-600 text-gray-100 hover:opacity-70">Borrar</button>
            </div>
        </div>
    {#if edit_beca === true}
        <div>
            <label for="Nombre">
            Nombre: 
            <input type="text" placeholder={becado.nombre}>
        </label>
        <label for="Id de Telegram">
            ID Telegram: 
            <input type="text" placeholder={becado.id_tgm}>
        </label>
        <label for="Mail">
            Mail: 
            <input type="text" placeholder={becado.mail}>
        </label>
        </div>
        {/if} 

    {/each}

</div>		


