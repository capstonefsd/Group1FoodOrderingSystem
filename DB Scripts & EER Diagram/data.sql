create database `full-stack-resteasy`;

use `full-stack-resteasy`;

create table `Menu`(`dishid` int(10) NOT NULL  AUTO_INCREMENT, `dishname` varchar(50) Default null, 
                         `dishprice` double Default null, `hotel` varchar(50) Default null,  `image_url` varchar(50) Default null,
                         `qty` int(10) Default null, primary key (`dishid`));	
                         
INSERT INTO `menu` VALUES (1,'Roti',10,'Udipi','roti.jpg',1),(2,'Masala Dosa',25,'Udipi','masaladosa.jpg',1),
						  (3,'Idli',30,'Udipi','idli.jpg',1),(4,'Gulab Jamun',60,'Udipi','gulabjamun.jfif',1),
                          (5,'Fried Rice',160,'AdiGas','friedrice.jpg',1),(6,'Kadai Panner',125,'AdiGas','panner.jpg',1),
                          (7,'Butter Nan',40,'RotiGhar','butternan.jpg',1),(8,'Paratha',30,'RotiGhar','paratha.jpg',1),
                          (9,'Roti',25,'RotiGhar','roti.jpg',1),(10,'Noodles',40,'RotiGhar','noodles.jpg',1),
                          (11,'Chole Chawal',70,'PunjabiRasoi','cholechawal.png',1),(12,'Rajma Chawal',90,'PunjabiRasoi','rajmachawal.jpg',1),
                          (13,'Dal',30,'PunjabiRasoi','dal.jpg',1),(14,'Rasmalai',60,'PunjabiRasoi','rasmalai.png',1),
                          (15,'Butter Nan',40,'PunjabiRasoi','butternan.jpg',1),(16,'Ice Cream',25,'RotiGhar','icecream.jpg',1),
                          (17,'Ice Cream',60,'AdiGas','icecream.jpg',1),(18,'Butter Nan',80,'AdiGas','butternan.jpg',1);

                         
create table `Address`(`addressid` int(10) auto_increment NOT NULL, `city` varchar(20) Default null, 
                         `country` varchar(20) Default null, `state` varchar(20) Default null, 
                         `street` varchar(20) Default null, `zipcode` varchar(6) Default null,
                         primary key (`addressid`));

create table `Customer`(`customerid` int(10) auto_increment NOT NULL, `firstname` varchar(50) Default null, 
                         `lastname` varchar(50) Default null, `username` varchar(50) Default null,  `password` varchar(50) Default null, 
                         primary key (`customerid`));
                         
create table `Orders`(`orderid` int(10) auto_increment NOT NULL, `totalquantity` int(10) Default null, 
                         `totalprice` int Default null, `addressid` int(10) Default null, `customerid` int(10) NOT NULL,
                         foreign key(addressid) references Address(addressid), foreign key(customerid) references Customer(customerid), 
                         primary key (`orderid`));

create table `Cart`(`dishid` int(10) NOT NULL  AUTO_INCREMENT, `dishname` varchar(50) Default null, 
                         `dishprice` double Default null, `hotel` varchar(50) Default null,  `image_url` varchar(50) Default null, 
                         `qty` int(10) Default null,primary key (dishid));
select * from menu;				
select * from customer;
select * from cart;
select * from address;
select * from orders;