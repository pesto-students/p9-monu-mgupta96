-- Find the item that has minimum weight.
select * from items where `weight(gms)` = (select min(`weight(gms)`) from items);
			
-- Find the different warehouses in “Pune”.
select * from warehouses where location = "Pune";

-- Find the details of items ordered by a customer “Mr. Patil”.
select * from 
items join orders on items.item_no = orders.item_no
 join customers on customers.cno = orders.cno
where cname = "Mr. Patil";


-- Find a Warehouse which has maximum stores.

select * from warehouses
where wid = (
select from_warehouse_no from stores group by from_warehouse_no
order by count(from_warehouse_no) desc
limit 1
);

-- Find an item which is ordered for a minimum number of times.
select items.`item_no`, `description`, `weight(gms)`, `cost(rs)`, `no_of_times_ordered` from items join (
select item_no, count(item_no) as no_of_times_ordered from orders group by item_no
order by count(item_no)
limit 1
) as D
on items.item_no = D.item_no;

-- Find the detailed orders given by each customer.
select * from 
customers left join orders
on customers.cno = orders.cno
left join items
on orders.item_no = items.item_no;

