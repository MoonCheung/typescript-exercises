import chalk from 'chalk';

/*

Intro:

    Project grew and we ended up in a situation with
    some users starting to have more influence.
    Therefore, we decided to create a new person type
    called PowerUser which is supposed to combine
    everything User and Admin have.

Higher difficulty exercise:

    Define type PowerUser which should have all fields
    from both User and Admin (except for type),
    and also have type 'powerUser' without duplicating
    all the fields in the code.

Run:

    npm run 7

    - OR -

    yarn -s 7

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

// 我是Typescript菜鸟
// (1) 创建新的交集类型: User & Admin
// (2) 使用Omit删除'type'属性
// (3) 与包含自定义“类型”属性的类型相交
type PowerUser = Omit<User & Admin, 'type'> & { type: 'powerUser' };

type Person = User | Admin | PowerUser;

const persons: Person[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
  {
    type: 'powerUser',
    name: 'Nikki Stone',
    age: 45,
    role: 'Moderator',
    occupation: 'Cat groomer'
  }
];

function isAdmin(person: Person): person is Admin {
  return person.type === 'admin';
}

function isUser(person: Person): person is User {
  return person.type === 'user';
}

function isPowerUser(person: Person): person is PowerUser {
  return person.type === 'powerUser';
}

function logPerson(person: Person) {
  let additionalInformation: string = '';
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  if (isPowerUser(person)) {
    additionalInformation = `${person.role}, ${person.occupation}`;
  }
  console.log(`${chalk.green(person.name)}, ${person.age}, ${additionalInformation}`);
}

console.log(chalk.yellow('Admins:'));
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log(chalk.yellow('Users:'));
persons.filter(isUser).forEach(logPerson);

console.log();

console.log(chalk.yellow('Power users:'));
persons.filter(isPowerUser).forEach(logPerson);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/utility-types.html
