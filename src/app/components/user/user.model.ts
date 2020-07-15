export interface User {
    login?: boolean,
    id: number,
    nomeUsuario: string,
    dataNascimentoUsuario: Date,
    senhaUsuario: string,
    emailUsuario: string,
    dataCadastro: Date,
    isAdmin: number,
    created_at : Date,
    updated_at: Date
}