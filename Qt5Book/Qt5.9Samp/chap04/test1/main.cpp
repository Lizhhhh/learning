#include "mainwindow.h"
#include <QApplication>
#include <iostream>
using namespace std;
int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    int i= 1 ;
//    cin >> i ;
    cout << i <<endl;

    return a.exec();
}
