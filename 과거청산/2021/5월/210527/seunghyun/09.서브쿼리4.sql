SELECT *
FROM (
        SELECT *
        FROM tCity
    ) A;
SELECT *
FROM (
        SELECT name,
            popu,
            area
        FROM tCity
    ) A;
SELECT *
FROM (
        SELECT *
        FROM tCity
        WHERE metro = 'y'
    ) B;
SELECT member,
    addr
FROM (
        SELECT *
        FROM tMember
        WHERE age < 19
    ) A
WHERE A.money >= 100000;
SELECT member,
    addr
FROM tMember
WHERE age < 19
    AND money >= 100000;
SELECT *
FROM (
        SELECT *
        FROM tStaff
        WHERE grade = '과장'
            OR grade = '부장'
    ) A
WHERE A.score >= 70;
SELECT *
FROM tStaff
WHERE grade = '과장'
    OR grade = '부장'
    AND score >= 70;
SELECT member,
    addr
FROM (
        SELECT *
        FROM tMember
        WHERE age < 19
    ) A
WHERE A.money >= 100000;
SELECT *
FROM (
        SELECT *
        FROM tCity
        WHERE metro = 'y'
    ) A;
SELECT *
FROM (
        SELECT *
        FROM tCity
        WHERE metro = 'y'
    ) AS A;
SELECT name,
    popu * 10000 AS ingu
FROM tCity;
SELECT name,
    popu * 10000 AS ingu
FROM tCity
WHERE ingu > 1000000;
SELECT *
FROM (
        SELECT name,
            popu * 10000 AS ingu
        FROM tCity
    ) A
WHERE A.ingu > 1000000;
SELECT *
FROM (
        SELECT name,
            popu * 10000 AS ingu
        FROM tCity
    )
WHERE ingu > 1000000;
SELECT name,
    (popu * 10000 / area) AS dens
FROM tCity;
SELECT name,
    (popu * 10000 / area) AS dens,
CASE
        WHEN (popu * 10000 / area) > 1000 THEN '고밀도'
        WHEN (popu * 10000 / area) > 100 THEN '중밀도'
        ELSE '저밀도'
    END densgrade
FROM tCity;
SELECT name,
    (popu * 10000 / area) AS dens,
CASE
        WHEN dens > 1000 THEN '고밀도'
        WHEN dens > 100 THEN '중밀도'
        ELSE '저밀도'
    END densgrade
FROM tCity;
SELECT name,
    dens,
CASE
        WHEN dens > 1000 THEN '고밀도'
        WHEN dens > 100 THEN '중밀도'
        ELSE '저밀도'
    END densgrade
FROM (
        SELECT name,
            (popu * 10000 / area) AS dens
        FROM tCity
    ) CD;
SELECT name,
    dens,
CASE
        WHEN dens > 1000 THEN '고밀도'
        WHEN dens > 100 THEN '중밀도'
        ELSE '저밀도'
    END densgrade,
    CASE
        WHEN CASE
            WHEN dens > 1000 THEN '고밀도'
            WHEN dens > 100 THEN '중밀도'
            ELSE '저밀도'
        END = '고밀도' THEN '8차로'
        WHEN CASE
            WHEN dens > 1000 THEN '고밀도'
            WHEN dens > 100 THEN '중밀도'
            ELSE '저밀도'
        END = '중밀도' THEN '4차로'
        ELSE '2차로'
    END roadplan
FROM (
        SELECT name,
            (popu * 10000 / area) AS dens
        FROM tCity
    ) CD;
SELECT name,
    dens,
    densgrade,
    CASE
        WHEN densgrade = '고밀도' THEN '8차로'
        WHEN densgrade = '중밀도' THEN '4차로'
        ELSE '2차로'
    END roadplan
FROM (
        SELECT name,
            dens,
CASE
                WHEN dens > 1000 THEN '고밀도'
                WHEN dens > 100 THEN '중밀도'
                ELSE '저밀도'
            END densgrade
        FROM (
                SELECT name,
                    (popu * 10000 / area) AS dens
                FROM tCity
            ) CD
    ) CR;
SELECT *
FROM tItem
WHERE category = '식품'
UNION
SELECT *
FROM tItem
WHERE category = '가전';
SELECT DISTINCT depart
FROM tStaff
WHERE salary > 400
UNION ALL
SELECT DISTINCT depart
FROM tStaff
WHERE score > 80;
SELECT *
FROM tItem
WHERE category = '식품'
    OR category = '가전';
SELECT *
FROM tMember
UNION
SELECT *
FROM tItem;
SELECT member
FROM tMember
UNION
SELECT name
FROM tStaff
UNION
SELECT name
FROM tEmployee;
SELECT *
FROM 부산대리점
UNION
SELECT *
FROM 서울대리점;
SELECT name
FROM tStaff
WHERE depart = '영업부'
INTERSECT
SELECT name
FROM tStaff
WHERE gender = '여';
SELECT name
FROM tStaff
INTERSECT
SELECT member
FROM tMember;
SELECT name
FROM tStaff
WHERE depart = '영업부'
MINUS
SELECT name
FROM tStaff
WHERE gender = '여';
SELECT name
FROM tStaff
WHERE gender = '여'
MINUS
SELECT name
FROM tStaff
WHERE depart = '영업부';
오라클,
마리아: CREATE TABLE tStaff2 AS
SELECT *
FROM tStaff;
MSSQL:
SELECT * INTO tStaff2
FROM tStaff;
UPDATE tStaff2
SET salary = 500
WHERE name = '안창호';
UPDATE tStaff2
SET depart = '인사과'
WHERE name = '성삼문';
DELETE FROM tStaff2
WHERE name = '홍길동';
INSERT INTO tStaff2
VALUES ('어우동', '총무부', '여', '20220401', '신입', 450, 0);
SELECT *
FROM tStaff2
MINUS
SELECT *
FROM tStaff;