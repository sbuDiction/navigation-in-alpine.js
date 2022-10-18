document.addEventListener('alpine:init', () => {
    // Alpine.store()
    Alpine.data('app', function () {
        return {
            NAVIGATION: '',
            isLoggedIn: false,
            userEmail: '',
            password: '',
            username: '',


            init() {
                console.log(this.isLoggedIn);
                // axios call to check if a user is logged in 
                if (this.isLoggedIn) {
                    this.NAVIGATION = 'home'
                } else {
                    this.NAVIGATION = 'login';
                }
            },

            signIn() {
                console.log('signing in');
                if (this.userEmail != '' && this.username != '') {
                    this.isLoggedIn = true;
                    this.NAVIGATION = 'home'
                } else {
                    console.log('PLEASE INPUT YOUR DETAILS!');
                }
            },

            register({ event }) {
                // event.preventDefault()
                console.log('registering...');
                if (this.userEmail != '' && this.username != '' && this.password != '') {
                    this.isLoggedIn = true;
                    this.NAVIGATION = 'home'
                } else {
                    console.log('PLEASE INPUT YOUR DETAILS!');
                }
            }
        }
    })
})