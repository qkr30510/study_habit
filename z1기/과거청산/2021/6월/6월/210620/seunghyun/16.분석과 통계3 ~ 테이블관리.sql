
SELECT name, salary,
	FIRST_VALUE(salary) OVER (ORDER BY salary) AS first,
	LAST_VALUE(salary) OVER (ORDER BY salary) AS midlast,
	LAST_VALUE(salary) OVER (ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS last
FROM tStaff;

SELECT name, salary,
	salary - FIRST_VALUE(salary) OVER (ORDER BY salary) AS 최저월급기준,
	LAST_VALUE(salary) OVER (ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) - salary AS 최고월급기준
FROM tStaff ORDER BY name;

SELECT depart, name, salary,
	salary - FIRST_VALUE(salary) OVER (PARTITION BY depart ORDER BY salary) AS 최저월급기준,
	LAST_VALUE(salary) OVER (PARTITION BY depart ORDER BY salary ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) - salary AS 최고월급기준
FROM tStaff ORDER BY depart, salary;

SELECT year, month, sales,	
PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY sales) 
OVER (PARTITION BY year) AS cont,	
PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY sales) 
OVER (PARTITION BY year) AS disc
FROM tMonthSale;

CREATE TABLE tSeason
(
	item VARCHAR(10),
	season VARCHAR(10),
	sale INT
);

INSERT INTO tSeason VALUES ('냉면', '봄', 20);
INSERT INTO tSeason VALUES ('냉면', '여름', 50);
INSERT INTO tSeason VALUES ('냉면', '가을', 30);
INSERT INTO tSeason VALUES ('냉면', '겨울', 10);
INSERT INTO tSeason VALUES ('짬뽕', '봄', 30);
INSERT INTO tSeason VALUES ('짬뽕', '여름', 10);
INSERT INTO tSeason VALUES ('짬뽕', '가을', 20);
INSERT INTO tSeason VALUES ('짬뽕', '겨울', 40);

SELECT * FROM tSeason
PIVOT (MAX(sale) FOR season IN ('봄', '여름', '가을', '겨울'));

SELECT * FROM tSeason
PIVOT (MAX(sale) FOR season IN ('여름', '봄', '가을'));

SELECT * FROM tSeason
PIVOT (MAX(sale) FOR item IN ('냉면', '짬뽕'))

SELECT * FROM tSeason
PIVOT (sale FOR season IN ('봄', '여름', '가을', '겨울')) pvt;

SELECT * FROM tSeason
PIVOT (SUM(sale) FOR season IN ('봄', '여름', '가을', '겨울')) pvt;

INSERT INTO tSeason2 VALUES ('냉면', '봄', 20);
INSERT INTO tSeason2 VALUES ('냉면', '여름', 50);
INSERT INTO tSeason2 VALUES ('냉면', '가을', 30);
INSERT INTO tSeason2 VALUES ('짬뽕', '봄', 30);
INSERT INTO tSeason2 VALUES ('짬뽕', '가을', 20);
INSERT INTO tSeason2 VALUES ('짬뽕', '겨울', 40);
INSERT INTO tSeason2 VALUES ('짬뽕', '겨울', 30);

SELECT * FROM tSeason2 PIVOT (MAX(sale) FOR season IN ('봄', '여름', '가을', '겨울')) pvt;
SELECT * FROM tSeason2 PIVOT (SUM(sale) FOR season IN ('봄', '여름', '가을', '겨울')) pvt;

CREATE TABLE tTraffic
(
	line VARCHAR(10),
	hour INT,
	car VARCHAR(20),
	traffic INT
);

INSERT INTO tTraffic VALUES ('경부', 1, '승용차', 40);
INSERT INTO tTraffic VALUES ('경부', 2, '승용차', 41);
INSERT INTO tTraffic VALUES ('경부', 3, '승용차', 42);
INSERT INTO tTraffic VALUES ('경부', 1, '트럭', 30);
INSERT INTO tTraffic VALUES ('경부', 3, '트럭', 32);
INSERT INTO tTraffic VALUES ('호남', 1, '승용차', 20);
INSERT INTO tTraffic VALUES ('호남', 2, '승용차', 10);
INSERT INTO tTraffic VALUES ('호남', 2, '승용차', 11);
INSERT INTO tTraffic VALUES ('호남', 3, '승용차', 22);
INSERT INTO tTraffic VALUES ('호남', 1, '트럭', 10);
INSERT INTO tTraffic VALUES ('호남', 2, '트럭', 11);
INSERT INTO tTraffic VALUES ('호남', 3, '트럭', 12);

SELECT * FROM tTraffic PIVOT (SUM(traffic) FOR line IN ('경부', '호남')) pvt;
SELECT * FROM tTraffic PIVOT (SUM(traffic) FOR hour IN ('1', '2', '3')) pvt;

SELECT line, car, traffic FROM tTraffic 
PIVOT (SUM(traffic) FOR car IN ('승용차', '트럭')) pvt;

SELECT * FROM
(
	SELECT line, car, traffic FROM tTraffic
) prepvt
PIVOT (SUM(traffic) FOR car IN ('승용차', '트럭')) pvt;

