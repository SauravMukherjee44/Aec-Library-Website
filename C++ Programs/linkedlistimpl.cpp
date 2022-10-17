#include <bits/stdc++.h>
using namespace std;
#define null NULL


struct Node{
    int data;
    Node *link;
};
Node *head = null;
 void insertBeg(int d){
     Node *ptr = new Node();
     ptr->data = d;
     ptr->link = head;
     head = ptr;
 }
 void insertend(int d){
     Node *ptr = new Node();
     ptr->data=d;
     ptr->link=null;
     if(head==null){
         head = ptr;
     }
     else{
     Node *temp = head;
     while(temp!=null){
         temp=temp->link;
     }
     temp->link = ptr;
     }
 }

 void deleteBeg(){
     
         if(head ==null){
             cout<<"Empty list";
         }
     else{
     Node *ptr = head;
     head = ptr->link;
     free(ptr);//del the node from memory
     }
 }

 void deleteend(){
        Node *ptr = head;
     Node *prev = null;
     if(head ==null){
             cout<<"Empty list";
         }
         else if(head->link==null){
             ptr=head;
             head = null;
             free(ptr);
         }
     else{
      
     while(ptr!=null){
         prev = ptr;
         ptr = ptr-> link;

     }
     prev->link = null;
     free(ptr);
     }
 }

 int middleelement(){
     Node *slow,*fast;
     slow = head;
     fast = head;
     if(head==null){
         cout<<"empty list";
     }
     else{
     while(fast->link!=null || fast==null){
         fast = fast->link->link;
         slow = slow->link;
     }
     return slow->data;
     }
 }
 void reverselist(){
     Node *prev,*curr,*forw;
     prev=null;
     curr = head;
     while(curr!=null){
     forw = curr->link;
     curr->link = prev;
     prev=curr;
     curr = forw;
      
     }
     head = prev;
 }
 void delnode(Node *ptr){
     Node *temp;
     temp=ptr->link;
     ptr->data = temp->data;
     ptr->link = temp->link;
     free(temp);
 }
int main()
{
ios_base::sync_with_stdio(false);
cin.tie(NULL);
Node*ptr = new Node();
ptr -> data =2;
ptr->link = null;
head = ptr;
}

