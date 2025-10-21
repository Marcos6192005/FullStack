<template>
    <div class="container mt-4">
    <div class="row">
        <div class="col">
        <h1 class="text-primary">Book List</h1>
        <b-button size="sm" variant="success" :to="{ name: 'NewBook' }" >Add Book</b-button>
        <br /><br />
        <b-table
            striped
            hover
            :items="sortedBooks"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            @sort-changed="onSortChanged"
        >
            <template v-slot:cell(actions)="data">
            <b-button
                size="sm"
                variant="primary"
                :to="{ name: 'EditBook', params: { bookID: data.item.id } }"
                class="mr-2"
            >
            Edit
            </b-button>
            <b-button
                size="sm"
                variant="danger"
                :to="{ name: 'DeleteBook', params: { bookID: data.item.id } }"
            >
                Delete
            </b-button>
            </template>
        </b-table>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
data() {
    return {
        books: [],
        fields: [
        { key: 'title', label: 'Title', sortable: true },
        { key: 'author', label: 'Author', sortable: true },
        { key: 'description', label: 'Description', sortable: false },
        { key: 'actions', label: 'Actions' }
        ],
      sortBy: 'title',   // columna por defecto para ordenar
      sortDesc: false    // orden ascendente por defecto
    }
},
    computed: {
    sortedBooks() {
      // Ordena la lista localmente en base a sortBy y sortDesc
        if (!this.sortBy) return this.books
        return this.books.slice().sort((a, b) => {
        let aVal = a[this.sortBy]
        let bVal = b[this.sortBy]
        if (typeof aVal === 'string') aVal = aVal.toLowerCase()
        if (typeof bVal === 'string') bVal = bVal.toLowerCase()
        if (aVal < bVal) return this.sortDesc ? 1 : -1
        if (aVal > bVal) return this.sortDesc ? -1 : 1
        return 0
        })
    }
},
    methods: {
    getBooks() {
        const path = 'http://10.140.12.44:8000/book/books/'
        axios
        .get(path)
        .then(res => {
            this.books = res.data
        })
        .catch(error => {
            console.error(error)
        })
    },
    onSortChanged(ctx) {
        this.sortBy = ctx.sortBy
        this.sortDesc = ctx.sortDesc
    }
},
created() {
    this.getBooks()
    }
}
</script>

<style scoped>
.mr-2 {
    margin-right: 0.5rem;
}
</style>
