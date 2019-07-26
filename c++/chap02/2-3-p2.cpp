#include <iostream>
#include <cstdlib>
int main()
{
  int *p = 0;
  std::cout << '1' << std::endl;
  std::cout << *p << " - " << p << std::endl;
  std::cout << '2' << std::endl;
  return 0;
}