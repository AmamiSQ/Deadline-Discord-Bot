class Countdown 
{
    constructor() {
        this.deadlines = [{name: "Version 1.0 live in store", date: "9-11-2023"}, {name: "Version 2.0 live in store", date: "9-21-2023"}, {name: "Twitch presentation", date: "10-05-2023"}, {name: "Final version live in store", date: "10-09-2023"}]
    }

    counter() {
        let now = new Date();
        let returnArr = [];
        
        for (let i = 0; i < this.deadlines.length; i++) {
            let deadline = new Date(this.deadlines[i].date);

            if (now < deadline) {

                let timeLeft = deadline - now;
                timeLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                
                //calculate weekdays
                let weekdays = 0;
                let temp = new Date(now);
                while (temp < deadline) {
                    if (temp.getDay() != 0 && temp.getDay() != 6) {
                        weekdays++;
                    }
                    temp.setDate(temp.getDate() + 1);
                }

                returnArr.push({name: this.deadlines[i].name, date: timeLeft + " days (" + weekdays + " weekdays) left"});
            }
        }
        return returnArr;
    }
}

module.exports = { Countdown };