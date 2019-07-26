#include <iostream>
int main()
{
  int ival = 1024;
  int *pi = &ival;
  std::cout << &pi << ":" << pi << std::endl;
  return 0;
}