### Created warehouse database to perform all queries
```
create database warehouse;
```

### Created few other tables inside that database and added few dummy records in it. After insertion the tables looks something like this.

```
Cities table
```

id| cit| state
--|----|-------
1|	Mumbai|	Maharashtra
2|	Nagpur|	Maharashtra
3|	Pune|	Maharashtra
4|	Thiruvananthapuram|	Kerala
5|	Kochi|	Kerala

```
Warehouse table
```
wid|wname|location
-|--------|------
1|	Retail|	Pune
2|	Depot|	Mumbai
3|	Retail|	Kochi
4|	Retail|	Thiruvananthapuram
		
```
stores table
```
sid|	store_name|	location_city|	from_warehouse_no
--|---------------|--------------|----
1|	Geletos|	Mumbai|	2
2|	GingerBread|	Mumbai|	2
3|	Munchkins|	Pune|	1
4|	BananaChips|	Kochi|	3
5|	MogguMoggu|	Thiruvananthapuram|	4
6|	Sagaris|	Pune|	1
7|	BeenThere|	Pune|	1
```
customers table
```
cno| cname| addr| cu_city	
----|---|-----|--------
1|	Miss. Gupta|Rmall Distant area	Mumbai
2|	Mr. Patil|	Maximum society ed.	Pune
3|	Mrs. Saikrishnan|	Delicate myjor society	Thiruvananthapuram
4|	Mr. khote|	The address	Nagpur
			

```
orders table
```
o_number|order_date|item_no|cno
--|-----|----------|-------|
1|	2023-03-01|	1|	1
2|	2023-03-01|	10|	1
3|	2023-03-01|	8|	1
4|	2023-04-11|	4|	2
5|	2023-04-11|	6|	2
6|	2023-04-13|	3|	2
7|	2023-04-13|	2|	2
8|	2023-03-29|	2|	3
9|	2023-03-29|	3|	3
10|	2023-04-30|	10|	3
11|	2023-04-13|	4|	4
12|	2023-04-13|	7|	4
			
```
items table
```
item_no| description| weight(gms)| cost(rs)
-------|------------|-------------|-------
1|	ChokiChoki- The chocolate	|20.00	|5.00
2|	Cushy - Cushions for your home	|500.00	|200.00
3|	Bed - Bed for your home	|9000.00	|12000.00
4|	Pen - Make you grow	|40.00	|12.00
5|	Lottie - chocopie	|500.00	|250.00
6|	Earbuds - To stay connected	|15.00	|2500.00
7|	Papers - To fly	|3.00	|2.00
8|	Table - Wooden furniture	|5000.00	|8000.00
9|	Sneakers - From sneaker heads	|8000.00	|20000.00
10|	FlipFlop - Slippers from foppers	|300.00	|1000.00
			