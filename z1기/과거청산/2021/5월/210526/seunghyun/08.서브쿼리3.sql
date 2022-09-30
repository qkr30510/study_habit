SELECT name
FROM tStaff
WHERE salary > ANY (
        SELECT salary
        FROM tStaff
        WHERE depart = '영업부'
    );
SELECT name
FROM tStaff
WHERE salary > ALL (
        SELECT salary
        FROM tStaff
        WHERE depart = '영업부'
    );
SELECT name
FROM tStaff
WHERE salary > (
        SELECT MIN(salary)
        FROM tStaff
        WHERE depart = '영업부'
    );
SELECT name
FROM tStaff
WHERE salary > (
        SELECT MAX(salary)
        FROM tStaff
        WHERE depart = '영업부'
    );
SELECT item,
    price
FROM tItem
WHERE item = ANY (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
    );
SELECT member,
    item,
    (
        SELECT price
        FROM tItem
        WHERE tItem.item = tOrder.item
    ) price
FROM tOrder;
SELECT O.member,
    O.item,
    (
        SELECT price
        FROM tItem I
        WHERE I.item = O.item
    ) price
FROM tOrder O;
SELECT O.member,
    O.item,
    I.price
FROM tOrder O
    JOIN tItem I ON I.item = O.item;
EXISTS (
    SELECT *
    FROM tCity
    WHERE area > 1000
)
SELECT name
FROM tCity
WHERE EXISTS (
        SELECT *
        FROM tCity
        WHERE area > 1000
    );
SELECT name
FROM tCity C
WHERE EXISTS (
        SELECT *
        FROM tCity
        WHERE C.area > 1000
    );
SELECT *
FROM tMember M
WHERE EXISTS (
        SELECT *
        FROM tOrder O
        WHERE O.member = M.member
    );
SELECT *
FROM tMember M
WHERE NOT EXISTS (
        SELECT *
        FROM tOrder O
        WHERE O.member = M.member
    );
SELECT *
FROM tMember
WHERE member IN (
        SELECT DISTINCT member
        FROM tOrder
    );
....EXISTS (
    SELECT item
    FROM tOrder O
    WHERE O.member = M.member
);
....EXISTS (
    SELECT member
    FROM tOrder O
    WHERE O.member = M.member
);
....EXISTS (
    SELECT '얼씨구'
    FROM tOrder O
    WHERE O.member = M.member
);