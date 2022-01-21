SELECT depart,
    AVG(salary)
FROM tStaff
GROUP BY depart;
SELECT depart,
    COUNT(*),
    MAX(joindate),
    AVG(score)
FROM tStaff
GROUP BY depart;
SELECT gender,
    AVG(salary)
FROM tStaff
GROUP BY gender;
SELECT name,
    SUM(salary)
FROM tStaff
GROUP BY name;
SELECT depart,
    gender,
    COUNT(*)
FROM tStaff
GROUP BY depart,
    gender;
SELECT gender,
    depart,
    COUNT(*)
FROM tStaff
GROUP BY gender,
    depart;
SELECT depart,
    gender,
    COUNT(*)
FROM tStaff
GROUP BY depart,
    gender
ORDER BY depart,
    gender;
SELECT depart,
    salary
FROM tStaff
GROUP BY depart;
SELECT SUM(salary)
FROM tStaff
GROUP BY depart;
SELECT depart,
    SUM(salary)
FROM tStaff;
SELECT depart,
    SUM(salary)
FROM tStaff
GROUP BY depart;
SELECT SUM(salary)
FROM tStaff;
SELECT depart,
    AVG(salary)
FROM tStaff
GROUP BY depart
HAVING AVG(salary) >= 340;
SELECT depart,
    AVG(salary)
FROM tStaff
GROUP BY depart
HAVING AVG(salary) >= 340
ORDER BY AVG(salary);
SELECT depart,
    AVG(salary)
FROM tStaff
WHERE salary > 300
GROUP BY depart;
SELECT depart,
    AVG(salary)
FROM tStaff
WHERE salary > 300
GROUP BY depart
HAVING AVG(salary) >= 360
ORDER BY depart;
SELECT depart,
    MAX(salary)
FROM tStaff
WHERE depart IN ('인사과', '영업부')
GROUP BY depart;
SELECT depart,
    MAX(salary)
FROM tStaff
GROUP BY depart
HAVING depart IN ('인사과', '영업부');