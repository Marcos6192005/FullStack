<template lang= "html"> 
    <div class="cantainer">
        <div class="row">
            <div class="col text-left">
                <h1>New Book</h1>
        </div>
    </div>
    <div class ="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <form class="form-group row">
                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Title</label>
                            <div class="col-sm-10">
                                <input type="text" placeholder="title" class="form-control" name="Title" v-model="form.title">
                            </div>
                            <div class="form-group row">
                                <label for="author" class="col-sm-2 col-form-label">Author</label>
                                <div class="col-sm-10">
                                    <input type="text" placeholder="Athor" class="form-control" name="Author" v-model="form.author">
                            </div>
                        </div>
                            <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Descripción</label>
                            <div class="col-sm-10">
                                <input type="text" placeholder="Description" class="form-control" name="Description" v-model="form.description">
                        </div>
                    </div>
                    <div class="rows">
                        <div class="col text-left">
                            <b-button type="submit" variant="primary">Agregar</b-button>
                            <b-button type="submit" class="btn-large-space" :to="{ name:'listBook'}">Cancelar</b-button>
                        </div>
                    </div>
                </div>
            </form>
    </div>
        </div>
            </div>    
                </div>
</div>
</template>


<script>
import axios from 'axios';
import swal from 'sweetalert';
    export default {
        data() {
            return {
                form: {
                    title: '',
                    author: '',
                    description: ''
            }
        }
    },
    methods: {
        OnSubmit (evt) {
            evt.preventDefault();
            const path = `http://localhost:3000/book/books`
            axios.post(path, this.form)
            .then((res) => {
                this.form.title = Response.data.title;
                this.form.author = Response.data.author;
                this.form.description = Response.data.description;
                swal("Libro Agregado", "Libro agregado Corresctamente", "success");
                this.$router.push({ name: 'ListBook' });
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
    created() {
        this.getBooks()
    }
}

</script>

<style lang="css">
</style>