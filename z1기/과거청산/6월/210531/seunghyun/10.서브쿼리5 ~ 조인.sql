오라클,
마리아: CREATE TABLE tCityNew AS
SELECT *
FROM tCity;
MSSQL:
SELECT * INTO tCityNew
FROM tCity;
UPDATE tCityNew
SET popu = 1000
WHERE name = '서울';
UPDATE tCityNew
SET area = 900
WHERE name = '부산';
DELETE FROM tCityNew
WHERE name = '춘천';
INSERT INTO tCityNew
VALUES ('이천', 461, 21, 'n', '경기');
MERGE INTO tCity T USING tCityNew S ON (S.name = T.name)
WHEN MATCHED THEN
UPDATE
SET T.area = S.area,
    T.popu = S.popu
    WHEN NOT MATCHED THEN
INSERT
VALUES (S.name, S.area, S.popu, S.metro, S.region);
MERGE INTO tCity T USING (
    SELECT *
    FROM tCityNew
    WHERE region = '경기'
) S ON (S.name = T.name)....MERGE INTO tCity T USING tCityNew S ON (
    S.name = T.name
    AND S.region = '경기'
)....CREATE TABLE tCityPopu (name CHAR(10) PRIMARY KEY, popu INT NULL);
INSERT INTO tCityPopu
VALUES ('서울', 1000);
INSERT INTO tCityPopu
VALUES ('부산', 500);
INSERT INTO tCityPopu
VALUES ('춘천', 100);
MERGE INTO tCity C USING tCityPopu P ON (C.name = P.name)
WHEN MATCHED THEN
UPDATE
SET C.popu = P.popu;
UPDATE tCity
SET popu = tCityPopu.popu
FROM tCityPopu
WHERE tCity.name = tCityPopu.name;
UPDATE tCity
SET popu = S.popu
FROM tCityPopu AS S
WHERE tCity.name = S.name;
UPDATE tCity AS T
SET T.popu = S.popu
FROM tCityPopu AS S
WHERE T.name = S.name;
UPDATE tCity
SET popu = (
        SELECT popu
        FROM tCityPopu P
        WHERE P.name = tCity.name
    )
WHERE name IN (
        SELECT name
        FROM tCityPopu
    ) -------------------------------------------------
    -- 10장
    CREATE TABLE tCar (
        car VARCHAR(30) NOT NULL,
        -- 이름
        capacity INT NOT NULL,
        -- 배기량
        price INT NOT NULL,
        -- 가격
        maker VARCHAR(30) NOT NULL -- 제조사
    );
INSERT INTO tCar (car, capacity, price, maker)
VALUES ('소나타', 2000, 2500, '현대');
INSERT INTO tCar (car, capacity, price, maker)
VALUES ('티볼리', 1600, 2300, '쌍용');
INSERT INTO tCar (car, capacity, price, maker)
VALUES ('A8', 3000, 4800, 'Audi');
INSERT INTO tCar (car, capacity, price, maker)
VALUES ('SM5', 2000, 2600, '삼성');
CREATE TABLE tMaker (
    maker VARCHAR(30) NOT NULL,
    -- 회사
    factory CHAR(10) NOT NULL,
    -- 공장
    domestic CHAR(1) NOT NULL -- 국산 여부. Y/N
);
INSERT INTO tMaker (maker, factory, domestic)
VALUES ('현대', '부산', 'y');
INSERT INTO tMaker (maker, factory, domestic)
VALUES ('쌍용', '청주', 'y');
INSERT INTO tMaker (maker, factory, domestic)
VALUES ('Audi', '독일', 'n');
INSERT INTO tMaker (maker, factory, domestic)
VALUES ('기아', '서울', 'y');
SELECT *
FROM tCar,
    tMaker;
SELECT *
FROM tCar
    CROSS JOIN tMaker;
SELECT *
FROM tCar,
    tMaker
WHERE tCar.maker = tMaker.maker;
SELECT tCar.car,
    tCar.price,
    tMaker.maker,
    tMaker.factory
FROM tCar,
    tMaker
WHERE tCar.maker = tMaker.maker;
SELECT tCar.*,
    tMaker.factory
FROM tCar,
    tMaker
WHERE tCar.maker = tMaker.maker;
SELECT car,
    price,
    tMaker.maker,
    factory
FROM tCar,
    tMaker
WHERE tCar.maker = tMaker.maker;
SELECT car,
    price,
    maker,
    factory
FROM tCar,
    tMaker
WHERE tCar.maker = tMaker.maker;
SELECT C.car,
    C.price,
    M.maker,
    M.factory
FROM tCar C,
    tMaker M
WHERE C.maker = M.maker;
SELECT A.car,
    A.price,
    B.maker,
    B.factory
FROM tCar A,
    tMaker B
WHERE A.maker = B.maker;
SELECT C.car,
    C.price,
    M.maker,
    M.factory
FROM tCar C
    INNER JOIN tMaker M ON C.maker = M.maker;
SELECT C.car,
    C.price,
    M.maker,
    M.factory
FROM tMaker M
    INNER JOIN tCar C ON M.maker = C.maker;
SELECT C.car,
    C.price,
    maker,
    M.factory
FROM tCar C
    INNER JOIN tMaker M USING(maker);
SELECT C.car,
    C.price,
    M.maker,
    M.factory
