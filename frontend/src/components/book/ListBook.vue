<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-text-left">
            <h1>Book List</h1>
            <b-button size="sm" :to="{ name: 'NewBook' }">Add Book</b-button><br />
                <b-table striped hover :items="books" :fields="fields">
                    <template v-slot:cell(actions)="data">
                        <b-button size="sm" variant="primary" :to="{ name: 'EditBook', params:{ bookID:data.item.id } }" class="mr-1"> Edit </b-button>
                        <b-button size="sm" variant="danger" :to="{ name: 'DeleteBook', params:{ bookID:data.item.id } }" class="mr-1"> Eliminar </b-button>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            fields: [
                { key: 'title', label: 'Title', soportable: true },
                { key: 'author', label: 'Author', soportable: true },
                { key: 'description', label: 'Description', soportable: true },
                { key: 'action', label: 'Actions', soportable: true }
            ],
            books: []
        }
    },
    methods: {
        getBooks () {
            const path = `http://localhost:8000/book/books/${this.bookID}/`
            axios.get(path).then((res) => {
                this.books = res.data;
            })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    created () {
        this.getBooks();
    }   
}
</script>

<style lang="css" scoped>
</style>