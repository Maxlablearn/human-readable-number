module.exports = function toReadable (number) {
    let dict20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dictTy = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number > 99) {
        if (number % 100 == 0) {
            return ('' + dict20[Math.floor(number / 100)] + ' hundred');
        }
        return ('' + dict20[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100));
    } else {
        if (number > 19) {
            if (number % 10 == 0) {
                return ('' + dictTy[Math.floor(number / 10)]);
            };
            return ('' + dictTy[Math.floor(number / 10)]+ ' ' + toReadable(number % 10));
        } else {
            return ('' + dict20[number])
        }
    }
}