{
    //union and intersection

    interface Book{
        title: string,
        author: string
    }
    interface Magazine {
        title: string,
        publisher: string
    }

    type BookorMagazine = Book | Magazine

    const book1 : BookorMagazine ={
        title: "Hi",
        author: "Hi"
    }

    console.log(book1)

    type BookandMagazine = Book & Magazine

    const book2 : BookorMagazine ={
        title: "Hi",
        author: "Hi",
        publisher: "HI"
    }

    console.log(book2)
}