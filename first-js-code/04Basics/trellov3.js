let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetingsDone: 0,

    addMeeting: function(num){
            this.meetings = this.meetings + num
            console.log(`Total number of meetings are : ${this.meetings}`)
            
    },
    addMeetingDone: function(num){
        this.meetingsDone = this.meetings - num
        console.log(`Meetings left today is : ${this.meetingsDone}`)
    },
    reset: function(){
        this.meetings = 0
        this.meetingsDone = 0
        console.log(`meetings resetted meetings to ${this.meetings} and meetings done to ${this.meetingsDone}`)
    },
    summary: function(){
        return `Total number of meeting today is ${this.meetings}`
        
    }
    
}



myTodos.addMeeting(10)

myTodos.addMeetingDone(5)


myTodos.summary()



myTodos.reset()

