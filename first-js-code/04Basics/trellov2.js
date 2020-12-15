let myTodos = {
    day: "Monday",
    meetings: 0,
    meetdone: 0
}

let addMeeting = function(todo, meet = 0){
    
    todo.meetings = todo.meetings + meet
    console.log(`Total number of meetings today is : ${todo.meetings}`)

}

let addMeetingDone = function(todo, meet = 0){
    
    todo.meetdone = todo.meetdone + meet
    console.log(`Meetings done today is : ${todo.meetdone}`)
}

let getSummary = function(todo){
    todo.meetings = todo.meetings - todo.meetdone
    console.log(`Meetings left for tomorrow is : ${todo.meetings}`)
}

let resetMeetings = function(todo){
    todo.meetings = `Reset all the today's meeting to ${todo.meetings = 0}`
    console.log(todo.meetings)
    todo.meetdone = `Reset all meeting done on today to ${todo.meetdone = 0}`
    console.log(todo.meetdone)
}

addMeeting(myTodos , 10)

addMeetingDone(myTodos , 6)

getSummary(myTodos)

console.log(myTodos)

resetMeetings(myTodos)



