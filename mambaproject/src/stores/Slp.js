import { writable } from 'svelte/store';

const createUser = () => {
    const { subscribe, set } = writable()

}

const calcularSlp = () => {

    const { subscribe, update, set } = writable()

    return {
        subscribe,
        sumar: (slpDiario) => {
            update(slpTotal => slpTotal + slpDiario)
        },
        promediar: () => {
            update(slpTotal => slpTotal / diasJugados)
        },

    }
}

export const slp = calcularSlp();