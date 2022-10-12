//  С ниже приведенным объектом решить следующие задачи:
//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
      students: 200,
      teachers: 6
    },
    biology: {
      students: 120,
      teachers: 6
    },
    chemistry: {
      students: 100,
      teachers: 3
    },
    geography: {
      students: 60,
      teachers: 2
    }
}


// Task 1
function getStringFromObject (object = {}) {
    if (typeof object === 'object') {
        let str = ''

        for (let key in object) {
            str += key
        }

        return str
    } else {
        return 'Некорректные данные'
    }
}

console.log(getStringFromObject(subjects))


// Task 2
function getSumPeople (object = {}) {
    if (typeof object === 'object') {
        let sumStudents = 0,
            sumTeacher = 0
        
        for (let key in object) {
            let newObject = object[key]
            sumStudents += newObject.students
            sumTeacher += newObject.teachers
        }

        let sumResult = sumStudents + sumTeacher

        return `Студентов ${sumStudents}, Учителей ${sumTeacher}, Всего ${sumResult}`
    } else {
        return 'Некорректные данные'
    }
}

console.log(getSumPeople(subjects))


// Task 3
function getAverageStudents (object = {}) {
    if (typeof object === 'object') {
        let sumStudents = 0,
            valueSubjects = 0
        
        for (let key in object) {
            valueSubjects++
            let newObject = object[key]
            sumStudents += newObject.students
        }

        let averageResult = sumStudents / valueSubjects

        return `Среднее значение студентов ${averageResult}`
    } else {
        return 'Некорректные данные'
    }
}

console.log(getAverageStudents(subjects))


// Task 4
function transformObjectToArr (object = {}) {
    if (typeof object === 'object') {
        let newArr = []

        for (let key in object) {
            let newObject = object[key]
            newObject.subjects = key
            newArr.push(newObject)
        }

        return newArr
    } else {
        return 'Некорректные данные'
    }
}

console.log(transformObjectToArr(subjects))


// Task 5
function sortArr (object = {}) {
    let mutableArray = transformObjectToArr(object)

    if (Array.isArray(mutableArray) == true ) {
        mutableArray.sort((a, b) => parseFloat(b.teachers) - parseFloat(a.teachers))

        return mutableArray
    } else {
        return 'Некорректные данные'
    }

}

console.log(sortArr(subjects))