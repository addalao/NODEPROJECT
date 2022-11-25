## 终端操作
    启动mysql   mysql.server start 
    停止mysql   mysql.server stop

    登陆数据库  mysql -u root -p
    退出数据库  exit

    show databases; //查看所有数据库
    use tset; //选中 tset 数据库

    show tables; //查看所有表  --需要先选中数据库


    create database tset; //创建一个名为tset的数据库

    创建一个名为 pet 的数据表
    create table pet( 
        name CHAR(1),
        age CHAR(1),
        sex CHAR(1)
    );

    describe pet; 查看 pet表的数据类型

    select * from pet //查看 pet 数据表

    // 向 pet 数据表里添加数据
    insert into pet 
    value('L','2','M')

