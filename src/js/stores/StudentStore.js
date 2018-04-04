/* global localStorage */
import Flux from '@4geeksacademy/react-flux-dash';

class StudentStore extends Flux.Store{
    constructor(){
        super();
        
        this.state = this.getPersistedState();
        if (!this.state)
        {
            this.state = {
                breathecodeToken: null,
                githubToken: null,
                history: null,
                user: null,
                autenticated: false,
            }
        }
        this.state.todos = null;
    }
    
    setPersistedState(data){
        localStorage.setItem('state:'+this.constructor.name, JSON.stringify(Object.assign(this.state, data)));
        return this.setStoreState(data);
    }
    getPersistedState(data){
        let persistedState = JSON.parse(localStorage.getItem('state:'+this.constructor.name));
        return persistedState;
    }
    
    _login(data){
        this.setPersistedState({ 
            autenticated: true,
            history: data.history,
            breathecodeToken: data.access_token,
            user: {
                bc_id: data.id,
                wp_id: data.wp_id,
                created_at: data.created_at,
                email: data.username,
                avatar: data.avatar_url,
                full_name: data.full_name
            }
        }).emit('session');
    }
    _logout(data){
        this.setPersistedState({ 
            autenticated: false,
            breathecodeToken: null,
            user: null
        }).emit('session');
    }
    
    getAutentication(){
        return {
            autenticated: this.state.autenticated,
            history: this.state.history
        };
    }
    
    _setTodos(todos){
        this.setStoreState({ todos }).emit('todos');
    }
    getTodos(){
        return this.state.todos;
    }
    
    _updateSingleTodo(task){
        for(let i = 0; i<this.state.todos.length;i++)
            if(this.state.todos[i].id === task.id){
                this.state.todos[i].status = task.status;
                this.emit('todos');
                return this.state.todos[i];
            }
        
        throw new Error(`Task ${task.id} not found`);
        
        return false;
    }
    _appendTodos(newTodos){
        this.setStoreState({ 
            todos: this.state.todos.concat(newTodos) 
        }).emit('todos');
    }
    getSingleTodo(todo){
        
        if(!this.state.todos) return false;
        
        let present = this.state.todos.find((item) => {
            return (item.type === todo.type && item.associated_slug === todo.associated_slug);
        });
        if(typeof present === 'undefined') return false;
        else return present;
    }
    
    getStudent(){
        return this.state.user;
    }
    
}

var userStore = new StudentStore();
export default userStore;