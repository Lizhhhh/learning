function position(cp, radius, arc) {
    let x = cp[0] + Math.cos(arc) * (radius + 10);
    let y = cp[1] + Math.sin(arc) * (radius + 10);
    return {
        x: x,
        y: y
    }
}