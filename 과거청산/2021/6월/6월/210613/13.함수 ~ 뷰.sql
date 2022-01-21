SELECT LENGTH('korea대한민국')
FROM dual;
-- 9
SELECT LENGTHB('korea대한민국')
FROM dual;
-- 17
SELECT *
FROM tItem
WHERE LENGTH(item) = 2;
SELECT CONCAT(region, name)
FROM tCity;
오라클:
SELECT region || name
FROM tCity;
MSSQL:
SELECT region + name
FROM tCity;
SELECT region || '도의 ' || name
FROM tCity;
SELECT CONCAT(CONCAT(region, '도의 '), name)
FROM tCity;
MSSQL,
마리아:
SELECT CONCAT(region, '도의 ', name)
FROM tCity;
SELECT INSTR('우리나라 대한민국', '나라')
FROM dual;
-- 3
SELECT INSTR('우리나라 대한민국', '민족')
FROM dual;
-- 0
SELECT INSTR('국민에 의한 국민을 위한 국민의 국민당', '국민', 3)
FROM dual;
-- 8
SELECT INSTR('국민에 의한 국민을 위한 국민의 국민당', '국민', 1, 3)
FROM dual;
-- 15
SELECT INSTR('국민에 의한 국민을 위한 국민의 국민당', '국민', -1)
FROM dual;
-- 19
MSSQL:
SELECT CHARINDEX('국민', '국민에 의한 국민을 위한 국민의 국민당', 3);
-- 8
마리아:
SELECT POSITION('국민' IN '국민에 의한 국민을 위한 국민의 국민당');
-- 1
SELECT SUBSTR('아름다운 대한민국 금수강산', 6, 4)
FROM dual;
-- 대한민국
SELECT SUBSTR('아름다운 대한민국 금수강산', -4, 2)
FROM dual;
-- 금수
SELECT SUBSTR(name, 1, 1),
    COUNT(*)
FROM tStaff
GROUP BY SUBSTR(name, 1, 1)
ORDER BY COUNT(*) DESC;
SELECT SUBSTR(
        '...이름:홍길동,...',
        INSTR('...이름:홍길동,...', '이름') + 3,
        3
    )
FROM dual;
SELECT LOWER('wonderful SQL')
FROM dual;
-- wonderful sql
SELECT UPPER('wonderful SQL')
FROM dual;
-- WONDERFUL SQL
SELECT INITCAP('wonderful SQL')
FROM dual;
-- Wonderful Sql
SELECT *
FROM tCity
WHERE metro = 'y';
SELECT *
FROM tCity
WHERE UPPER(metro) = 'Y';
SELECT *
FROM tCity
WHERE LOWER(metro) = 'y';
SELECT CONCAT(name, ' 사원님')
FROM tStaff;
SELECT CONCAT(TRIM(name), ' 사원님')
FROM tStaff;
SELECT LPAD('SQL', 10, '>')
FROM dual;
- - >> >> >> > SQL
SELECT RPAD('SQL', 10, '<')
FROM dual;
-- SQL<<<<<<<
SELECT LPAD(RPAD('SQL', 10, '<'), 17, '>')
FROM dual;
- - >> >> >> > SQL << << << <
SELECT name,
    LPAD(area, 4, '0')
FROM tCity;
SELECT REPLACE('독도는 일본땅이다', '일본', '한국')
FROM dual;
SELECT REPLACE('구글에서 구글링한다.', '구글', '네이버')
FROM dual;
-- 네이버에서 네이버링한다.
SELECT REPLACE('Get_Total_Score', '_', '')
FROM dual;
-- GetTotalScore
SELECT REPLACE('독도는 일본땅이다. 대마도는 일본땅이다.', '일본', '한국')
FROM dual;
SELECT STUFF('독도는 일본땅이다. 대마도는 일본땅이다.', 5, 2, '한국');
SELECT SUBSTR(
        '독도는 일본땅이다. 대마도는 일본땅이다.',
        1,
        INSTR('독도는 일본땅이다. 대마도는 일본땅이다.', '일본') - 1
    ) || '한국' || SUBSTR(
        '독도는 일본땅이다. 대마도는 일본땅이다.',
        INSTR('독도는 일본땅이다. 대마도는 일본땅이다.', '일본') + 2
    )
FROM dual;
SELECT SUBSTR(str, 1, INSTR(str, '일본') - 1) || '한국' || SUBSTR(str, INSTR(str, '일본') + 2)
FROM tTable;
pos = INSTR(str, '일본');
SELECT SUBSTR(str, 1, pos - 1) || '한국' || SUBSTR(str, pos + 2)
FROM tTable;
INSERT INTO tDate
VALUES (
        TO_DATE('2021/12/25 12:34:56', 'yyyy/mm/dd hh24:mi:ss')
    );
