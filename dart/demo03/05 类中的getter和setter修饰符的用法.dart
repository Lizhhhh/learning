class Rect {
  num height;
  num width;

  Rect(this.height, this.width);
  area() {
    return this.height * this.width;
  }
}

void main() {
  Rect r = new Rect(10, 4);
  print("面积:${r.area()}");
}
