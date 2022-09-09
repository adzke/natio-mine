export type User = {
    id: number,
    username: string,
    email: string,
    profile: string
}

export type AuthorisationToken = string

export type AuthorisedUser = {
    user: User,
    token: AuthorisationToken
}