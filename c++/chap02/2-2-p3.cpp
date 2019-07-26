#include <iostream>
int main()
{
  int i = 0;
  int *const p1 = &i;
  const int ci = 42;
  const int *p2 = &ci;
  return 0;
}