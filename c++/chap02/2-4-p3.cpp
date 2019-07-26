#include <iostream>
int main()
{
  const int ci = 0;
  const int *p2 = &ci;
  const int c2 = 3;
  *p2 = &p2;
  std::cout << p2 << " value " << *p2 << std::endl;
  return 0;
}