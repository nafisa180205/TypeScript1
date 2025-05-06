{
        //never type

        function handleError (message: string): never{
            throw new Error(message)
        }
    
        handleError("Error hoye gelo")
}