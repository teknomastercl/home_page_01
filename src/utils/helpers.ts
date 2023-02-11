export function numberWithSpaces(value, pattern) {
    var i = 0,
        phone = value.toString();
    return pattern.replace(/#/g, _ => phone[i++]);
}

export function randomIntFromInterval(min, max) { // min and max included 
    const send = Math.floor(Math.random() * (max - min + 1) + min)
    console.log('send', send)
    return send
}