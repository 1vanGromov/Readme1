const form = document.querySelector('#auth_form');
const login = document.querySelector('#login');
const password = document.querySelector('#password');

const user = JSON.parse(localStorage.getItem('main'));

function csvToObj(usersText){
    const usersListText = usersText.split('\n');
    const objectKeys = usersListText.shift().split(',');
    const usersList = [];
    return usersListText.map((user) => {
        const userNewObj = {};
        const userObj = user.split(',');
        objectKeys.forEach((key, index) => {
            if (index !== objectKeys.length -1){
                userNewObj[key.toString()] =  userObj[index];
            }
        })
        return userNewObj;
    })
}

function findUser(user, usersList){
    return usersList.find((userCurrent) => {
        return userCurrent.login === user.login && userCurrent.password === user.password;
    })
}