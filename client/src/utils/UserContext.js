import React from 'react'

const UserContext = React.createContext({
    name: "",
    email: "",
    googleID: "",
    movies: [],
})

export default UserContext