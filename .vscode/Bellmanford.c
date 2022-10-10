#include <stdio.h>
#define INF 9999
int graph[10][10];
int d[10];
int p[10];
int n;
struct edge{
	int u;
	int v;
	int cost;	
}arr[50];
int count()
{
	int i,j,c=0;
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			if(graph[i][j]!=0)
			c++;
		}
	}
	printf("Edges: %d\n",c);
	return c;
}
void read()
{
	FILE *fp;
	fp=fopen("bell.txt","r");
	if(fp==NULL)
	{
		printf("Error\n");	
	}
	int i,j;
	fscanf(fp,"%d",&n);
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			fscanf(fp,"%d",&graph[i][j]);
		}
	}
	fclose(fp);
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			printf("%d",graph[i][j]);
		}
		printf("\n");
	}
}
/*void show()
{
	int i,j;
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			printf("%d",graph[i][j]);
		}
		printf("\n");
	}
}
*/
void print(int d[])
{
	int i;
	printf("vertex distance from the source:\n");
	for(i=0;i<n;i++)
	{
		printf("%d \t\t %d\n",i,d[i]);
	}
}
void bellmanford(struct edge arr[],int s, int c )
{
	int i;
	for(i=0;i<n;i++)
	{
		d[i]=INF;
		p[i]=-1;
	}
	d[s]=0;
	int j,k;
	for(j=0;j<n;j++)
	{
		for(k=0;k<c;k++)
		{
			int a=arr[k].u;
			int b=arr[k].v;
			int weight=arr[k].cost;
			if(d[a]!=INF && d[a]+weight<d[b])
			{
				d[b]=d[a]+weight;
				p[b]=a;
			}
		}
	}
	
	int p;
	for(p=0;p<c;p++)
	{
		int a=arr[p].u;
		int b=arr[p].v;
		int weight=arr[p].cost;
		if(d[a]!=INF && d[a]+weight<d[b])
		{
			printf("graph contain negative cycle\n");
		}
	}
	print(d);
}
int main()
{
	read();
	//show();
	int s;
	printf("Enter the starting vertex: ");
	scanf("%d",&s);
	int i,j;
	int c=0;
	int p=0;
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{
			if(graph[i][j]!=0)
			{
				arr[p].u=i;
				arr[p].v=j;
				arr[p].cost=graph[i][j];
				p++;
			}
		}
}
	c=count();
	printf("\n");
	bellmanford(arr,s,c);
	return 0;
}
