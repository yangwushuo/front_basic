export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        AddPerson(state,value){
            state.personList.unshift(value);
        }
    },
    state: {
        personList: [
            {id: '001',name: '王巴丹', age: 20}
        ]
    },
    getters: {
        
    }
}