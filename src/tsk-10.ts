{
    //Task 10: Nullish Coalescing
 
    function getDisplayName(name: string | null | undefined): string{

        return  name ? name :  "Anonymous"
    }

    console.log(getDisplayName(null))
}