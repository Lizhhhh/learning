function position({
    center: [x, y],
    radius: r,
    arc: a
}) {
    let ra = 1.2;
    let rx = x + Math.cos(a) * (r * ra);
    let ry = y + Math.sin(a) * (r * ra);
    return [rx, ry]
}