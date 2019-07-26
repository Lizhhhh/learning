#include <iostream>
int main()
{
  int sum = 0, value = 0;
  // 读取数据直到遇到尾文件,计算所有读入的值的和
  std::cout << "Please enter numbers use * end" << std::endl;
  while (std::cin >> value)
    sum += value;
  std::cout << "Sum is: " << sum << std::endl;
  return 0;
}