<template lang= "html"> 
<div class= "container">
    <div class= "row">
        <div class= "col-text-left">
            <h1>Book List</h1>
            <b-button size="sm" :to="{name: 'AddBook'}"> Add Book</b-button><br>
            <b-table striped hover :items="books" :fields="fields">
                <template #cell(actions)="data">
                    <b-button size="sm" :to="{ name: 'EditBook', params: { id: data.item.id } }">Edit</b-button>
                        <div class= "col-md-12">
                            <b-button size="sm" variant="danger">Delete</b-button>
                        </div>
                    </div>
                
                </template>
        </div>

</div>
</template> 

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ListBook',
    setup() {
    // Composition API logic goes here
    }
});
</script>