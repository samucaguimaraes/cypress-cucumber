import * as DELETEBooks from '../requests/DELETEBooks.request'
import * as GETBooks from '../requests/GETBooks.request'
import * as POSTBooks from '../requests/POSTBooks.request'
import * as PUTBooks from '../requests/PUTBooks.request'

describe('DELETE Books',() => {
    it('Alterar um livro',() => {
        GETBooks.allBooks().then((resAllBook) => {
            PUTBooks.changeBook(resAllBook.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200)
                expect(resChangeBook.body).to.be.not.null
                expect(resChangeBook.body.title).to.eq('Livro Alterado')
            })
        })
    })

    it('Criar e Alterar um livro',() => {
        POSTBooks.addBooks().then((resAddBook) => {
            PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200)
                expect(resChangeBook.body).to.be.not.null
                expect(resChangeBook.body.title).to.eq('Livro Alterado')
            })
        })
    })
})