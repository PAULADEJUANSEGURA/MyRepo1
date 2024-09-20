const users = []
users.count = 0

users.push(
    { id: ++users.count ,
     name: 'John',
     surname: 'Doe',
     email: 'john@doe.com', 
     password: '123456789' })

users.push(
    { id: ++users.count , 
    name: 'Ada', 
    surname: 'Lovelace' ,
    email: 'ada@love.com', 
    password: 'AdaLoveLace' })

