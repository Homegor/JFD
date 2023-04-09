const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

const onlineUsers = users.filter((user) => {
    return user.status === 'online'
})
const usersOnlineNames = onlineUsers.map((onlineUsers) => {
    return onlineUsers.username
})

console.log('Сейчас в онлайн следующие пользователи: ' + usersOnlineNames.join(', '))




