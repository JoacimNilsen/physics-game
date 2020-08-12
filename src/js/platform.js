export const platform = (
    height=0,
    start=0,
    points=0,
    level=0
    ) => {
    return Array(points)
              .fill(true)
              .map((point, index) => [index+start, height])
}