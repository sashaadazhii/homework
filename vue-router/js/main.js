const Login = {
    data: function () {
        return {
            users: {
                email: '',
                password: '',
            },
            error: false,
            success: false,
            message: '',
            btnLogin: false,
            token: '',
        }
    },

    template: `
        <div class="offset-sm-2 col-sm-6">
            <h4>Login</h4>
            <form v-on:submit.prevent="login">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp"
                    placeholder="Enter email" v-model="users.email">
                    <div v-if="error">{{message}}</div>
                    <div v-if="success">Good email</div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="users.password">
                    <div v-if="error">{{message}}</div>
                    <div v-if="success">Good password</div>
                </div>
                <button type="submit" class="btn btn-info">Enter</button>
            </form>      
        </div>
    `,

    methods: {
        login() {
            axios
                .post('http://46.101.202.248:9001/login', {
                    email: this.users.email,
                    password: this.users.password,
                })
                .then((response) => {
                    if (response.data.status === 'error') {
                        this.error = true;
                        this.success = false;
                        this.message = response.data.message;

                    } else {
                        this.success = true;
                        this.error = false;
                        this.message = response.data.message;
                        this.token = response.data.token;
                        this.isAuthenticated = true;
                        localStorage.setItem('token', this.token);
                        // this.$router.push('cat');
                    }
                    console.log(response.data);
                });
        },
    }
};

const Register = {
    data: function () {
        return {
            users: {
                email: '',
                password: '',
            },
            error: false,
            success: false,
            message: '',
            btnRegister: false,
            token: '',
        }
    },
    template: `
        <div class="offset-sm-2 col-sm-6">
            <h4>New register</h4>
            <form v-on:submit.prevent="register">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp"
                        placeholder="Enter email" v-model="users.email">
                    <div v-if="error">{{message}}</div>
                    <div v-if="success">Good email</div>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="users.password">
                </div>
                <button type="submit" class="btn btn-info">Register</button>
            </form>
        </div>
    `,
};

const Cats = {
    data: function () {
        return {
            error: false,
            success: false,
            token: '',
            cats: [],

        }
    },
    template: `
        <div class="offset-sm-2 col-sm-6">
            <h4>Choose your cat</h4>
            <ul class="list-group">
                <li class="list-group-item" v-for="cat in cats">
                    <div> {{ cat.name }}</div>
                    <img v-bind:src="cat.picture" alt="cat">
                    <div>
                        <router-link
                        v-bind:to="'/cats/' + cat.id">see this cat</router-link>
                    </div>    
                </li>
            </ul>
        </div>
    `,
    mounted() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.getCat();
        }
    },

    methods: {
        getCat() {
            axios
                .get(`http://46.101.202.248:9001/cats?token=${this.token}`)
                .then((response) => {
                    if (response.data.status === 'error') {
                        this.error = true;
                        this.success = false;

                    } else {
                        this.success = true;
                        this.error = false;
                        this.cats = response.data;
                    }
                });
        },
    }
};

const CatsDetails = {
    data: function () {
        return {
            token: '',
            cat: {},
        }
    },
    template: `
    <div class="offset-sm-2 col-sm-6">
        <div>
            <router-link to="/cats">
                <button> Back </button>
            </router-link>
        </div>
        <div>
            <div> {{ cat.name }}</div>
            <img v-bind:src="cat.picture" alt="cat">
            <div> Color: {{ cat.color }}</div>
            <div> {{ cat.description }}</div>
         </div>
    </div>
    `,

    mounted() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
            this.getCatInfo();
        }
    },

    methods: {
        getCatInfo() {
            axios
                .get(`http://46.101.202.248:9001/cats/${this.$route.params.id}?token=${this.token}`)
                .then((response) => {
                    if (response.data.status === 'error') {
                        this.error = true;
                        this.success = false;

                    } else {
                        this.success = true;
                        this.error = false;
                        this.cat = response.data;
                    }
                    console.log(response.data);
                });
        },
    }
};

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/cats', component: Cats },
    { path: '/cats/:id', component: CatsDetails },
]

const router = new VueRouter({
    routes
});

/*-------- app -----*/
const app = new Vue({
    router,
    data: {
        isAuthenticated: false,
    },

    mounted() {
        if (localStorage.getItem('token')) {
            this.isAuthenticated = true;
        }
    },

    methods: {
        deleteToken() {
            localStorage.removeItem('token');
        }
    }
}).$mount('#app')