CREATE TABLE tMonthSale
(
	year INT,
	month INT,
	sales	INT
);

INSERT INTO tMonthSale VALUES(2021, 9, 3650);
INSERT INTO tMonthSale VALUES(2021, 10, 4120);
INSERT INTO tMonthSale VALUES(2021, 11, 5000);
INSERT INTO tMonthSale VALUES(2021, 12, 4420);
INSERT INTO tMonthSale VALUES(2022, 1, 3800);
INSERT INTO tMonthSale VALUES(2022, 2, 4200);
INSERT INTO tMonthSale VALUES(2022, 3, 4150);

SELECT gender, SUM(salary) FROM tStaff GROUP BY gender;
SELECT depart, SUM(salary) FROM tStaff GROUP BY depart;
SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY depart, gender;

SELECT depart, SUM(salary) FROM tStaff GROUP BY ROLLUP(depart);

SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY ROLLUP(depart, gender);

SELECT gender, depart, SUM(salary) FROM tStaff GROUP BY ROLLUP(gender, depart);

SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY depart, ROLLUP(gender);
SELECT gender, depart, SUM(salary) FROM tStaff GROUP BY gender, ROLLUP(depart);

SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY CUBE(depart, gender);

SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY ROLLUP(depart, gender)
UNION
SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY ROLLUP(gender, depart);

SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY CUBE(gender, depart);

SELECT depart, gender, SUM(salary) FROM tStaff GROUP BY GROUPING SETS(depart, gender);

SELECT GROUPING(depart), depart, SUM(salary) FROM tStaff GROUP BY ROLLUP(depart);

SELECT CASE GROUPING(depart) WHEN 1 THEN '전체부서' ELSE depart END AS depart, 
SUM(salary) FROM tStaff GROUP BY ROLLUP(depart);

SELECT CASE GROUPING(depart) WHEN 1 THEN '전체부서' ELSE depart END AS depart,
	CASE GROUPING(gender) WHEN 1 THEN '전체성별' ELSE gender END AS gender, 
	SUM(salary) FROM tStaff GROUP BY CUBE(depart, gender)
	ORDER BY /*GROUPING(depart), GROUPING(gender),*/ depart, gender;

SELECT name, depart, salary, SUM(salary) FROM tStaff;

SELECT depart, SUM(salary) FROM tStaff GROUP BY depart;

SELECT name, depart, salary, (SELECT SUM(salary) FROM tStaff) AS 월급총합 FROM tStaff;

SELECT name, depart, salary, SUM(salary) OVER() AS 월급총합 FROM tStaff;

SELECT name, depart, salary, ROUND(salary * 100.0 / SUM(salary) OVER(), 2) 
AS 월급비율 FROM tStaff;

SELECT name, depart, salary, (SELECT SUM(salary) FROM tStaff GROUP BY depart) 
AS 부서월급총합 FROM tStaff;

SELECT name, depart, salary, (SELECT SUM(salary) FROM tStaff WHERE depart = A.depart) 
AS 부서월급총합 FROM tStaff A ORDER BY depart;

SELECT name, depart, salary, SUM(salary) OVER(PARTITION BY depart) 
AS 부서월급총합 FROM tStaff;

SELECT name, depart, salary, SUM(salary) OVER(ORDER BY name) 
AS 누적월급 FROM tStaff;

SELECT name, depart, salary, SUM(salary) OVER(PARTITION BY depart ORDER BY name) 
AS 부서누적월급 FROM tStaff;

SELECT name, depart, salary, (SELECT SUM(salary) FROM tStaff 
WHERE name <= A.name) AS 누적월급 FROM tStaff A ORDER BY name;
SELECT name, depart, salary, (SELECT SUM(salary) FROM tStaff 
WHERE name <= A.name AND depart = A.depart) AS 부서누적월급 
FROM tStaff A ORDER BY depart, name;

SELECT name, depart, salary, SUM(salary) OVER(ORDER BY name 
ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING) AS 누적월급 FROM tStaff;

