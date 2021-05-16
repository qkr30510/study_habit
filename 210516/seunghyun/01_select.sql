SELECT * FROM tCity;

SELECT name AS 도시명, area AS "면적(제곱Km)", popu AS "인구(만명)" FROM tCity;

SELECT 도시명 = name, area '면적(제곱Km)', popu [인구(만명)] FROM tCity;

SELECT name, popu * 10000 AS "인구(명)" FROM tCity;

SELECT name, area, popu, popu * 10000 / area AS "인구밀도" FROM tCity;

SELECT 60 * 60 * 24 AS "하루" FROM dual;

SELECT 60 * 60 * 24;

SELECT * FROM tCity WHERE area > 1000;

SELECT name, area FROM tCity WHERE area > 1000;

SELECT * FROM tCity WHERE name = '서울'			-- 맞음
SELECT * FROM tCity WHERE name = 서울				-- 틀림
SELECT * FROM tCity WHERE name = "서울"			-- 틀림. 단, 마리아는 인정한다.

SELECT * FROM tStaff WHERE score = NULL;

SELECT * FROM tStaff WHERE score IS NULL;

SELECT * FROM tStaff WHERE score IS NOT NULL;

SELECT * FROM tCity WHERE popu >= 100 AND area >= 700;

SELECT * FROM tCity WHERE region = '경기' AND popu >= 50 OR area >= 500;
SELECT * FROM tCity WHERE region = '경기' AND (popu >= 50 OR area >= 500);

SELECT * FROM tCity WHERE region != '경기';
SELECT * FROM tCity WHERE NOT(region = '경기');

SELECT * FROM tCity WHERE region = '전라' OR metro = 'y';

SELECT * FROM tCity WHERE region != '전라' AND metro != 'y';

SELECT * FROM tCity WHERE NOT(region = '전라' OR metro = 'y');

SELECT * FROM tCity WHERE name LIKE '%천%';

SELECT * FROM tCity WHERE name NOT LIKE '%천%';

SELECT * FROM tCity WHERE name LIKE '천%';
SELECT * FROM tCity WHERE name LIKE '%천';

SELECT * FROM tCity WHERE TRIM(name) LIKE '%천';

SELECT * FROM tCity WHERE popu BETWEEN 50 AND 100;

SELECT * FROM tCity WHERE popu >= 50 AND popu <= 100;

SELECT * FROM tStaff WHERE name BETWEEN '가' AND '사';
SELECT * FROM tStaff WHERE joindate BETWEEN '20150101' AND '20180101';

SELECT * FROM tCity WHERE region IN ('경상', '전라');

SELECT * FROM tCity WHERE region = '경상' OR region = '전라';

SELECT * FROM tCity WHERE region NOT IN ('경상', '전라');

SELECT * FROM tStaff WHERE name LIKE IN ('이%', '안%');

SELECT * FROM tStaff WHERE name LIKE '이%' OR name LIKE '안%';

SELECT * FROM tCity ORDER BY popu;
SELECT * FROM tCity ORDER BY popu DESC;

SELECT region, name, area, popu FROM tCity ORDER BY region, name DESC;

SELECT * FROM tCity ORDER BY area;
SELECT * FROM tCity ORDER BY 2;

SELECT name FROM tCity ORDER BY popu;

SELECT name, popu * 10000 / area FROM tCity ORDER BY popu * 10000 / area;

SELECT * FROM tCity WHERE region = '경기' ORDER BY area;

SELECT * FROM tCity ORDER BY area WHERE region = '경기';

SELECT region FROM tCity;
SELECT DISTINCT region FROM tCity;
SELECT DISTINCT region FROM tCity ORDER BY region;

SELECT ALL depart FROM tStaff;
SELECT DISTINCT depart FROM tStaff;