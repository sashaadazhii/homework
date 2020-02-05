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
            catURL: '',

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
                        this.$router.push('cat');
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
            catURL: '',
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

const Cat = {
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
            catURL: '',

        }
    },
    template: `
        <div class="offset-sm-2 col-sm-6">
            <h4>CAT from token</h4>
            <img v-bind:src="catURL" alt="cat">
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
                .get(`http://46.101.202.248:9001/cat?token=${this.token}`, {
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
                        this.catURL = response.data.cat;


                        // router.beforeEach((to, from, next) => {
                        //     if (!app.isAuthenticated) next('/login')
                        //     else next('/register')
                        // })

                        localStorage.setItem('token', this.token);
                    }
                    console.log(response.data);
                });
        },
    }
};

const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/cat', component: Cat },
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