SELECT name, depart, salary, SUM(salary) OVER(ORDER BY name 
ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS 누적월급 FROM tStaff;

SELECT name, depart, joindate, salary, 
SUM(salary) OVER(PARTITION BY depart ORDER BY joindate 
ROWS BETWEEN CURRENT ROW AND 2 FOLLOWING) AS 누적월급 FROM tStaff;

SELECT name, depart, salary, SUM(salary) OVER(ORDER BY salary 
ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적월급 FROM tStaff;

SELECT name, depart, salary, SUM(salary) OVER(ORDER BY salary 
RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS 누적월급 FROM tStaff;

SELECT RANK() OVER (ORDER BY salary DESC), tStaff.* FROM tStaff;
MSSQL, 마리아 : SELECT RANK() OVER (ORDER BY salary DESC), * FROM tStaff;

SELECT RANK() OVER (ORDER BY salary DESC), tStaff.* FROM tStaff ORDER BY score;

SELECT RANK() OVER (ORDER BY salary DESC) AS 순위, tStaff.* FROM tStaff 
WHERE depart = '영업부';

SELECT RANK() OVER (PARTITION BY depart ORDER BY salary DESC) 
AS 순위, tStaff.* FROM tStaff;

SELECT DENSE_RANK() OVER (ORDER BY salary DESC), tStaff.* FROM tStaff;

SELECT ROW_NUMBER() OVER (ORDER BY name), tStaff.* FROM tStaff;

SELECT ROW_NUMBER() OVER (ORDER BY rownum) AS 순서, tStaff.* FROM tStaff;

SELECT ROW_NUMBER() OVER (ORDER BY name) AS 순서, tStaff.* FROM tStaff
ORDER BY 순서 OFFSET 2 * 5 ROWS FETCH NEXT 5 ROWS ONLY;

SELECT * FROM
(SELECT ROW_NUMBER() OVER (ORDER BY name) AS 순서, tStaff.* FROM tStaff) S
WHERE S.순서 > 2 * 5 AND rownum <= 5;

SELECT TOP(5) * FROM
(SELECT ROW_NUMBER() OVER (ORDER BY name) AS 순서, tStaff.* FROM tStaff) S
WHERE S.순서 > 2 * 5;

SELECT ROW_NUMBER() OVER (ORDER BY name) AS 순서, tStaff.* FROM tStaff LIMIT 11, 5;

SELECT NTILE(4) OVER (ORDER BY salary DESC) AS 구간, name, salary FROM tStaff;
SELECT NTILE(4) OVER (PARTITION BY gender ORDER BY salary DESC) 
AS 구간, name, gender, salary FROM tStaff;

SELECT name, score FROM 
(SELECT NTILE(5) OVER (ORDER BY score DESC) AS 구간, tStaff.* FROM tStaff) S 
WHERE S.구간 = 3;

SELECT year, month, sales,
	LAG(sales) OVER (ORDER BY year, month) AS priorMonth,
	LEAD(sales) OVER (ORDER BY year, month) AS nextMonth
FROM tMonthSale;

SELECT year, month, sales,
	sales - LAG(sales) OVER (ORDER BY year, month) AS incsales
FROM tMonthSale;

SELECT year, month, sales,
	LAG(sales) OVER (PARTITION BY year ORDER by year, month) AS priorMonth,
	LEAD(sales) OVER (PARTITION BY year ORDER by year, month) AS nextMonth
FROM tMonthSale;

SELECT year, month, sales,
	ROUND(CUME_DIST() OVER (ORDER BY year, month) * 100, 2) AS cume,
	ROUND(PERCENT_RANK() OVER (ORDER BY year, month) * 100, 2) AS rank
FROM tMonthSale;

SELECT name, salary,
	ROUND(CUME_DIST() OVER (ORDER BY salary) * 100, 2) AS cume,
	ROUND(PERCENT_RANK() OVER (ORDER BY salary) * 100, 2) AS rank
FROM tStaff;

SELECT depart, name, salary,
	ROUND(CUME_DIST() OVER (PARTITION BY depart ORDER BY salary) * 100, 2) AS cume,
	ROUND(PERCENT_RANK() OVER (PARTITION BY depart ORDER BY salary) * 100, 2) AS rank
FROM tStaff;
