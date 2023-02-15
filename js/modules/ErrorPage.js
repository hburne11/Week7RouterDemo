export default {
    template: `<h1>That page doesn't exist!</h1>`,

    created() {
        console.log('hit the error route');

        //redirect back to safe route (home page)
        setTimeout(()=> {
            this.$router.push({ name: 'home'});
        }, 2500); // wait 2.5 secs and then execute the function
    }
}