SELECT AVG(popu)
FROM tCity;
오라클:
SELECT CAST(AVG(popu) AS INT)
FROM tCity;
-- 193
MSSQL:
SELECT AVG(CAST(popu AS DECIMAL))
FROM tCity;
-- 193.25
SELECT '12' + 34
FROM dual;
-- 46
SELECT '12' || 34
FROM dual;
-- 1234
SELECT '12' + 34;
-- 46
SELECT '12' + CAST(34 AS VARCHAR(10));
-- 1234
SELECT '응답하라 ' + 1989;
-- 에러
SELECT '응답하라 ' + CAST(1989 AS VARCHAR(10));
-- 응답하라 1989
SELECT '응답하라 ' || 1989
FROM dual;
SELECT TO_CHAR(12345)
FROM dual;
-- 12345
SELECT TO_CHAR(12345, '999,999')
FROM dual;
--  12,345
SELECT TO_CHAR(12345, 'FM999,999')
FROM dual;
-- 12,345
SELECT TO_CHAR(12345, '000,999')
FROM dual;
-- 012,345
SELECT TO_NUMBER('12345')
FROM dual;
-- 12345
SELECT TO_NUMBER('12,345')
FROM dual;
-- 에러
SELECT TO_NUMBER('12,345', '999,999')
FROM dual;
-- 12345
SELECT '응답하라 ' + CONVERT(VARCHAR(10), 1989);
-- 응답하라 1989
오라클:
SELECT name,
    NVL(score, 10)
FROM tStaff;
MSSQL:
SELECT name,
    ISNULL(score, 10)
FROM tStaff;
마리아:
SELECT name,
    IFNULL(score, 10)
FROM tStaff;
SELECT name,
    NULLIF(score, 0)
FROM tStaff;
SELECT name,
    NVL(NULLIF(score, 0), 60)
FROM tStaff;
SELECT name,
    NVL2(score, salary * score / 100, 50)
FROM tStaff;
SELECT name,
    DECODE(gender, '남', '멋쟁이', '여', '예쁜이', '몬난이')
FROM tStaff;
SELECT SYSDATE
FROM dual;
-- 20/10/17 12:21:42
INSERT INTO tStaff
VALUES ('김한슬', '기획실', '여', SYSDATE, '수습', 480, 50);
SELECT SYSDATE + 12
FROM dual;
SELECT SYSDATE + 5 / 24
FROM dual;
SELECT SYSDATE - 30 / 1440
FROM dual;
SELECT SYSDATE - 80 / 86400
FROM dual;
SELECT name,
    sysdate - joindate
FROM tStaff;
SELECT TO_CHAR(SYSDATE, 'yyyy/mm/dd hh24:mi:ss')
FROM dual;
-- 2020/10/17 12:18:51
SELECT TO_CHAR(SYSDATE, 'yyyy/mm/dd AM hh:mi:ss')
FROM dual;
-- 2020/10/17 오후 12:20:35
SELECT TO_CHAR(
        SYSDATE,
        'yyyy"년" mm"월" dd"일" hh24"시" mi"분" ss"초"'
    )
FROM dual;
-- 2020년 10월 17일 12시 24분 44초
SELECT name,
    TO_CHAR(joindate, 'yyyy')
FROM tStaff;
SELECT TO_CHAR(joindate, 'yyyy') AS 년,
    TO_CHAR(joindate, 'mm') AS 월,
    TO_CHAR(joindate, 'dd') AS 일
FROM tStaff;
SELECT TO_DATE('1919/3/1', 'yyyy/mm/dd')
FROM dual;
SELECT TO_DATE('1919-3-1', 'yyyy-mm-dd')
FROM dual;
SELECT TO_DATE('19190301', 'yyyymmdd')
FROM dual;
SELECT TO_DATE('1919/3/1')
FROM dual;
SELECT TO_DATE('1919-3-1')
FROM dual;
SELECT TO_DATE('19190301')
FROM dual;
SELECT sysdate - '1919/3/1'
FROM dual;
-- 에러
SELECT sysdate - TO_DATE('1919/3/1')
FROM dual;
SELECT TO_CHAR(
        TO_DATE('2023/3/8', 'yyyy/mm/dd') + 99,
        'yyyy"년" mm"월" dd"일"'
    )
FROM dual;
SELECT GETDATE();
SELECT name,
    YEAR(joindate) AS 년,
    MONTH(joindate) AS 월,
    DAY(joindate) AS 일
