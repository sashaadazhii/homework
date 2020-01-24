var app = new Vue({
    el: '#app',

    data: {
        products: [
            { title: 'Black coffee', img: './assets/5.png', price: 2.65, qty: 0, isChecked: false },
            { title: 'White coffee', img: './assets/4.png', price: 3.00, qty: 0, isChecked: false },
            { title: 'Latte coffee', img: './assets/3.png', price: 4.20, qty: 0, isChecked: false },
            { title: 'Breakfest coffee', img: './assets/2.png', price: 5.50, qty: 0, isChecked: false },
            { title: 'Cappuccino', img: './assets/1.png', price: 4.70, qty: 0, isChecked: false },
        ],

        cart: [],
    },

    methods: {
        addChecked: function (item) {
            item.qty = item.qty + 1;
            item.isChecked = true;
        },

        removeQty(product) {
            product.qty = 0;
        },

        incr: function (product) {
            product.qty = product.qty + 1;
        },

        decr: function (product) {
            product.qty = product.qty - 1;

            if (product.qty <= 0) {
                product.qty = 0;
            }
        },
    },

    computed: {
        addToCart: function () {
            let count = 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].isChecked) {
                    count = count + this.products[i].qty;
                }
            }
            return count;
        }

        // listSize() {
        //     return this.students.length;
        // },
        // sumIQ: function () {

        //     let sum = 0;
        //     for (var i = 0; i < this.students.length; i++) {
        //         if (this.students[i].isChecked) {
        //             sum = sum + this.students[i].iq;
        //         }
        //     }
        //     return sum;
        // }
    }
})