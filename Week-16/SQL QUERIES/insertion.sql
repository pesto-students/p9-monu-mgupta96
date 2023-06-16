use warehouse;
select * from cities;
select * from warehouses;
select * from stores;
select * from customers;
select * from orders;
select * from items;



insert into cities values (1, "Mumbai", "Maharashtra");
insert into cities values (2, "Nagpur", "Maharashtra");
insert into cities values (3, "Pune", "Maharashtra");
insert into cities values (4, "Thiruvananthapuram", "Kerala");
insert into cities values (5, "Kochi", "Kerala");



insert into warehouses values (1, "Retail", "Pune");
insert into warehouses values (2, "Depot", "Mumbai");
insert into warehouses values (3, "Retail", "Kochi");
insert into warehouses values (4, "Retail", "Thiruvananthapuram");


insert into customers values (1, "Miss. Gupta", "Rmall, Distant area", "Mumbai");
insert into customers values (2, "Mr. Patil", "Maximum society ed.", "Pune");
insert into customers values (3, "Mrs. Saikrishnan", "Delicate myjor society", "Thiruvananthapuram");
insert into customers values (4, "Mr. khote", "The address", "Nagpur");


insert into stores values (1, "Geletos", "Mumbai",2);
insert into stores values (2, "GingerBread", "Mumbai",2);
insert into stores values (3, "Munchkins", "Pune",1);
insert into stores values (4, "BananaChips", "Kochi",3);
insert into stores values (5, "MogguMoggu", "Thiruvananthapuram",4);
insert into stores values (6, "Sagaris", "Pune",1);
insert into stores values (7, "BeenThere", "Pune",1);


alter table items
rename column weight to `weight(gms)`,
rename column cost to `cost(rs)`;

insert into items values (1, "ChokiChoki- The chocolate", 20, 5);
insert into items values (2, "Cushy - Cushions for your home", 500, 200);
insert into items values (3, "Bed - Bed for your home", 9000, 12000);
insert into items values (4, "Pen - Make you grow", 40, 12);
insert into items values (5, "Lottie - chocopie", 500, 250);
insert into items values (6, "Earbuds - To stay connected", 15, 2500);
insert into items values (7, "Papers - To fly", 3, 2);
insert into items values (8, "Table - Wooden furniture", 5000, 8000);
insert into items values (9, "Sneakers - From sneaker heads", 8000, 20000);
insert into items values (10, "FlipFlop - Slippers from foppers", 300, 1000);


insert into orders values (1, "2023-03-01", 1, 1);
insert into orders values (2, "2023-03-01", 10, 1);
insert into orders values (3, "2023-03-01", 8, 1);
insert into orders values (4, "2023-04-11", 4, 2);
insert into orders values (5, "2023-04-11", 6, 2);
insert into orders values (6, "2023-04-13", 3, 2);
insert into orders values (7, "2023-04-13", 2, 2);
insert into orders values (8, "2023-03-29", 2, 3);
insert into orders values (9, "2023-03-29", 3, 3);
insert into orders values (10, "2023-04-30", 10, 3);
insert into orders values (11, "2023-04-13", 4, 4);
insert into orders values (12, "2023-04-13", 7, 4);
