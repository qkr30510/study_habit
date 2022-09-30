SELECT *
FROM tMember,
    tOrder;
SELECT *
FROM tMember M,
    tOrder O
WHERE M.member = O.member;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    M.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    M.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    LEFT OUTER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    O.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    RIGHT OUTER JOIN tOrder O ON M.member = O.member;
SELECT M.addr,
    M.member,
    O.member,
    O.item,
    O.num,
    O.orderDate
FROM tMember M
    FULL OUTER JOIN tOrder O ON M.member = O.member;
SELECT item,
    price
FROM tItem
WHERE item = (
        SELECT item
        FROM tOrder
        WHERE member = '춘향'
    );
SELECT *
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item;
SELECT *
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
WHERE O.member = '춘향';
SELECT *
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
    AND O.member = '춘향';
SELECT O.item,
    I.price
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
WHERE O.member = '춘향';
SELECT O.item,
    I.price,
    O.num
FROM tItem I
    INNER JOIN tOrder O ON O.item = I.item
WHERE O.member = '향단';
SELECT item,
    price,
    num
FROM tItem
WHERE item IN (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
    );
SELECT item,
    price,
    (
        SELECT num
        FROM tOrder O
        WHERE O.item = I.item
    )
FROM tItem I
WHERE item IN (
        SELECT item
        FROM tOrder
        WHERE member = '향단'
    );
SELECT *
FROM tMember;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item;
SELECT *
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item
    INNER JOIN tCategory C ON I.category = C.category;
SELECT M.member,
    O.item,
    O.num,
    O.orderDate,
    I.price,
    C.delivery
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item
    INNER JOIN tCategory C ON I.category = C.category;
SELECT M.member,
    O.item,
    O.num,
    O.orderDate,
    I.price,
    C.delivery
FROM (
        SELECT *
        FROM tMember
        WHERE age > 19
    ) M
    INNER JOIN tOrder O ON M.member = O.member
    INNER JOIN tItem I ON I.item = O.item
    LEFT OUTER JOIN tCategory C ON I.category = C.category
    AND C.category != '성인'
WHERE I.price * O.num > 100000
ORDER BY M.member;
SELECT M.member,
    O.item,
    O.num,
    I.price
FROM tMember M
    INNER JOIN tOrder O ON M.member = O.MEMBER
    INNER JOIN tItem I ON I.item = O.item;
SELECT member,
    num * price AS total,
    item
FROM (
        SELECT M.member,
            O.item,
            O.num,
            I.price
        FROM tMember M
            INNER JOIN tOrder O ON M.member = O.MEMBER
            INNER JOIN tItem I ON I.item = O.item
    ) A;
SELECT *
FROM (
        SELECT M.member,
            M.addr,
            O.item,
            O.num,
            O.orderDate,
            I.price,
            C.delivery
        FROM (
                SELECT *
                FROM tMember
                WHERE age > 19
            ) M
            INNER JOIN tOrder O ON M.member = O.member
            INNER JOIN tItem I ON I.item = O.item
            LEFT OUTER JOIN tCategory C ON I.category = C.category
            AND C.category != '성인'
        WHERE I.price * O.num > 100000
    ) A