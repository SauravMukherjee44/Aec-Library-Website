#include<iostream>

using namespace std;



int main()
{
    int a = 10, b = 20;

    cout<<"Before Swapping:"<<endl<<"Value of a is:"<<a<<"\n Value of b is:"<<b<<endl;

    a = a + b;
    b = a - b;
    a = a - b;

    cout<<"\nAfter Swapping:"<<endl<<"Value of a is:"<<a<<"\n Value of b is:"<<b<<endl;



}
