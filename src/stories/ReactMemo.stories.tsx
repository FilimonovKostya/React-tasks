import React from "react";

export default {
    title: 'React.memo demo',

}

const NewMessagesCounter = (props: { count: number }) => {
    return <div> {props.count} </div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>
        {
            props.users.map((u, i) => <div key={i}> {u} </div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {
    console.log('Examole')
    const [count, setCount] = React.useState(0)
    const [users, setusers] = React.useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]

        setusers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count + 1)}> +</button>
        <button onClick={addUser}> add user</button>
        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>

}

