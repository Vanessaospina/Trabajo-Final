<template>
    <div>
        <label>userid</label>
        <input type="text" v-model="form.userid" />
        <label>id</label>
        <input type="text" v-model="form.id" />
        <label>titulo</label>
        <input type="text" v-model="form.title" />
        <label>contexto</label>
        <input type="text" v-model="form.body" />
        <button @click="actualizar(form.userid)">Guardar</button>
        <button @click="cancelar()">Cancelar</button>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            form: {
                userid: null,
                id: null,
                titulo: null,
                contexto: null,


            }

        }

    },
    methods: {
        async actualizar(id) {
            await axios.put("https://themealdb.com/posts/" + id, this.form).then(response => {
                console.log(response)
                this.router.push("/Ejemplo")
            });
        },
        cancelar() {
        },

    },
    computed() {

    },
    async mounted() {
        let id = this.$route.params.id

        await axios.get("https://themealdb.com/posts/" + id).then(response => {
            this.form.userid = response.data.userid
            this.form.id = response.data.id
            this.form.titulo = response.data.titulo
            this.form.contexto = response.data.contexto

        });
    }

}

</script>