FROM tStaff;
SELECT YEAR(joindate),
    count(*)
FROM tStaff
GROUP BY YEAR(joindate)
ORDER BY YEAR(joindate);
SELECT DATEPART(dw, GETDATE());
SELECT DATENAME(dw, GETDATE());
SELECT name,
    DATEDIFF(day, joindate, GETDATE())
FROM tStaff;
SELECT DATEDIFF(day, '1919/3/1', GETDATE());
SELECT CONVERT(VARCHAR(20), GETDATE(), 0);
-- 06 29 2021 10:43PM
SELECT CONVERT(VARCHAR(20), GETDATE(), 11);
-- 21/06/29
SELECT CONVERT(VARCHAR(20), GETDATE(), 111);
-- 2021/06/29
SELECT CONVERT(VARCHAR(20), GETDATE(), 101);
-- 06/29/2021
SELECT CONVERT(VARCHAR(20), GETDATE(), 103);
-- 29/06/2021
SELECT NOW();
SELECT DATE_FORMAT(NOW(), '%Y/%m/%d %H:%i:%s');
SELECT DATE_FORMAT(joindate, '%Y'),
    count(*)
FROM tStaff
GROUP BY DATE_FORMAT(joindate, '%Y')
ORDER BY DATE_FORMAT(joindate, '%Y');
SELECT DATE_ADD(NOW(), INTERVAL 12 DAY);
-- 12일 후
SELECT DATE_ADD(NOW(), INTERVAL 5 HOUR);
-- 5시간 후
SELECT DATE_SUB(NOW(), INTERVAL 30 MINUTE);
-- 30분 전
SELECT name,
    DATEDIFF(NOW(), joindate)
FROM tStaff;
-------------------------------------------------
-- 12장
SELECT member,
    age,
    addr
FROM tMember;
CREATE VIEW vMember AS
SELECT member,
    age,
    addr
FROM tMember;
SELECT *
FROM vMember;
SELECT member,
    age
FROM vMember;
SELECT *
FROM vMember
WHERE addr LIKE '%서울%';
SELECT *
FROM vMember
ORDER BY member;
SELECT name,
    email
FROM vMember;
DROP VIEW vMember;
CREATE VIEW vMember AS
SELECT member,
    age,
    addr,
    email
FROM tMember;
오라클,
마리아:
CREATE OR REPLACE VIEW vMember AS
SELECT member,
    age,
    addr,
    email
FROM tMember;
MSSQL: ALTER VIEW vMember AS
SELECT member,
    age,
    addr,
    email
FROM tMember;
CREATE VIEW vMemberMirror AS
SELECT *
FROM tMember;
CREATE VIEW vStaffVirt AS
SELECT depart,
    salary,
    name
FROM tStaff;
CREATE VIEW vStaffHorz AS
SELECT *
FROM tStaff
WHERE depart = '총무부';
CREATE VIEW vStaffPart AS
SELECT name,
    salary
FROM tStaff
WHERE depart = '총무부';
CREATE VIEW vStaffAlias(n, d, s) AS
SELECT name,
    depart,
    salary
FROM tStaff;
CREATE OR REPLACE VIEW vStaffAlias AS
SELECT name n,
    depart d,
    salary s
FROM tStaff;
SELECT *
FROM vStaffAlias
ORDER BY s;
-- 맞음
SELECT *
FROM vStaffAlias
ORDER BY salary;
-- 에러
CREATE VIEW vStaffBonus AS
SELECT name,
    salary * score / 100 AS bonus
FROM tStaff;
SELECT *
FROM vStaffBonus
WHERE bonus > 300;
CREATE VIEW vShopping AS
SELECT M.member,
    M.addr,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member;
CREATE VIEW vUnion AS
SELECT name,
    salary
FROM tStaff
WHERE depart = '인사과'
UNION
SELECT name,
    salary
FROM tEmployee;
CREATE VIEW vvStaffHorz AS
SELECT name,
    joindate,
    salary
FROM vStaffHorz;
CREATE VIEW vOriginal AS
SELECT a,
    b,
    c
FROM tOriginal;
CREATE VIEW vOriginal(a, b, c) AS
SELECT x,
    y,
    c
