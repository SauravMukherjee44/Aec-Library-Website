#include<iostream>
int main()
  {
    int *a;
    int n,d,i;
    printf("array size");
    scanf("%d",&n);
    a = (int *)calloc(n, sizeof(int));
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    int l = sizeof(a)/sizeof(a[0]);
    printf("enter rotations");
    scanf("%d",&d);
    int p = 1;
    while (p <= d) {
      int last = a[0];
      for (int i = 0; i < n - 1; i++) {
        a[i] = a[i + 1];
      }
      a[n - 1] = last;
      p++;
    }

    printf("Array after Rotation :");
    for (int i = 0; i < n; i++) {
      printf("%d",a[i]);
    }
    return 0;
  }
