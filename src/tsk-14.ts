{
    type ToDo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
      }
    async function fetchUserData(): Promise<ToDo>  {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data:ToDo = await response.json()
        console.log(data);
        return data
    }

    fetchUserData()
}