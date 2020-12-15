export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            todos: [],
            user: "ARedondoVilla",
            test: [{"label": "Tarea 1", "done": true}, {"label": "Tarea 2", "done": true}, {"label": "Tarea 3", "done": true}]
        },
        actions: {
            setLoading(status) {
                setStore({loading: status})
            },
            toggleLoader() {
                const store = getStore()
                setStore({loading: !store.loading})
            },
            getToDoList() {
                const store = getStore()
                const endpoint = "https://assets.breatheco.de/apis/fake/todos/user/ARedondoVilla";
                const config = {
                    method: "GET"
                }
                fetch(endpoint, config).then((response) => {
                    return response.json()
                }).then((json) => {
                    setStore({ todos: json})
                    console.log(store.todos);
                })
            }

        }
    }
}