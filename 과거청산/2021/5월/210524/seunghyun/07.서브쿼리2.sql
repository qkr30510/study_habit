SELECT category
FROM tItem
WHERE item = '청바지';
SELECT delivery
FROM tCategory
WHERE category = '패션';
SELECT delivery
FROM tCategory
WHERE category = (
        SELECT category
        FROM tItem
        WHERE item = '청바지'
    );
SELECT item
FROM tItem
WHERE price = 70000;
SELECT member
FROM tOrder
WHERE item = (
        SELECT item
        FROM tItem
        WHERE price = 70000
    );
SELECT age
FROM tMember
WHERE member = (
        SELECT member
        FROM tOrder
        WHERE item = (
                SELECT item
                FROM tItem
                WHERE price = 70000
            )
    );
SELECT price
FROM tItem
WHERE item = (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
    );
SELECT price
FROM tItem
WHERE item = (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
        ORDER BY item OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY
    );
SELECT item,
    price
FROM tItem
WHERE item IN (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
    );
SELECT item,
    price
FROM tItem
WHERE item IN ('대추', '사과');
SELECT price
FROM tItem
WHERE item = (
        SELECT item
        FROM tOrder
        WHERE member = '이도령'
    );
SELECT depart,
    gender
FROM tStaff
WHERE name = '윤봉길';
SELECT *
FROM tStaff
WHERE depart = '영업부'
    AND gender = '남';
SELECT *
FROM tStaff
WHERE depart = (
        SELECT depart
        FROM tStaff
        WHERE name = '안중근'
    )
    AND gender = (
        SELECT gender
        FROM tStaff
        WHERE name = '안중근'
    );
SELECT *
FROM tStaff
WHERE (depart, gender) = (
        SELECT depart,
            gender
        FROM tStaff
        WHERE name = '안중근'
    );
SELECT *
FROM tStaff
WHERE (depart, salary) IN (
        SELECT depart,
            MAX(salary)
        FROM tStaff
        GROUP BY depart
    );
SELECT *
FROM tStaff S
WHERE salary = (
        SELECT MAX(salary)
        FROM tStaff
        WHERE depart = S.depart
    );
SELECT T.*
FROM tStaff T
    INNER JOIN (
        SELECT depart,
            MAX(salary) ms
        FROM tStaff
        GROUP BY depart
    ) M ON T.depart = M.depart
    AND T.salary = M.ms;
UPDATE tCity
SET (area, popu) = (
        SELECT area,
            popu
        FROM tCity
        WHERE name = '부산'
    )
WHERE name = '서울';