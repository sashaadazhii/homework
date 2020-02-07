$(document).ready(function () {
    /*modal*/
    new Vue({
        el: '#app',
        data: {
            showModalOne: false,
            showModalTwo: false,
            showModalDefault: true,
            showDefaulBtn: true,
        },
        methods: {
            openNextWindow() {
                this.showModalDefault = false;
                this.showModalOne = !this.showModalOne;
            }
        }
    });
})
