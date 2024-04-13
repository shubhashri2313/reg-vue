<template>
    <div>
        <Header></Header>
        <div class="container mt-5">
            <h1>Dive into Your Data</h1>
            <div class="table-responsive">
                <table class="table table-bordered table-striped" style="border: 3px solid ;">
                    <!-- Table header -->
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>MiddleName</th>
                            <th>LastName</th>
                            <th>PAN</th>
                            <th>DOB</th>
                            <th>State</th>
                            <th>Gender</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <!-- Table body -->
                    <tbody>
                        <tr v-for="(item, i) in regis" :key="i">
                            <td>{{ item.id }}</td>
                            <td>{{ item.firstName }}</td>
                            <td>{{ item.middleName }}</td>
                            <td>{{ item.lastName }}</td>
                            <td>{{ item.pan }}</td>
                            <td>{{ item.DOB }}</td>
                            <td>{{ item.state }}</td>
                            <td>{{ item.gender }}</td>
                            <td>
                                <router-link :to="'/update/' + item.id" class="btn btn-primary"><i
                                        class="fas fa-edit"></i> Update</router-link>
                            </td>
                            <td>
                                <button @click="deleteItem(item.id)" class="btn btn-danger"><i
                                        class="fas fa-trash-alt"></i> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <br />

       
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <!-- <li class="page-item">
                        <a class="page-link" href="#" @click="loadTodo(currentPage - 1)" tabindex="-1">Previous</a>
                    </li>

                    <li v-for="pageNumber in totalPages" :key="pageNumber"
                        :class="{ 'active': pageNumber === currentPage }" class="page-item">
                        <a @click="loadTodo(pageNumber)" class="page-link">{{ pageNumber }}</a>
                    </li>
                

                    <li class="page-item">
                        <a @click="loadTodo(currentPage + 1)" class="page-link">Next</a>
                    </li> -->
                    <!-- ============================ -->
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <a class="page-link" @click="loadTodo(currentPage - 1)" tabindex="-1">Previous</a>
                    </li>
                    <li v-for="pageNumber in totalPages" :key="pageNumber"
                        :class="{ 'active': pageNumber === currentPage }" class="page-item">
                        <a @click="loadTodo(pageNumber)" class="page-link">{{ pageNumber }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <a class="page-link" @click="loadTodo(currentPage + 1)">Next</a>
                    </li>

                </ul>
            </nav>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {

    name: "Home",
    data() {
        return {
            //name: "",
            regis: [],
            currentPage: 1,
            totalPages: 1,


        };
    },
    components: {
        Header,
    },
    mounted() {
        this.loadTodo();

    },
    methods: {

        async loadTodo(page = 1, limit = 10) {
            console.warn("loading....");
            // if (page > 2|| page < 0) {
            //     page = 1
            // }
            try {
                // let result = await axios.get("http://localhost:8080/reg");
                let result = await axios.get(`http://localhost:8080/reg?page=${page}&limit=${limit}`);

                // console.warn("date", this.regis.dob);
       

                this.regis = result.data.data;
                // this.regis = result.data;
                this.totalPages = result.data.totalPages;
                this.currentPage = page;
                

            } catch (error) {
                console.error("Error loading regis:", error);
            }
        },

        async deleteItem(id) {
            if (confirm("Are you sure you want to delete this item?")) {
                try {
                    await axios.delete("http://localhost:8080/reg/" + id);
                    this.loadTodo();
                } catch (error) {
                    console.error("Error deleting item:", error);
                }
            }
        },

    },

};
</script>

<style>
/* td {
    width: 160px;
  } */

th,
td {
    white-space: nowrap;
}

.table-responsive {
    overflow-x: auto;
}

</style>
