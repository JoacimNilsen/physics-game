export const platform = level => {
    const points =  Array(40).fill(true)
    return points.map((point, index) => [index+1, 10])
}