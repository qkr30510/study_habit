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