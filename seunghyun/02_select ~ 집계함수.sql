# Oracle O
SELECT *
FROM tCity
WHERE rownum <= 4;
# Oracle O
SELECT *
FROM tCity
ORDER BY area DESC
WHERE rownum <= 4;
# Oracle O
SELECT *
FROM tCity
WHERE rownum <= 4
ORDER BY area DESC;
# Oracle O
SELECT *
FROM (
        SELECT *
        FROM tCity
        ORDER BY area DESC
    )
WHERE rownum <= 4;
# Mssql O
SELECT TOP 4 *
FROM tCity
ORDER BY area DESC;
# Mssql O
SELECT TOP 20 PERCENT *
FROM tCity
ORDER BY popu DESC;
# Mssql O
SELECT *
FROM tExam
ORDER BY Score DESC;
# Mssql O
SELECT TOP 100 *
FROM tExam
ORDER BY Score DESC;
# Mssql O
SELECT TOP 1 PERCENT WITH TIES *
FROM tExam
ORDER BY Score DESC;
# mariaDB O
SELECT *
FROM tCity
ORDER BY area DESC
LIMIT 4;
# mariaDB O
SELECT *
FROM tCity
ORDER BY area DESC
LIMIT 2, 3;
# mariaDB X
SELECT *
FROM tCity
ORDER BY area DESC OFFSET 0 ROWS FETCH NEXT 4 ROWS ONLY;
# mariaDB X
SELECT *
FROM tCity
ORDER BY area DESC OFFSET 2 ROWS FETCH NEXT 3 ROWS ONLY;
# mariaDB X
SELECT *
FROM tCity
WHERE metro = 'n'
ORDER BY area DESC OFFSET 2 ROWS FETCH NEXT 3
SELECT COUNT(*)
FROM tStaff;
SELECT COUNT(*) AS "총 직원수"
FROM tStaff;
SELECT COUNT(*)
FROM tStaff
WHERE salary >= 400;
SELECT COUNT(*)
FROM tStaff
WHERE salary >= 10000;
SELECT name
FROM tStaff
WHERE salary >= 400;
SELECT COUNT(name)
FROM tStaff;
SELECT COUNT(depart)
FROM tStaff;
SELECT COUNT(DISTINCT depart)
FROM tStaff;
SELECT COUNT(score)
FROM tStaff;
SELECT COUNT(*) - COUNT(score)
FROM tStaff;
SELECT COUNT(*)
FROM tStaff
WHERE score IS NULL;
SELECT SUM(popu),
    AVG(popu)
FROM tCity;
SELECT MIN(area),
    MAX(area)
FROM tCity;
SELECT SUM(score),
    AVG(score)
FROM tStaff
WHERE depart = '인사과';
SELECT MIN(salary),
    MAX(salary)
FROM tStaff
WHERE depart = '영업부';
SELECT SUM(name)
FROM tStaff;
-- 에러
SELECT MIN(name)
FROM tStaff;
SELECT MAX(popu),
    name
FROM tCity;
SELECT AVG(salary)
FROM tStaff;
SELECT SUM(salary) / COUNT(*)
FROM tStaff;
SELECT AVG(score)
FROM tStaff;
SELECT SUM(score) / COUNT(*)
FROM tStaff;
SELECT COUNT(*)
FROM tStaff
WHERE depart = '비서실';
SELECT MAX(salary)
FROM tStaff
WHERE depart = '비서실';
SELECT '영업부',
    AVG(salary)
FROM tStaff
WHERE depart = '영업부';
SELECT '총무부',
    AVG(salary)
FROM tStaff
WHERE depart = '총무부';
SELECT '인사과',
    AVG(salary)
FROM tStaff
WHERE depart = '인사과';