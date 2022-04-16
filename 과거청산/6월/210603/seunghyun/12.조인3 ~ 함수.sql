SELECT *
FROM tMember,
    tOrder;
SELECT *
FROM tMember M,
    tOrder O
WHERE M.member = O.member;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    M.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    M.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    LEFT OUTER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    O.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    RIGHT OUTER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    M.member,
    O.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    FULL OUTER JOIN tOrder O ON M.member = O.member;
SELECT item,
    price
FROM tItem
WHERE item = (
        SELECT item
        FROM tOrder
        WHERE member = '춘향'
    );
SELECT *
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item;
SELECT *
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
WHERE O.member = '춘향';
SELECT *
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
    AND O.member = '춘향';
SELECT O.item,
    I.price
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
WHERE O.member = '춘향';
SELECT O.item,
    I.price,
    O.num
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
WHERE O.member = '향단';
SELECT item,
    price,
    num
FROM tItem
WHERE item IN (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
    );
SELECT item,
    price,
    (
        SELECT num
        FROM tOrder O
        WHERE O.item = I.item
    )
FROM tItem I
WHERE item IN (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
    );
SELECT *
FROM tMember;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item
    INNER JOIN tCategory C ON I.category = C.category;
SELECT M.member,
    O.item,
    O.num,
    O.orderDate,
    I.price,
    C.delivery
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item
    INNER JOIN tCategory C ON I.category = C.category;
SELECT M.member,
    O.item,
    O.num,
    O.orderDate,
    I.price,
    C.delivery
FROM (
        SELECT *
        FROM tMember
        WHERE age > 19
    ) M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item
    LEFT OUTER JOIN tCategory C ON I.category = C.category
    AND C.category != '성인'
WHERE I.price * O.num > 100000
ORDER BY M.member;
SELECT M.member,
    O.item,
    O.num,
    I.price
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.MEMBER
    INNER JOIN tItem I ON I.item = O.item;
SELECT member,
    num * price AS total,
    item
FROM (
        SELECT M.member,
            O.item,
            O.num,
            I.price
        FROM tMember M
            INNER JOIN tOrder O ON M.member = O.MEMBER
            INNER JOIN tItem I ON I.item = O.item
    ) A;
SELECT *
FROM (
        SELECT M.member,
            M.addr,
            O.item,
            O.num,
            O.orderDate,
            I.price,
            C.delivery
        FROM (
                SELECT *
                FROM tMember
                WHERE age > 19
            ) M
            INNER JOIN tOrder O ON M.member = O.member
            INNER JOIN tItem I ON I.item = O.item
            LEFT OUTER JOIN tCategory C ON I.category = C.category
            AND C.category != '성인'
        WHERE I.price * O.num > 100000
    ) A
    LEFT OUTER JOIN tCity T ON TRIM(T.name) = SUBSTR(A.addr, 0, 2);
MSSQL:
LEFT OUTER JOIN tCity T ON T.name = SUBSTRING(A.addr, 0, 4);
마리아:
LEFT OUTER JOIN tCity T ON T.name = SUBSTRING(addr, 1, 2);
CREATE TABLE tDirectory (
    id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    parent INT NOT NULL
);
INSERT INTO tDirectory (id, Name, parent)
VALUES (1, 'Root', 0);
INSERT INTO tDirectory (id, Name, parent)
VALUES (2, 'Data', 1);
INSERT INTO tDirectory (id, Name, parent)
VALUES (3, 'Program', 1);
INSERT INTO tDirectory (id, name, parent)
VALUES (4, 'Sound', 2);
INSERT INTO tDirectory (id, name, parent)
VALUES (5, 'Picture', 2);
INSERT INTO tDirectory (id, name, parent)
VALUES (6, 'Game', 3);
INSERT INTO tDirectory (id, name, parent)
VALUES (7, 'StartCraft', 6);
SELECT A.name 부모,
    B.name 자식
FROM tDirectory A
    INNER JOIN tDirectory B ON A.id = B.parent;
SELECT A.name 부모,
    A.id,
    B.name,
    B.parent 자식
FROM tDirectory A
    CROSS JOIN tDirectory B;
SELECT *
FROM tCar,
    tMaker
WHERE tCar.maker = tMaker.maker;
SELECT *
FROM tCar
    INNER JOIN tMaker ON tCar.maker = tMaker.maker;
SELECT *
FROM tCar
    LEFT OUTER JOIN tMaker ON tCar.maker = tMaker.maker;
SELECT *
FROM tCar,
    tMaker
WHERE tCar.maker = tMaker.maker(+);
SELECT *
FROM tCar,
    tMaker
WHERE tCar.maker(+) = tMaker.maker;
SELECT *
FROM tCar,
    tMaker
WHERE tCar.maker * = tMaker.maker;
-------------------------------------------------
-- 11장
SELECT AVG(score)
FROM tStaff
WHERE depart = '영업부';
SELECT ROUND(AVG(score), 2)
FROM tStaff
WHERE depart = '영업부';
SELECT name,
    REPLACE(depart, '부', '팀')
FROM tStaff;
SELECT name,
    grade,
    salary
FROM tStaff
WHERE depart = '인사과';
SELECT TRIM(name) || ' ' || grade,
    salary
FROM tStaff
WHERE depart = '인사과';
MSSQL:
SELECT TRIM(name) + ' ' + grade,
    salary
FROM tStaff
WHERE depart = '인사과';
마리아:
SELECT CONCAT(name, ' ', grade),
    salary
FROM tStaff
WHERE depart = '인사과';
SELECT ROUND(1234.5678, 0)
FROM dual;
-- 1235
SELECT ROUND(1234.5678, 1)
FROM dual;
-- 1234.6
SELECT ROUND(1234.5678, 2)
FROM dual;
-- 1234.57
SELECT name,
    area,
    ROUND(area, -2)
FROM tCity;