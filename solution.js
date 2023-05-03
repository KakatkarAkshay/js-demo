export function solution(D) {
    var dates = Object.keys(D)
    var values = Object.values(D)
    var val = [0, 0, 0, 0, 0, 0, 0]
    for(let i = 0; i < dates.length; i++) {
        var dt = new Date(dates[i])
        var day = dt.getDay()
        val[day] += values[i]
    }
    val.push(val.shift());
    var weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    var D1 = {}
    for (let i = 0; i < 7; i++) {
      if(val[i] == 0) {
        val[i] = Math.round((val[i-1] + val[i+1])/2)
      }
      D1[weekdays[i]] = val[i]
    }
    return(D1)
}