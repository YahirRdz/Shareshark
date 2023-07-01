export const getUserQuery = `
    query GetUser=($email: String!){
        user(by: {email: $email}){
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
`


export const createUserMutation = `
    mutatios createUser($input: UserCreateInput!){
        userCreate(input: $input) {
            user {
                id
                email
                avatarUrl
                description
                githubUrl
                linkedinUrl
                id
            }
        }
    }
`