// Task 1
type User = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// Task 2
function getNameUsers (array: User[]):string {
    const result = array.map((item) => item.name).join(',')

    return result
}

console.log(getNameUsers(users))


// Task 3
function getSumCarsUsers (array: User[]):number {
    const result = array.reduce((acc, item) => {
        if (item.cars !== undefined) {
            acc += item.cars.length
        }

        return acc
    },0)

    return result
}

console.log(getSumCarsUsers(users))


// Task 4
function getUsersWithEducation (array: User[]):User[] {
    const result = array.filter((item) => item.hasEducation === true)

    return result
}

console.log(getUsersWithEducation(users))


// Task 5
function getUsersWithAnimals (array: User[]):User[] {
    const result = array.filter((item) => item.animals !== undefined)

    return result
}

console.log(getUsersWithAnimals(users))


// Task 6
function getNameCars (array: User[]):string {
    const newArray = array.filter((item) => item.cars !== undefined)
    const result = newArray.map((item) => item.cars).join(',')

    return result
}

console.log(getNameCars(users))