FROM tCar C
    LEFT OUTER JOIN tMaker M ON C.maker = M.maker;
SELECT C.car,
    C.price,
    M.maker,
    M.factory
FROM tCar C
    RIGHT OUTER JOIN tMaker M ON C.maker = M.maker;
SELECT C.car,
    C.price,
    M.maker,
    M.factory
FROM tMaker M
    LEFT OUTER JOIN tCar C ON C.maker = M.maker;
SELECT C.car,
    C.price,
    M.maker,
    M.factory
FROM tCar C
    FULL OUTER JOIN tMaker M ON C.maker = M.maker;
SELECT *
FROM tCar C
    INNER JOIN tMaker M ON C.maker = M.maker
    INNER JOIN tCity T ON M.factory = T.name;
SELECT C.car,
    M.factory,
    T.area
FROM tCar C
    INNER JOIN tMaker M ON C.maker = M.maker
    INNER JOIN tCity T ON M.factory = T.name;
SELECT *
FROM tCar C
    LEFT OUTER JOIN tMaker M ON C.maker = M.maker
    LEFT OUTER JOIN tCity T ON M.factory = T.name;
SELECT *
FROM tMaker M
    INNER JOIN tCity T ON M.factory = T.name
    INNER JOIN tCar C ON M.maker = C.maker;
SELECT *
FROM tMaker M
    LEFT OUTER JOIN tCity T ON M.factory = T.name
    LEFT OUTER JOIN tCar C ON M.maker = C.maker;
SELECT maker
FROM tCar
WHERE car = '티볼리';
SELECT factory
FROM tMaker
WHERE maker = '쌍용';
SELECT factory
FROM tMaker
WHERE maker = (
        SELECT maker
        FROM tCar
        WHERE car = '티볼리'
    );
SELECT *
FROM tCar C
    INNER JOIN tMaker M ON M.maker = C.maker;
SELECT *
FROM tCar C
    INNER JOIN tMaker M ON M.maker = C.maker
    AND C.car = '티볼리';
SELECT M.factory
FROM tCar C
    INNER JOIN tMaker M ON M.maker = C.maker
    AND C.car = '티볼리';
SELECT M.factory,
    C.price
FROM tCar C
    INNER JOIN tMaker M ON M.maker = C.maker
    AND C.car = '티볼리';
SELECT factory,
    price
FROM tMaker
WHERE maker = (
        SELECT maker
        FROM tCar
        WHERE car = '티볼리'
    );
SELECT factory,
    (
        SELECT price
        FROM tCar
        WHERE car = '티볼리'
    ) AS price
FROM tMaker
WHERE maker = (
        SELECT maker
        FROM tCar
        WHERE car = '티볼리'
    );
SELECT C.*,
    M.factory,
    M.domestic
FROM tCar C
    INNER JOIN tMaker M ON M.maker = C.maker
    AND C.car = '티볼리';
INSERT INTO tCar (car, capacity, price, maker)
VALUES ('티볼리', 1800, 2600, '쌍용');
SELECT C.*,
    M.factory,
    M.domestic
FROM tCar C
    LEFT OUTER JOIN tMaker M ON C.maker = M.maker;
INSERT INTO tCar (car, capacity, price, maker)
VALUES ('소나타', 2400, 2900, '현대');
INSERT INTO tMaker (maker, factory, domestic)
VALUES ('현대', '울산', 'y');
INSERT INTO tMaker (maker, factory, domestic)
VALUES ('현대', '마산', 'y');
SELECT *
FROM tCar C
    INNER JOIN tMaker M ON C.maker = M.maker;
SELECT *
FROM tCar C
    INNER JOIN tMaker M ON C.maker = M.maker
WHERE C.capacity = 2000;
SELECT *
FROM tCar C
    INNER JOIN tMaker M ON C.maker = M.maker
    AND C.capacity = 2000;
SELECT *
FROM tCar C
    LEFT OUTER JOIN tMaker M ON C.maker = M.maker
WHERE C.capacity = 2000;
SELECT *
FROM tCar C
    LEFT OUTER JOIN tMaker M ON C.maker = M.maker
    AND C.capacity = 2000;
SELECT *
FROM tCar C
    LEFT OUTER JOIN tMaker M ON C.maker = M.maker
    AND C.capacity = 2000
WHERE C.price > 2800
ORDER BY price DESC;
SELECT *
FROM tCar
WHERE capacity > 2000 C
    LEFT JOIN tMaker M ON C.maker = M.maker;
SELECT *
FROM (
        SELECT *
        FROM tCar
        WHERE capacity > 2000
    ) C
    LEFT JOIN tMaker M ON C.maker = M.maker;
SELECT *
FROM tCar C
    LEFT JOIN tMaker M ON C.maker = M.maker
WHERE C.capacity > 2000;
SELECT *
FROM (
        SELECT *
        FROM tCar
        WHERE capacity > 2000
    ) C
    LEFT JOIN (
        SELECT *
        FROM tMaker
        WHERE factory = '울산'
    ) M ON C.maker = M.maker;
SELECT *
FROM (
        SELECT *
        FROM tCar
        WHERE capacity > 2000
    ) C
    LEFT JOIN tMaker M ON C.maker = M.maker
WHERE M.factory = '울산';