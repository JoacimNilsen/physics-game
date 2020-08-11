export const platform = (
    height=0,
    level=0
    ) => {
    const points =  Array(40).fill(true)
    return points.map((point, index) => [index+1, height])
}