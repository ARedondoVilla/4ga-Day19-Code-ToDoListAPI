export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            todos: [],
            text: null,
            user: "ARedondoVilla",
            test: [{"label": "Tarea 1", "done": true}, {"label": "Tarea 2", "done": true}, {"label": "Tarea 3", "done": true}]
        },
        actions: {
            // setLoading(status) {
            //     setStore({loading: status})
            // },
            // toggleLoader() {
            //     const store = getStore()
            //     setStore({loading: !store.loading})
            //},
            getToDoList() {
                const store = getStore()
                const endpoint = 'https://assets.breatheco.de/apis/fake/todos/user/ARedondoVilla';
                const config = {
                    method: "GET"
                }
                fetch(endpoint, config).then((response) => {
                    return response.json()
                }).then((json) => {

                    setStore({ todos: json})
                    store.todos.map((value, index) => {
                        value["id"] = Math.random() // insertar un id a cada uno de los objetos del array
                    })
                    setStore()

                    console.log(store.todos);
                })
            },
            setToDoList(data) {
                const store = getStore();
                const endpoint = "https://assets.breatheco.de/apis/fake/todos/user/ARedondoVilla";
                const config = {
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
                    }
                }
                fetch(endpoint, config)
                getActions().getToDoList()
            },
            addLabel(item) {
                const store = getStore();
                const newList = [...store.todos]
                newList.push({"label": item, "done": false, "id": Math.random()})
                setStore({todos: newList})
                console.log("AddLabel");
                getActions().setToDoList(store.todos)
                console.log(store.todos);
                
            },
        }
    }
}