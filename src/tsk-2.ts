{
    function litaralTypes(name: string,age: number, role: 'admin' | 'user' | 'guest'){

        if(role === 'admin'){
            return role;
        }
        else{
            return name
        }

    }

    console.log(litaralTypes("nafisa", 1000, 'user'))
}