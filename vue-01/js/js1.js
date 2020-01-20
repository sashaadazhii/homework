var app = new Vue({
    el: '#app',
    // activeColor: 'red',
    data: {
        message: '',
        style: '',
        list: [],
    },

    methods: {
        addItem: function (m) {
            app.list.push({
                text: app.message,
                color: '#' + app.message,
            });
            app.message = '';
        },
    },
})
