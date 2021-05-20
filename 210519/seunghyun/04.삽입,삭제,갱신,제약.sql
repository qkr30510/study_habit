INSERT INTO tCity (name, area, popu, metro, region)
VALUES ('서울', 605, 974, 'y', '경기');
INSERT INTO tCity
VALUES ('서울', 605, 974, 'y', '경기');
INSERT INTO tCity
VALUES ('평택', 453, 51, 'n', '경기');
INSERT INTO tCity
VALUES ('평택', 51, 453, 'n', '경기');
/ / area와 popu가 바뀜
INSERT INTO tCity
VALUES ('평택', 453, 'n', 51, '경기');
/ / popu와 metro 순서가 바뀜
INSERT INTO tCity
VALUES ('평택', 453, 'n', '경기');
/ / popu 필드값 누락
INSERT INTO tCity (area, popu, metro, region, name)
VALUES (453, 51, 'n', '경기', '평택');
TRUNCATE TABLE tCity;
INSERT INTO tCity (name, area, popu, metro, region)
VALUES ('서울', 605, 974, 'y', '경기'),
    ('부산', 765, 342, 'y', '경상'),
    ('오산', 42, 21, 'n', '경기'),
    ('청주', 940, 83, 'n', '충청'),
    ('전주', 205, 65, 'n', '전라'),
    ('순천', 910, 27, 'n', '전라'),
    ('춘천', 1116, 27, 'n', '강원'),
    ('홍천', 1819, 7, 'n', '강원');
INSERT INTO tStaff(
        name,
        depart,
        gender,
        joindate,
        grade,
        salary,
        score
    )
SELECT name,
    region,
    metro,
    '20210629',
    '신입',
    area,
    popu
FROM tCity
WHERE region = '경기';
INSERT INTO tStaff(
        name,
        depart,
        gender,
        joindate,
        grade,
        salary,
        score
    )
SELECT name,
    지원부서,
    gender,
    오늘,
    '수습',
    230,
    score * 0.1
FROM tCandidate
WHERE result = '합격';
CREATE TABLE tSudo AS
SELECT name,
    area,
    popu
FROM tCity
WHERE region = '경기';
SELECT *
FROM tSudo;
SELECT * INTO tCityCopy
FROM tCity;
CREATE TABLE tStaff_8월20일 AS
SELECT *
FROM tStaff;
DELETE FROM tCity
WHERE name = '부산';
DELETE FROM tCity
WHERE region = '경기';
DELETE FROM tCity;
SELECT *
FROM tCity
WHERE popu > 50;
-- DELETE
-- SELECT *
FROM tStaff
WHERE grade = '과장';
UPDATE tCity
SET popu = 1000,
    region = '충청'
WHERE name = '서울';
UPDATE tCity
SET popu = 1000,
    region = '충청';
UPDATE tCity
SET popu = popu * 2
WHERE name = '오산';
-------------------------------------------------
-- 7장
INSERT INTO tCity
VALUES ('평양', '엄청 넓음', '꽤 많을걸', 'n', '조선인민민주주의공화국');
INSERT INTO tCity (name, popu, metro, region)
VALUES ('울산', 114, 'y', '경상');
INSERT INTO tCity (name, metro, region)
VALUES ('삼척', 'n', '강원');
INSERT INTO tCity (area, popu, metro, region)
VALUES (456, 123, 'n', '충청');
INSERT INTO tCity (name, area, popu)
VALUES ('의정부', 456, 123);
CREATE TABLE tNullable (name CHAR(10) NOT NULL, age INT);
CREATE TABLE tCityDefault (
    name CHAR(10) PRIMARY KEY,
    area INT NULL,
    popu INT NULL,
    metro CHAR(1) DEFAULT 'n' NOT NULL,
    region CHAR(6) NOT NULL
);
INSERT INTO tCityDefault (name, area, popu, region)
VALUES ('진주', 712, 34, '경상');
INSERT INTO tCityDefault (name, area, popu, metro, region)
VALUES ('인천', 1063, 295, 'y', '경기');
INSERT INTO tCityDefault
VALUES ('강릉', 1111, 22, '강원');
-- 에러
INSERT INTO tCityDefault
VALUES ('강릉', 1111, 22, DEFAULT, '강원');
-- 정상 실행
UPDATE tCity_Default
SET metro = DEFAULT
WHERE name = '인천' CREATE TABLE tCheckTest (
        gender CHAR(3) NULL CHECK(
            gender = '남'
            OR gender = '여'
        ),
        grade INT NULL CHECK (
            grade >= 1
            AND grade <= 3
        ),
        origin CHAR(3) NULL CHECK(origin IN ('동', '서', '남', '북')),
        name CHAR(10) NULL CHECK(name LIKE '김%')
    );
