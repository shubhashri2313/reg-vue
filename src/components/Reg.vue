<template>
<div>
    <Header></Header>
    <div class="container mt-5">
        <form class="needs-validation" novalidate @submit.prevent="submitForm">
            <br/>
            <div class="form-row">
                <div class="col-md-12 mb-6" style="justify-content: center;">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="First name" v-model="firstName" required>
                    <div class="valid-feedback">Wow You Have a Nice Name!</div>
                </div>

                <div class="col-md-12 mb-6" style="justify-content: center;">
                    <label for="middleName">Middle Name</label>
                    <input type="text" class="form-control" id="middleName" placeholder="Middle name" v-model="middleName" required>
                    <div class="valid-feedback">Looks good!</div>
                </div>

                <div class="col-md-12 mb-6" style="justify-content: center;">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="Last name" v-model="lastName" required>
                    <div class="valid-feedback">Looks good!</div>
                </div>
            </div>

            <div class="form-row">
                <div class="col-md-12 mb-6" style="justify-content: center;">
                    <label for="pan">PAN Number</label>
                    <input type="text" class="form-control" id="pan" placeholder="PAN Number" v-model="pan" required pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" maxlength="10" minlength="10">
                    <div class="valid-feedback">You got it!</div>
                    <div class="invalid-feedback">Please provide a valid PAN Number.</div>
                </div>
                <div class="col-md-12 mb-6" style="justify-content: center;">
                    <label for="dob">Date of Birth</label>
                    <input type="date" class="form-control" id="dob" v-model="dob" min="1979-01-01" max="2006-12-31" required>
                    <div class="valid-feedback">Thats Great!</div>
                    <div class="invalid-feedback">Please provide a valid date of birth.</div>
                </div>
            </div>

            <div class="col-md-12 mb-6" style="justify-content: center;">
                <label for="state">State</label>
                <select class="custom-select" id="state" v-model="state" required>
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
                        <input class="form-check-input" type="radio" id="male" value="Male" v-model="gender" required>
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="female" value="Female" v-model="gender" required>
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="transgender" value="Transgender" v-model="gender" required>
                        <label class="form-check-label" for="transgender">Transgender</label>
                    </div>
                </div>
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please select a gender.</div>
            </div>

            <div class="form-group">
                <div class="form-check">
                    <input style="justify-content: center;" class="form-check-input" type="checkbox" id="terms" required data-bs-toggle="modal" data-bs-target="#exampleModal">

                    <label class="form-check-label" for="terms">Terms & Conditions</label>
                    <div class="invalid-feedback">You must agree before submitting.</div>
                </div>
            </div>
            <button class="btn btn-primary" type="submit">SUBMIT</button>
            <br/>  <br/>  


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
import Header from './Header.vue';

export default {
    name: 'Reg',
    data() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
            pan: '',
            state: '',
            gender: '',
            dob: '',
            showModalFlag: false,
            states: [

                'Andhra Pradesh',
                'Arunachal Pradesh',
                'Assam',
                'Bihar',
                'Chhattisgarh',
                'Goa',
                'Gujarat',
                'Haryana',
                'Himachal Pradesh',
                'Jharkhand',
                'Karnataka',
                'Kerala',
                'Madhya Pradesh',
                'Maharashtra',
                'Manipur',
                'Meghalaya',
                'Mizoram',
                'Nagaland',
                'Odisha',
                'Punjab',
                'Rajasthan',
                'Sikkim',
                'Tamil Nadu',
                'Telangana',
                'Tripura',
                'Uttar Pradesh',
                'Uttarakhand',
                'West Bengal',
                'Other'

            ],
        };
    },
    components: {
        Header,
    },
    methods: {
        async submitForm() {
            const form = document.querySelector('.needs-validation');
            if (form.checkValidity()) {

                try {

                    const response = await axios.post("http://localhost:8080/reg", {

                        firstName: this.firstName,
                        middleName: this.middleName,
                        lastName: this.lastName,
                        pan: this.pan,
                        state: this.state,
                        gender: this.gender,
                        dob: this.dob,

                    });
                    if (response.status === 201) {
                        this.$router.push({
                            name: 'Home'
                        });
                    }
                } catch (error) {
                    console.error("Error adding regis:", error);
                }

            }
            form.classList.add('was-validated');

        },
        async update() {
            try {
                let result = await axios.put(`http://localhost:8080/todo/${this.$route.params.id}`, this.regis);
                this.submitForm();
                if (result.status == 201) {
                    this.$router.push({
                        name: 'Home'
                    });
                }
                console.warn("result", result);
            } catch (error) {
                console.error("Error updating todo:", error);
            }
        },

    },
};
</script>

<style>
body {
    background-image: url('D:\Reg_App\reg-vue\src\assets\painting-mountain-lake-with-mountain-background_188544-9126.avif');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.container {
    /* max-width: 600px;
    margin: auto; */
    /* padding: 20px; */
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

form {
    margin-top: 20px;
}

/* Additional styling for input fields */

select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

/* Styling for buttons */
button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
