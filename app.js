const Traingle = (size, style) => {
    size = size < 2 ? 2 : size
    let MaxRowSize = (size * 2)-1
    let end = Math.floor(MaxRowSize/2)
    let i = 0
    let arr=  []
    let start = end
    while (i < size) {
        let j = 0
        let tmp = []
        while (j < end) {
            tmp[j] = " "
            if(i === (size-1) && j%2 ===0){
                tmp[j] = style
            }
            j++
        }
        tmp.push(style)
        if(start < end){
            tmp[start] = style
        }
        start--
        end++
        i++

        j = 0
        let tmp1 = ""
        while (j < tmp.length) {
            tmp1+=tmp[j]
            j++
        }
        console.log(tmp1)
    }
}

Traingle(5, "0")

//   *
//  * *
// * * *