INSERT INTO tCheckTest (gender)
VALUES ('여');
INSERT INTO tCheckTest (grade)
VALUES (1);
INSERT INTO tCheckTest (origin)
VALUES ('동');
INSERT INTO tCheckTest (name)
VALUES ('김좌진');
INSERT INTO tCheckTest (gender)
VALUES ('노');
INSERT INTO tCheckTest (grade)
VALUES (0);
INSERT INTO tCheckTest (origin)
VALUES ('중');
INSERT INTO tCheckTest (name)
VALUES ('청산리');
UPDATE tCheckTest
SET grade = 4
WHERE grade IS NOT NULL;
region CHAR(6) NOT NULL CHECK (region IN ('경기', '충청', '강원', '경상', '전라', '제주'))
INSERT INTO tCity3
VALUES ('울릉', 72, 1, 'n', '우산');
INSERT INTO tCity
VALUES ('춘천', 1116, 27, 'n', '강원');
CREATE TABLE tCity (
    name CHAR(10),
    area INT NULL,
    popu INT NULL,
    metro CHAR(1) NOT NULL,
    region CHAR(6) NOT NULL,
    CONSTRAINT PK_tCity_name PRIMARY KEY(name)
);
CREATE TABLE tCity (
    name CHAR(10) PRIMARY KEY,
    region CHAR(6) PRIMARY KEY,
    area INT NULL,
    popu INT NULL,
    metro CHAR(1) NOT NULL
);
CREATE TABLE tCityCompoKey (
    name CHAR(10) NOT NULL,
    region CHAR(6) NOT NULL,
    area INT NULL,
    popu INT NULL,
    metro CHAR(1) NOT NULL,
    CONSTRAINT PK_tCity_name_region PRIMARY KEY (name, region)
);
INSERT INTO tCityCompoKey
VALUES ('광주', '전라', 123, 456, 'y');
INSERT INTO tCityCompoKey
VALUES ('광주', '경기', 123, 456, 'n');
CREATE TABLE tCityUnique (
    name CHAR(10) PRIMARY KEY,
    area INT NULL,
    popu INT UNIQUE NULL,
    metro CHAR(1) NOT NULL,
    region CHAR(6) NOT NULL
);
CREATE TABLE tCityUnique (
    name CHAR(10) PRIMARY KEY,
    area INT NULL,
    popu INT NULL,
    metro CHAR(1) NOT NULL,
    region CHAR(6) NOT NULL,
    CONSTRAINT Unique_tCity_area_popu UNIQUE(area, popu)
);
CREATE SEQUENCE seqSale START WITH 1 INCREMENT BY 1;
CREATE TABLE tSale (
    saleno INT PRIMARY KEY,
    customer VARCHAR(20),
    product VARCHAR(30)
);
INSERT INTO tSale
VALUES (seqSale.NEXTVAL, '단군', '지팡이');
INSERT INTO tSale
VALUES (seqSale.NEXTVAL, '고주몽', '고등어');
INSERT INTO tSale
VALUES (NEXT VALUE FOR seqSale, '단군', '지팡이');
INSERT INTO tSale
VALUES (NEXT VALUE FOR seqSale, '고주몽', '고등어');
DELETE FROM tSale
WHERE saleno = 2;
오라클:
INSERT INTO tSale
VALUES (seqSale.NEXTVAL, '박혁거세', '계란');
MSSQL:
INSERT INTO tSale
VALUES (NEXT VALUE FOR seqSale, '박혁거세', '계란');
INSERT INTO tSale
VALUES (2, '고주몽', '고등어');
CREATE TABLE tSaleSeq (
    saleno INT GENERATED AS IDENTITY PRIMARY KEY,
    customer VARCHAR(20),
    product VARCHAR(30)
);
INSERT INTO tSaleSeq (customer, product)
VALUES ('단군', '지팡이');
INSERT INTO tSaleSeq (customer, product)
VALUES ('고주몽', '고등어');
saleno INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
saleno INT GENERATED BY DEFAULT ON NULL AS IDENTITY PRIMARY KEY,
INSERT INTO tSale (saleno, customer, product)
VALUES (5, '단군', '지팡이');
-- 가능
INSERT INTO tSale (saleno, customer, product)
VALUES (NULL, '고주몽', '고등어');
-- 에러
CREATE TABLE tSaleId (
    saleno INT IDENTITY PRIMARY KEY,
    customer VARCHAR(20),
    product VARCHAR(30)
);
INSERT INTO tSaleId (customer, product)
VALUES ('단군', '지팡이');
INSERT INTO tSaleId (customer, product)
VALUES ('고주몽', '고등어');
DELETE FROM tSaleId
WHERE saleno = 2;
INSERT INTO tSaleId (customer, product)
VALUES ('박혁거세', '계란');
INSERT INTO tSaleId (saleno, customer, product)
VALUES (2, '고주몽', '고등어');
SET IDENTITY_INSERT tSaleId ON;
INSERT INTO tSaleId (saleno, customer, product)
VALUES (2, '고주몽', '고등어');
SET IDENTITY_INSERT tSaleId OFF;
INSERT INTO tSaleId
VALUES ('왕건', '너구리');
UPDATE tSaleId
SET product = '짜파게티'
WHERE saleno = @@IDENTITY;
CREATE TABLE tSale (
    saleno INT AUTO_INCREMENT PRIMARY KEY,
    customer NCHAR(10),
    product NCHAR(30)
);
INSERT INTO tSale (customer, product)
VALUES ('단군', '지팡이');
INSERT INTO tSale (customer, product)
VALUES ('고주몽', '고등어');
DELETE FROM tSale
WHERE saleno = 2;
INSERT INTO tSale (customer, product)
VALUES ('박혁거세', '계란');
INSERT INTO tSale (saleno, customer, product)
VALUES (2, '고주몽', '고등어');
ALTER TABLE tSale AUTO_INCREMENT = 100;
INSERT INTO tSale (customer, product)
VALUES ('왕건', '너구리');
UPDATE tSale
SET product = '짜파게티'
WHERE saleno = LAST_INSERT_ID();