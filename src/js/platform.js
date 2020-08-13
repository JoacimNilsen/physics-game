export const platform = (
    height=0,
    start=0,
    points=0,
    mass,
    level=0
    ) => {
    const vectors = Array(points)
              .fill(true)
              .map((point, index) => [index+start, height-index])
    return {vectors, mass}
}