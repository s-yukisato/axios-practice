const template = `
<div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
</div>
<div>
    <p>AXIOS</p>
    <button @click="submit">送信</button>
</div>
`

const App = {
    template,
    components: {

    },
    props: {

    },
    emits: [],
    setup(props, context) {
        const submit = async () => {
            await axios({
                method: "POST",
                url: "https://script.google.com/macros/s/AKfycbxZEe4QTItk4UVW2pUupsvCNkqrPJkBYHVSOqz79uxb81TOlFqr/exec",
                data: { value: "yamada" }
            })
        }
        return {
            submit
        }
    }
}