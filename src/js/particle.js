export const particle = (
    position=[0, 0],
    velocity=[0, 0],
    accel=[0, 0],
    mass=0
) => {
    return { position, velocity, accel, mass }
}