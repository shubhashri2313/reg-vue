<template>
<div>
    <Header></Header>
    <div class="container mt-5">
    <form class="needs-validation" novalidate @submit.prevent="update">
        <br/>
        <div class="form-row">
            <div class="col-md-12 mb-6" style="justify-content: center;">
                <label for="firstName">First Name</label>
                <input type="text" class="form-control" id="firstName" placeholder="First name" v-model="reg.firstName" required>
                <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-12 mb-6" style="justify-content: center;">
                <label for="middleName">Middle Name</label>
                <input type="text" class="form-control" id="middleName" placeholder="Middle name" v-model="reg.middleName" required>
                <div class="valid-feedback">Looks good!</div>
            </div>

            <div class="col-md-12 mb-6" style="justify-content: center;">
                <label for="lastName">Last Name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Last name" v-model="reg.lastName" required>
                <div class="valid-feedback">Looks good!</div>
            </div>
        </div>

        <div class="col-md-12 mb-4" style="justify-content: center;">
            <div class="col-md-12 mb-6">
                <label for="pan">PAN Number</label>
                <input type="text" class="form-control" id="pan" placeholder="PAN Number" v-model="reg.pan" required pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" maxlength="10" minlength="10">
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please provide a valid PAN Number.</div>
            </div>
            <div class="col-md-12 mb-6" style="justify-content: center;">
                <label for="dob">Date of Birth</label>
                <input type="date" class="form-control" id="dob" format="yyyy-MM-dd" v-model="reg.DOB" min="1979-01-01" max="2006-12-31" required>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please provide a valid date of birth.</div>
            </div>
        </div>

        <div class="col-md-12 mb-6" style="justify-content: center;">
            <label for="state">State</label>
            <select class="custom-select" id="state" v-model="reg.state" required>
                <option value="" disabled selected>Select State</option>
                <option v-for="state in states" :value="state" :key="state">{{ state }}</option>
            </select>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please select a state.</div>
        </div>

        <div class="col-md-12 mb-6" style="justify-content: center;">
            <label for="gender">Gender</label>
            <div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="male" value="Male" v-model="reg.gender" required>
                    <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="female" value="Female" v-model="reg.gender" required>
                    <label class="form-check-label" for="female">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="transgender" value="Transgender" v-model="reg.gender" required>
                    <label class="form-check-label" for="transgender">Transgender</label>
                </div>
            </div>
            <div class="valid-feedback">Looks good!</div>
            <div class="invalid-feedback">Please select a gender.</div>
        </div>

        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="terms" required data-bs-toggle="modal" data-bs-target="#exampleModal">

                <label class="form-check-label" for="terms">Terms & Conditions</label>
                <div class="invalid-feedback">You must agree before submitting.</div>
            </div>
        </div>
        <button class="btn btn-primary" type="submit">SUBMIT</button>
        <br/>
        <br/>
    </form>

    <!-- Button trigger modal -->
    <!-- <button type="checkbox" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">

        </button> -->

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>

            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue'

export default {
    name: 'Update',
    components: {
        Header
    },
    data() {
        return {
            reg: {
                firstName: '',
                middleName: '',
                lastName: '',
                pan: '',
                state: '',
                gender: '',
                DOB: ''
            },
            states: [
                'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
                'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
                'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
                'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Other'
            ]
        };
    },
    async mounted() {
        console.warn("mounted")
        // this.reg = null;
        console.warn(this.$route.params.id);
        const result = await axios.get(`http://localhost:8080/reg/${this.$route.params.id}`);
        console.warn(result);

        this.reg.DOB = result.data.DOB;
        this.reg.firstName = result.data.firstName;
        this.reg.middleName = result.data.middleName;
        this.reg.lastName = result.data.lastName;
        this.reg.pan = result.data.pan;
        this.reg.state = result.data.state;
        this.reg.gender = result.data.gender;

        console.log(this.reg, "result.data.DOB", result.data.DOB, "this.reg.DOB - ", this.reg.DOB)
    },
    methods: {

        async update() {
            const form = document.querySelector('.needs-validation');
            if (form.checkValidity()) {
                try {
                    let result = await axios.put(`http://localhost:8080/reg/${this.$route.params.id}`, this.reg);
                    if (result.status == 200) {
                        this.$router.push({
                            name: 'Home'
                        }); // Redirect to the 'Home' route
                    }
                    console.warn("result", result);
                } catch (error) {
                    console.error("Error updating todo:", error);
                }
            }
            form.classList.add('was-validated');
        }
    }
}
</script>

<style>
button{
  background-color: rgb(32, 67, 77);
  color: rgb(254, 253, 250);
}</style>

