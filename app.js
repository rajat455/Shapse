const Traingle = (size, style) => {
    let i = 0
    let left = size - 1
    let start = left
    while (i < size) {
        let tmp = []
        let j = 0
        while (j <= left) {
            tmp[j] = " "
            if (j === left) {
                tmp[j] = style
            }
            if (start >= 0) {
                tmp[start] = style
            }
            if (i === (size - 1) && j % 2 === 0) {
                tmp[j] = style
            }
            j++
        }
        start--
        left++
        i++

        j = 0
        let rows = ""
        while (j < tmp.length) {
            rows += tmp[j]
            j++
        }
        console.log(rows)
    }

}


Traingle(5, "o")

//   *
//  * *
// * * *

