#include <iostream>
int main()
{
  int errNumb = 0;
  int *const curErr = &errNumb;
  const double pi = 3.14159;
  const double *const pip = &pi;
  return 0;
}