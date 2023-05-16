-- check existing databases
show databases;
create database warehouse;
use warehouse;
create table cities(
id int primary key,
city char(20),
state char(20)
);
create table warehouses(
wid int primary key,
wname char(30),
location varchar(20)
);	
create table stores(
sid int primary key,
store_name char(20),
location_city char(20),
from_warehouse_no int,
foreign key (from_warehouse_no) references warehouses(wid)
);

create table customers(
cno int primary key,
cname char(50),
addr varchar(50),
cu_city char(20)
);

create table items(
item_no int primary key,
description text,
weight decimal(5,2),
cost decimal(5,2)
);


create table orders(
o_number int primary key, 
order_date date,
item_no int,
cno int,
foreign key (item_no) references items(item_no),
foreign key (cno) references customers(cno)
);