FROM tOriginal;
UPDATE vMember
SET addr = '서울 신사동'
WHERE member = '춘향';
UPDATE vStaffBonus
SET bonus = 500
WHERE name = '유관순';
INSERT INTO vStaffHorz
VALUES ('김한슬', '총무부', '여', '2022/08/14', '사원', 520, 55);
INSERT INTO vStaffHorz
VALUES ('김한결', '영업부', '남', '2023/05/13', '사원', 490, 35);
CREATE VIEW vStaffHorzCheck AS
SELECT *
FROM tStaff
WHERE depart = '총무부' WITH CHECK OPTION;
DELETE FROM tStaff
WHERE name IN ('김한슬', '김한결');
INSERT INTO vStaffHorzCheck
VALUES ('김한결', '영업부', '남', '2023/05/13', '사원', 490, 35);
UPDATE vStaffHorzCheck
SET depart = '기획팀'
WHERE name = '김유신';
INSERT INTO vStaffVirt (name, depart, salary)
VALUES ('이완용', '영업부', 99);
CREATE VIEW vNotExist AS
SELECT *
FROM tNotExist;
-- 에러
CREATE FORCE VIEW vNotExist AS
SELECT *
FROM tNotExist;
-- 가능
CREATE VIEW vStaffReadOnly AS
SELECT *
FROM tStaff
WHERE depart = '인사과' WITH READ ONLY;
CREATE VIEW vMemberEnc WITH ENCRYPTION AS
SELECT member,
    age,
    addr
FROM tMember;
CREATE GLOBAL TEMPORARY TABLE tGtt (name VARCHAR(20) PRIMARY KEY, score INT);
INSERT INTO tGtt
VALUES ('김한슬', 95);
INSERT INTO tGtt
VALUES ('김한결', 80);
SELECT *
FROM tGtt;
DROP TABLE tGtt;
CREATE GLOBAL TEMPORARY TABLE tGtt (name VARCHAR(20) PRIMARY KEY, score INT) ON COMMIT PRESERVE ROWS;
INSERT INTO tGtt
VALUES ('김규민', 70);
SELECT *
FROM tGtt;
CREATE TABLE #tTemp (
name VARCHAR(20) PRIMARY KEY,
score INT
);
INSERT INTO #tTemp VALUES ('김한슬', 95);
INSERT INTO #tTemp VALUES ('김한결', 80);
INSERT INTO #tTemp VALUES ('김규민', 70);
SELECT *
FROM #tTemp;
    CREATE TEMPORARY TABLE tTemp (name VARCHAR(20) PRIMARY KEY, score INT);
INSERT INTO tTemp
VALUES ('김한슬', 95);
INSERT INTO tTemp
VALUES ('김한결', 80);
INSERT INTO tTemp
VALUES ('김규민', 70);
SELECT *
FROM tTemp;
CREATE GLOBAL TEMPORARY TABLE tTaskForce AS
SELECT *
FROM tStaff;
INSERT INTO tTaskForce
SELECT *
FROM (
        SELECT *
        FROM tStaff
        WHERE joindate <= '20160101'
        ORDER BY salary DESC
    )
WHERE rownum <= 10;
MSSQL:
SELECT TOP 10 * INTO #tTaskForce FROM tStaff 
WHERE joindate <= '20160101'
ORDER BY salary DESC;
마리아: CREATE TEMPORARY TABLE tTaskForce AS
SELECT *
FROM tStaff
WHERE joindate <= '20160101'
ORDER BY salary DESC
LIMIT 10;
DELETE FROM tTaskForce
WHERE score < (
        SELECT AVG(score)
        FROM tTaskForce
        WHERE gender = '남'
    )
    AND gender = '남';
DELETE FROM tTaskForce
WHERE salary < (
        SELECT AVG(salary)
        FROM tStaff
    )
    AND gender = '여';
DELETE FROM tTaskForce
WHERE salary > 300
    AND grade = '대리';
INSERT INTO tTaskForce
SELECT *
FROM tStaff
WHERE salary > 380
    AND grade = '과장';
SELECT name,
    salary,
    score
FROM tStaff
WHERE depart = '영업부'
    AND gender = '남';
SELECT *
FROM (
        SELECT name,
            salary,
            score
        FROM tStaff
        WHERE depart = '영업부'
            AND gender = '남'
    ) A
WHERE salary >= (
        SELECT avg(salary)
        FROM (
                SELECT name,
                    salary,
                    score
                FROM tStaff
                WHERE depart = '영업부'
                    AND gender = '남'
            ) B
    );
CREATE GLOBAL TEMPORARY TABLE tBusiMan AS
SELECT name,
    salary,
    score
FROM tStaff;
INSERT INTO tBusiMan
SELECT name,
    salary,
    score
FROM tStaff
WHERE depart = '영업부'
    AND gender = '남';
MSSQL:
SELECT name,
    salary,
    score INTO #tBusiMan FROM tStaff 
