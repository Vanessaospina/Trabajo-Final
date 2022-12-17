<template>
    <div>
        <Siderbar></Siderbar>
        {{ numero }}
        <br />
        {{ mensaje }}
        <br />
        {{ valor }}
        <br />
        <label>nombre:</label>
        <input type="text" v-model="nombre" />{{ nombre }}
        <br />
        <label>apellido:</label>
        <input type="text" v-model="apellido" />{{ apellido }}
        <br />
        <label>direccion:</label>
        <input type="text" v-model="direccion" />{{ direccion }}
        <br />
        <label>telefono:</label>
        <input type="text" v-model="telefono" />{{ telefono }}
        <br />
        <button v-on:click="datos">Aceptar</button>
    </div>
</template>
<script>
import { getMaxListeners } from 'process'
import Siderbar from '../components/Siderbar.vue'
export default {

    name: "base",
    props: {

    },
    data() {
        return {
            numero: 2,
            mensaje: "Buenos Dias",
            valor: null,
            nombre: "Vanessa",
            apellido: ospina,
            direccion: vanesa,
            telefono: 3113224660
        }
    },
    methods: {
        datos() {
            alert(this.nombre + ' ' + this.apellido + ' ' + this.direccion + this.telefono)
        }
    },
    components: {
        Siderbar
    }
}
</script>