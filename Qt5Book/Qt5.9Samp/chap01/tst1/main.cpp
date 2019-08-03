#include "mainwindow.h"
#include <QApplication>
#include <map>
#include <iostream>
using namespace std;
int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    map<string, size_t> word_count;
    string word;
    while(cin>>word)
        ++word_count[word];
    for(const auto &w : word_count)
        cout<< w.first << " occurs " << w.second
            << ((w.second > 1) ? " times" :  " time") << endl;
    return a.exec();
}