SELECT line, SUM(승용차), SUM(트럭) FROM tTraffic
PIVOT (SUM(traffic) FOR car IN ('승용차' AS 승용차, '트럭' AS 트럭)) pvt
GROUP BY line;

SELECT * FROM
(
	SELECT hour, car, traffic FROM tTraffic
) prepvt
PIVOT (SUM(traffic) FOR car IN ('승용차', '트럭')) pvt;

SELECT * FROM
(
	SELECT car, traffic FROM tTraffic
) prepvt
PIVOT (SUM(traffic) FOR car IN ('승용차', '트럭')) pvt;

SELECT line, 트럭, 승용차 FROM
(
	SELECT line, hour, car, traffic FROM tTraffic
) prepvt
PIVOT (SUM(traffic) FOR car IN ('승용차' AS 승용차, '트럭' AS 트럭)) pvt;

SELECT line || '선 ' || CAST(hour AS VARCHAR(10)) || '시' AS 구분, 트럭, 승용차 FROM
(
	SELECT line, hour, car, traffic FROM tTraffic
) prepvt
PIVOT (SUM(traffic) FOR car IN ('승용차' AS 승용차, '트럭' AS 트럭)) pvt
ORDER BY line;

CREATE TABLE tCityStat
(
	name CHAR(10),
	attr CHAR(10),
	value INT
);

INSERT INTO tCityStat VALUES ('서울', 'area', 605);
INSERT INTO tCityStat VALUES ('서울', 'popu', 974);
INSERT INTO tCityStat VALUES ('서울', 'gu', 25);
INSERT INTO tCityStat VALUES ('인제', 'area', 1646);
INSERT INTO tCityStat VALUES ('인제', 'popu', 3);
INSERT INTO tCityStat VALUES ('인제', 'home', 15409);
INSERT INTO tCityStat VALUES ('홍천', 'area', 1819);

SELECT * FROM tCityStat
PIVOT (MAX(value) FOR attr IN ('area' AS area, 'popu' AS popu)) pvt;

SELECT name, ROUND(popu * 10000 / area, 2) AS 인구밀도 FROM
(
    SELECT * FROM tCityStat
    PIVOT (MAX(value) FOR attr IN ('area' AS area, 'popu' AS popu)) pvt
) A;

WHERE popu IS NOT NULL AND area IS NOT NULL

CREATE TABLE tSeasonPivot AS 
SELECT * FROM tSeason
PIVOT (SUM(sale) FOR season IN ('봄' AS 봄, '여름' AS 여름, '가을' AS 가을, '겨울' AS 겨울));

SELECT * INTO tSeasonPivot FROM tSeason
PIVOT (SUM(sale) FOR season IN (봄, 여름, 가을, 겨울)) pvt;

SELECT * FROM tSeasonPivot
UNPIVOT (sale FOR season IN (봄, 여름, 가을, 겨울)) unpvt;

SELECT * FROM
(
    SELECT * FROM tSeason
    PIVOT (SUM(sale) FOR season IN 
    ('봄' AS 봄, '여름' AS 여름, '가을' AS 가을, '겨울' AS 겨울)) pvt
) A
UNPIVOT (sale FOR season IN (봄, 여름, 가을, 겨울)) unpvt;

-------------------------------------------------
-- 14장

ALTER TABLE tCity ADD mayor CHAR(12) NULL;

UPDATE tCity SET mayor = '오륙도' WHERE name = '부산';

ALTER TABLE tCity ADD mayor CHAR(12) NOT NULL;

ALTER TABLE tCity DROP COLUMN mayor;

DROP TABLE tProject;
CREATE TABLE tProject
(
	projectID INT,
	employee CHAR(10),
	project VARCHAR(30),
	cost INT
);

INSERT INTO tProject VALUES (1, '김상형', '홍콩 수출건', 800);
INSERT INTO tProject VALUES (1, '김상형', 'TV 광고건', 3400);

TRUNCATE TABLE tProject;
ALTER TABLE tProject ADD CONSTRAINT PK_projectID PRIMARY KEY(projectID);

오라클, MSSQL : ALTER TABLE tProject DROP CONSTRAINT PK_projectID;
오라클, 마리아 : ALTER TABLE tProject DROP PRIMARY KEY;

DELETE FROM tProject WHERE employee='바이든';
ALTER TABLE tProject ADD CONSTRAINT FK_Project_Employee 
FOREIGN KEY(employee) REFERENCES tEmployee(name);

ALTER TABLE tProject DROP CONSTRAINT FK_Project_Employee;

오라클, 마리아 : ALTER TABLE tCity MODIFY region CHAR(30);
MSSQL : ALTER TABLE tCity ALTER COLUMN region CHAR(30);

INSERT INTO tCity VALUES ('제주',1849,67,'y','제주특별자치도');

오라클, 마리아 : ALTER TABLE tCity MODIFY region CHAR(1);
MSSQL : ALTER TABLE tCity ALTER COLUMN region CHAR(1);

오라클, 마리아 : ALTER TABLE tCity MODIFY popu DECIMAL(10,2);
MSSQL : ALTER TABLE tCity ALTER COLUMN popu DECIMAL(10,2);