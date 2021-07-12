// Your code here
function createEmployeeRecord(array){
    let record 
    return record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []

    }
}

function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(employeeRecord, date){
    const newTimeInEvent = {
        type: "TimeIn",
        date: parseInt(date.slice(-4)),
        hour: date.slice(0, 10)
    }
    employeeRecord.timeInEvents.push(newTimeInEvent)
    return employeeRecord
}