 <!-- //  ------- FUNCIONES ----- // 

- Mostrar todos los becados
	Filtrar por equipo
	- Ver los reportes (SLP Diarios, totales, copas)

Agregar becados
reemplazar becados 
Lista de suplentes con filtro c/exp 


-->

<script>
	import { db } from './firebase';
	import { Router, Link, Route } from 'svelte-routing';
	import Home from './views/Home.svelte';
	import Becas from './views/Becas.svelte';
	import Reportes from './views/Reportes.svelte';
	import About from './views/About.svelte';

</script>


<main class="p-36">
	<h1 class="underline font-black text-8xl text-center mb-8">M.A.M.B.A.</h1>

	<Router>
		<nav>
			<Link to="/">INICIO</Link>
			<Link to="/becas">ADMINISTRACION</Link>
			<Link to="/reportes">BECADOS</Link>
			<Link to="/acercade">SOBRE NOSOTROS</Link>
		</nav>
	
		<Route path="/">
			<Home></Home>
		</Route>
		<Route path="becas">
			<Becas></Becas>
		</Route>
		<Route path="reportes">
			<Reportes></Reportes>
		</Route>
		<Route path="sobrenosotros">
			<About></About>
		</Route>

	</Router>

</main>

