#include <iostream>
int main()
{
  int ival = 1024;
  int &refVal = ival;
  int &refVal3 = refVal;
  std::cout << &refVal3 << " " << refVal3 << std::endl;
  // int &refVal2;

  return 0;
}