WHERE depart = '영업부'
    AND gender = '남';
마리아: CREATE TEMPORARY TABLE tBusiMan AS
SELECT name,
    salary,
    score
FROM tStaff
WHERE depart = '영업부'
    AND gender = '남';
SELECT *
FROM tBusiMan
WHERE salary >= (
        SELECT avg(salary)
        FROM tBusiMan
    );
CREATE VIEW vBusiMan AS
SELECT name,
    salary,
    score
FROM tStaff
WHERE depart = '영업부'
    AND gender = '남';
SELECT *
FROM vBusiMan
WHERE salary >= (
        SELECT avg(salary)
        FROM vBusiMan
    );
WITH tBusiMan AS (
    SELECT name,
        salary,
        score
    FROM tStaff
    WHERE depart = '영업부'
        AND gender = '남'
)
SELECT *
FROM tBusiMan
WHERE salary >= (
        SELECT avg(salary)
        FROM tBusiMan
    );
WITH tBusiMan(이름, 월급, 성취도) AS (
    SELECT name,
        salary,
        score
    FROM tStaff
    WHERE depart = '영업부'
        AND gender = '남'
)
SELECT *
FROM tBusiMan
WHERE 월급 >= (
        SELECT avg(월급)
        FROM tBusiMan
    );
WITH tBusiMan AS (
    SELECT name,
        salary,
        score
    FROM tStaff
    WHERE depart = '영업부'
        AND gender = '남'
),
tBusiGirl AS (
    SELECT name,
        salary,
        score
    FROM tStaff
    WHERE depart = '영업부'
        AND gender = '여'
)
SELECT *
FROM tBusiGirl
WHERE salary >= (
        SELECT avg(salary)
        FROM tBusiMan
    );
WITH tBusiMan AS (
    SELECT name,
        salary,
        score
    FROM tStaff
    WHERE depart = '영업부'
        AND gender = '남'
),
tBusiManGod AS (
    SELECT name,
        salary,
        score
    FROM tBusiMan
    WHERE score > 70
)
SELECT *
FROM tBusiManGod;
WITH Shopping AS (
    SELECT M.member,
        M.addr,
        O.item,
        O.num,
        O.orderDate
    FROM tMember M
        INNER JOIN tOrder O ON M.member = O.member
)
SELECT *
FROM Shopping
WHERE num >= (
        SELECT AVG(num)
        FROM Shopping
    );
CREATE VIEW vTemp AS (
    SELECT M.member,
        M.addr,
        O.item,
        O.num,
        O.orderDate
    FROM tMember M
        INNER JOIN tOrder O ON M.member = O.member
);
SELECT *
FROM vTemp
WHERE num >= (
        SELECT AVG(num)
        FROM vTemp
    );
WITH tFact(num, sum) AS (
    SELECT 1 AS num,
        1 AS sum
    FROM dual
    UNION ALL
    SELECT num + 1,
        sum * (num + 1)
    FROM tFact T
    WHERE T.num < 10
)
SELECT *
FROM tFact;
WITH tTree(id, name, parent, depth) AS (
    SELECT id,
        name,
        parent,
        0
    FROM tDirectory
    WHERE parent = 0
    UNION ALL
    SELECT D.id,
        D.name,
        D.parent,
        T.depth + 1
    FROM tDirectory D
        INNER JOIN tTree T ON D.parent = T.id
)
SELECT *
FROM tTree;
WITH tTree(id, name, parent, depth, fullpath) AS (
    SELECT id,
        name,
        parent,
        0,
        CAST(name AS VARCHAR(256))
    FROM tDirectory
    WHERE parent = 0
    UNION ALL
    SELECT D.id,
        D.name,
        D.parent,
        T.depth + 1,
        CAST(
            CONCAT(CONCAT(T.fullpath, '/'), D.name) AS VARCHAR(256)
        )
    FROM tDirectory D
        INNER JOIN tTree T ON D.parent = T.id
)
SELECT *
FROM tTree;
WITH tTree(id, name, parent, depth, fullpath) AS (
    SELECT id,
        name,
        parent,
        0,
        CAST(name AS VARCHAR(256))
    FROM tDirectory
    WHERE parent = 0
    UNION ALL
    SELECT D.id,
        D.name,
        D.parent,
        T.depth + 1,
        LPAD('L ', (T.depth + 1) * 4) || D.name
    FROM tDirectory D
        INNER JOIN tTree T ON D.parent = T.id
)
SELECT fullpath
FROM tTree;
CAST(
    SPACE((T.depth + 1) * 4) + 'L ' + D.name AS VARCHAR(256)
)