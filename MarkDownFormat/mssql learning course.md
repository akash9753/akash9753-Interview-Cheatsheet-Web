# SQL Course Notes

## Course Topics Overview

### 1. SQL and Database Fundamentals

- What is data, database, DBMS, and RDBMS
- SQL vs T-SQL vs SQL Server
- Relational database concepts
- Tables, rows, columns, and schemas
- SQL Server installation and tools

### 2. Data Definition Language (DDL)

- CREATE DATABASE
- CREATE TABLE
- ALTER TABLE
- DROP TABLE
- TRUNCATE TABLE
- Schema design basics

### 3. Data Types

- Numeric data types
- String data types
- Date and time data types
- Boolean/bit data type
- Choosing the correct data type

### 4. Constraints and Keys

- PRIMARY KEY
- FOREIGN KEY
- UNIQUE
- NOT NULL
- DEFAULT
- CHECK
- IDENTITY

### 5. Data Manipulation Language (DML)

- INSERT
- SELECT
- UPDATE
- DELETE
- MERGE

### 6. Basic Querying

- WHERE Clause
- DISTINCT
- ORDER BY
- TOP
- LIKE
- Logical Operators
- IN, NOT IN
- BETWEEN
- IS NULL
- CASE

### 7. Aggregate and Grouping Queries

- COUNT, SUM, AVG, MIN, MAX
- GROUP BY
- HAVING Clause
- GROUP BY ROLLUP

### 8. Joins and Relationships

- One-to-One relationship
- One-to-Many relationship
- Many-to-Many relationship
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN
- CROSS JOIN
- SELF JOIN

### 9. Subqueries and CTEs

- Single-row subquery
- Multiple-row subquery
- Correlated subquery
- Inline view subquery
- Common Table Expressions (CTE)

### 10. SQL Functions

- String functions
- Date functions
- Aggregate functions
- Conversion functions
- User-defined functions

### 11. Set Operators

- UNION
- UNION ALL
- EXCEPT
- INTERSECT

### 12. Views and Window Functions

- Views
- ROW_NUMBER
- RANK
- DENSE_RANK
- LAG and LEAD
- FIRST_VALUE and LAST_VALUE
- NTILE

### 13. Stored Procedures and Programmability

- Stored procedures
- Input parameters
- Output parameters
- Procedural logic
- Scalar functions
- Table-valued functions
- Triggers

### 14. Transactions and Error Handling

- Transactions
- COMMIT
- ROLLBACK
- TRY...CATCH
- ACID properties

### 15. Normalization and Database Design

- Normalization
- Data redundancy
- Relationship design
- Practical database design

### 16. Indexes and Performance Tuning

- Clustered indexes
- Non-clustered indexes
- Composite indexes
- Query statistics
- Execution performance

### 17. Database Administration Basics

- Import and export data
- Backup and restore basics
- System databases
- Generate test data
- Database maintenance

### 18. Advanced SQL Server Topics

- APPLY operators
- Dynamic SQL
- Temporary tables
- Import data from CSV
- Indexes

## 1. SQL and Database Fundamentals

### What is Data?

- Data is raw information stored in a database.
- Example: student name, employee salary, order amount, city, email.

### What is a Database?

- A database is an organized collection of data.
- It helps store, manage, retrieve, and update data easily.

### What is DBMS?

- DBMS stands for Database Management System.
- It is software used to create, manage, and control databases.

### What is RDBMS?

- RDBMS stands for Relational Database Management System.
- It stores data in tables with rows and columns.
- Tables can be connected using relationships like primary key and foreign key.

### SQL vs T-SQL vs SQL Server

| Term | What it is | Simple meaning | Example |
| --- | --- | --- | --- |
| **SQL** | Query language | Standard language used to work with relational databases | `SELECT * FROM Employees;` |
| **T-SQL** | Microsoft's extended version of SQL | SQL + extra features added by Microsoft | `DECLARE`, `IF ELSE`, `TRY CATCH`, Stored Procedures |
| **SQL Server** | Database software/product | Microsoft database system where SQL/T-SQL runs | Microsoft SQL Server, SSMS |

### Basic Database Structure

- Table: stores data in rows and columns.
- Row: one record in a table.
- Column: one field or attribute in a table.
- Schema: logical container for database objects.

| Question | Answer |
| --- | --- |
| What is the difference between DBMS and RDBMS? | DBMS stores data in files; RDBMS stores data in related tables with keys and relationships |
| SQL vs T-SQL? | SQL is the ANSI standard; T-SQL is Microsoft's extension with variables, procedures, TRY/CATCH |
| What is a schema? | Logical namespace that groups tables, views, and other objects (e.g. `dbo.Employees`) |
| What is a row vs a column? | Row = one record; column = one attribute/field for all rows |
| What is SQL Server vs SSMS? | SQL Server is the database engine; SSMS is the management GUI tool |
| Why use a relational database? | Structured storage, data integrity via keys, efficient querying with SQL, ACID transactions |

**Must-know points:**
- RDBMS stores data in **tables** linked by primary/foreign keys
- T-SQL adds procedural features (`DECLARE`, `IF`, stored procedures) on top of standard SQL
- A **schema** organizes objects and controls access (`dbo` is the default schema)
- SQL is declarative — you describe *what* data you want, not *how* to fetch it
- SQL Server is one RDBMS product; PostgreSQL, MySQL, and Oracle are others

## 2. Data Definition Language (DDL)

### Database Queries

List Down Existing Databases

```sql
EXEC sp_databases;
SELECT name FROM sys.databases;
```

#### Create a Database

```sql
CREATE DATABASE school_db;
CREATE DATABASE demo;
```

#### Select a Database

```sql
USE school_db;
SELECT DB_NAME();
```

#### Delete or Drop a Database

```sql
DROP DATABASE demo;
```

### Table Queries

#### Create a Table

```sql
CREATE TABLE students (
    student_id INT,
    name VARCHAR(100),
    age INT,
    grade INT
);
```

#### Check Existing Table

```sql
EXEC sp_help 'students';
```

### ALTER Queries

#### Select Data

```sql
SELECT * FROM employees;
```

#### Add Column

```sql
ALTER TABLE employees ADD phone VARCHAR(15);
```

#### Drop Column

```sql
ALTER TABLE employees DROP COLUMN phone;
```

#### Check Table Details

```sql
EXEC sp_help 'employees';
```

#### Alter Column

```sql
ALTER TABLE employees ALTER COLUMN lname VARCHAR(100) NOT NULL;
ALTER TABLE employees ALTER COLUMN email VARCHAR(100) NOT NULL;
```

#### Rename Column

```sql
EXEC sp_rename 'employees.fname', 'first_name', 'column';
```

#### Rename Table

```sql
EXEC sp_rename 'employees', 'staff';
```

#### Add or Drop Constraints

#### Set Default Value to a Column

```sql
ALTER TABLE employees
ADD CONSTRAINT default_dept DEFAULT 'Trainee'
FOR department;
```

#### Add Unique Constraint

```sql
ALTER TABLE employees
ADD UNIQUE (department);
```

#### CHECK Constraint

```sql
CREATE TABLE emp (
    name VARCHAR(50),
    salary DECIMAL(10,2) CHECK (salary > 0)
);
```

#### Named Constraint

```sql
CREATE TABLE contacts (
    name VARCHAR(50),
    salary DECIMAL(10,2),
    CONSTRAINT chk_emp_positive_salary CHECK (salary > 0)
);

ALTER TABLE employees
ADD CONSTRAINT chk_emp_positive_salary CHECK (salary > 0);

ALTER TABLE employees
ADD CONSTRAINT chk_valid_email CHECK (email LIKE '%@%.%');
```

#### Drop Constraint

```sql
ALTER TABLE employees
DROP CONSTRAINT chk_emp_positive_sal;
```

| Question | Answer |
| --- | --- |
| What is DDL? | Data Definition Language — commands that define/modify database structure (`CREATE`, `ALTER`, `DROP`) |
| CREATE vs ALTER vs DROP? | CREATE adds new objects; ALTER modifies existing; DROP removes objects permanently |
| TRUNCATE vs DELETE? | TRUNCATE removes all rows fast (no row-by-row log); DELETE removes specific rows and can be rolled back |
| DROP TABLE vs TRUNCATE TABLE? | DROP removes the table structure; TRUNCATE empties data but keeps the table |
| How to rename a column in SQL Server? | `EXEC sp_rename 'table.old_name', 'new_name', 'column'` — not standard SQL |
| What does `USE database` do? | Sets the current database context for subsequent commands |

**Must-know points:**
- DDL changes are often **auto-committed** — cannot roll back in many engines without explicit transactions
- `ALTER TABLE ADD` is non-destructive; `DROP COLUMN` may fail if constraints depend on it
- `TRUNCATE` resets IDENTITY seed; `DELETE` does not
- Always back up before `DROP DATABASE` or `DROP TABLE` in production
- `sp_help` and `INFORMATION_SCHEMA` views are useful for inspecting object metadata

## 3. Data Types

### Datatypes

- Numeric: INT, BIGINT, FLOAT, DECIMAL, NUMERIC
- String: VARCHAR, CHAR
- Date: DATE
- Date Time: DATETIME
- Boolean: BIT(0/1)

| Question | Answer |
| --- | --- |
| VARCHAR vs CHAR? | VARCHAR is variable-length; CHAR is fixed-length, padded with spaces |
| DECIMAL vs FLOAT? | DECIMAL is exact (money); FLOAT is approximate (scientific) — use DECIMAL for financial data |
| INT vs BIGINT? | INT = 4 bytes (~2.1B max); BIGINT = 8 bytes for very large counters |
| DATETIME vs DATE? | DATETIME stores date + time; DATE stores only the date portion |
| What is BIT? | SQL Server's boolean type — stores 0, 1, or NULL |
| Why choose the smallest correct type? | Saves storage, improves index size, and can speed up comparisons and joins |

**Must-know points:**
- Pick the **smallest type** that fits the data — oversized columns waste memory and index space
- Use `DECIMAL(p,s)` or `NUMERIC` for money — never `FLOAT` for currency
- `VARCHAR(n)` caps length; `VARCHAR(MAX)` for large text (has performance implications)
- `NVARCHAR` stores Unicode (2 bytes/char); `VARCHAR` is single-byte (ASCII)
- Implicit conversions between incompatible types can cause **index scans** and wrong results

## 4. Constraints and Keys

### Constraints

- PRIMARY KEY
- NOT NULL
- DEFAULT
- IDENTITY auto increment
- UNIQUE

### Key Column vs Non-Key Column

| Type | Meaning | Example |
| --- | --- | --- |
| **Key column** | Column used to uniquely identify a record or create relationship | `EmployeeId`, `DepartmentId` |
| **Non-key column** | Normal data column, not used for uniqueness or relationship | `Name`, `Salary`, `City` |

### Composite Key

A composite key is a primary key made using two or more columns.

Use it when one column alone cannot uniquely identify a row, but a combination of columns can.

Example:

```sql
CREATE TABLE Enrollment (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);
```

In this example:

- `student_id` alone is not unique because one student can enroll in many courses.
- `course_id` alone is not unique because one course can have many students.
- `student_id + course_id` together uniquely identify each enrollment row.

### Employee Table Task

#### Create Employees Table

```sql
CREATE TABLE employees (
    emp_id INT IDENTITY(101,1) PRIMARY KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    job_title VARCHAR(50) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10,2) DEFAULT 30000.00,
    hire_date DATE NOT NULL DEFAULT CONVERT(DATE, GETDATE()),
    city VARCHAR(50)
);

EXEC sp_help 'employees';
```

#### Important Keywords

| Keyword | Meaning |
| --- | --- |
| IDENTITY(101,1) | Auto-generates number automatically |
| PRIMARY KEY | Makes column unique and not null |

#### Insert Employee Data

```sql
INSERT INTO employees
(fname, lname, email, job_title, department, salary, hire_date, city)
VALUES
('Aarav', 'Sharma', 'aarav.sharma@example.com', 'Director', 'Management', 180000, '2019-02-10', 'Mumbai'),
('Diya', 'Patel', 'diya.patel@example.com', 'Lead Engineer', 'Tech', 120000, '2020-08-15', 'Bengaluru'),
('Rohan', 'Mehra', 'rohan.mehra@example.com', 'Software Engineer', 'Tech', 85000, '2022-05-20', 'Bengaluru'),
('Priya', 'Singh', 'priya.singh@example.com', 'HR Manager', 'Human Resources', 95000, '2019-11-05', 'Mumbai'),
('Arjun', 'Kumar', 'arjun.kumar@example.com', 'Data Scientist', 'Tech', 110000, '2021-07-12', 'Hyderabad'),
('Ananya', 'Gupta', 'ananya.gupta@example.com', 'Marketing Lead', 'Marketing', 90000, '2020-03-01', 'Delhi'),
('Vikram', 'Reddy', 'vikram.reddy@example.com', 'Sales Executive', 'Sales', 75000, '2023-01-30', 'Mumbai'),
('Sameera', 'Rao', 'sameera.rao@example.com', 'Software Engineer', 'Tech', 88000, '2023-06-25', 'Pune'),
('Ishaan', 'Verma', 'ishaan.verma@example.com', 'Recruiter', 'Human Resources', 65000, '2022-09-01', 'Mumbai'),
('Kavya', 'Joshi', 'kavya.joshi@example.com', 'Product Designer', 'Design', 92000, '2021-04-18', 'Bengaluru'),
('Zain', 'Khan', 'zain.khan@example.com', 'Sales Manager', 'Sales', 115000, '2019-09-14', 'Delhi'),
('Nisha', 'Desai', 'nisha.desai@example.com', 'Jr. Data Analyst', 'Tech', 70000, '2024-02-01', 'Hyderabad'),
('Aditya', 'Nair', 'aditya.nair@example.com', 'Marketing Analyst', 'Marketing', 68000, '2022-10-10', 'Delhi'),
('Fatima', 'Ali', 'fatima.ali@example.com', 'Sales Executive', 'Sales', 78000, '2022-11-22', 'Mumbai'),
('Kabir', 'Shah', 'kabir.shah@example.com', 'DevOps Engineer', 'Tech', 105000, '2020-12-01', 'Pune');
```

#### Read Employee Data

```sql
SELECT * FROM employees;
```

| Question | Answer |
| --- | --- |
| PRIMARY KEY vs UNIQUE? | Both enforce uniqueness; PK cannot be NULL, only one per table, and is the main row identifier |
| What is a FOREIGN KEY? | Column referencing another table's PK — enforces referential integrity |
| What is IDENTITY? | Auto-incrementing integer column — `IDENTITY(seed, increment)` |
| What is a composite key? | Primary key made of two or more columns when no single column is unique |
| CHECK constraint purpose? | Validates data on insert/update (e.g. `salary > 0`) |
| DEFAULT constraint purpose? | Supplies a value when INSERT omits that column |

**Must-know points:**
- Every table should have a **PRIMARY KEY** for reliable row identification
- FK prevents orphan rows — child cannot reference a non-existent parent
- `NOT NULL` + `UNIQUE` ≠ PRIMARY KEY — PK is the chosen unique identifier
- `IDENTITY` columns are read-only on insert unless `SET IDENTITY_INSERT ON`
- Composite keys are common in junction tables (many-to-many)

## 5. Data Manipulation Language (DML)

### CRUD Operations

#### Create / Insert Data

```sql
INSERT INTO students (student_id, name, age, grade)
VALUES (101, 'raju', 10, 5);

INSERT INTO students (student_id, name, age, grade)
VALUES
    (102, 'sham', 12, 7),
    (103, 'baburao', 41, 9);
```

#### Read Data

```sql
SELECT * FROM students;
SELECT age FROM students;
SELECT * FROM students WHERE student_id = 102;
SELECT age FROM students WHERE student_id = 102;
```

#### Update Data

```sql
UPDATE students
SET grade = 12
WHERE student_id = 103;
```

#### Delete Data

```sql
DELETE FROM students
WHERE student_id IN (101, 102);
```

#### Truncate Data

```sql
TRUNCATE TABLE students;
```

| Question | Answer |
| --- | --- |
| What is DML? | Data Manipulation Language — `INSERT`, `SELECT`, `UPDATE`, `DELETE`, `MERGE` |
| INSERT with explicit columns vs `INSERT ... SELECT`? | Explicit lists target columns; `SELECT` copies rows from another query/table |
| UPDATE without WHERE? | Updates **every row** in the table — dangerous in production |
| DELETE vs TRUNCATE? | DELETE is row-level, logged, supports WHERE; TRUNCATE is fast, all-or-nothing, resets identity |
| What is MERGE? | Upsert — inserts new rows and updates existing in one statement based on a match condition |
| Can you roll back DELETE? | Yes, inside an explicit transaction with `BEGIN TRAN` / `COMMIT` / `ROLLBACK` |

**Must-know points:**
- Always use **WHERE** on UPDATE and DELETE unless you intend to affect all rows
- `TRUNCATE` cannot be used if FK references exist (unless specific conditions met)
- `INSERT` column list order must match `VALUES` order
- `MERGE` is powerful but complex — test carefully for unintended updates
- DML changes data; DDL changes structure — know which you're running

## 6. Basic Querying

### SQL Clauses

#### WHERE Clause

```sql
SELECT * FROM employees
WHERE department != 'sales'
  AND city != 'pune'
  AND city != 'Mumbai';

SELECT * FROM employees WHERE salary > 100000;
SELECT * FROM employees WHERE hire_date > '2020-12-31';
```

#### Relational Operators

- `<`
- `>`
- `<=`
- `>=`
- `=`
- `!=`

#### DISTINCT

```sql
SELECT DISTINCT department FROM employees;
SELECT COUNT(DISTINCT department) FROM employees;
```

#### ORDER BY

```sql
SELECT * FROM employees ORDER BY salary;
SELECT * FROM employees ORDER BY salary DESC;
SELECT department, fname FROM employees ORDER BY department, fname;
```

#### LIKE

```sql
SELECT * FROM employees WHERE department LIKE '%man%';
SELECT * FROM employees WHERE fname LIKE 'a%';
SELECT * FROM employees WHERE fname LIKE '%a';
SELECT * FROM employees WHERE fname LIKE '[ABCDE]%';
SELECT * FROM employees WHERE fname LIKE '_a%';
SELECT * FROM employees WHERE fname LIKE '____';
```

#### TOP

```sql
SELECT TOP 3 * FROM employees ORDER BY salary DESC;
```

#### Logical Operators: AND / OR

```sql
SELECT * FROM employees
WHERE salary = 75000 AND department = 'sales';

SELECT * FROM employees
WHERE salary = 75000 OR department = 'sales';
```

#### IN / NOT IN / BETWEEN

```sql
SELECT * FROM employees
WHERE department NOT IN ('Tech', 'Sales', 'Management');

SELECT * FROM employees
WHERE salary BETWEEN 75000 AND 100000;
```

#### CASE

```sql
SELECT
    fname,
    lname,
    salary,
    CASE
        WHEN salary > 100000 THEN 'High Earner'
        WHEN salary >= 80000 AND salary <= 100000 THEN 'Medium Earner'
        ELSE 'Standard Earner'
    END AS salary_band
FROM employees;

SELECT
    fname,
    lname,
    department,
    salary,
    CASE
        WHEN department IN ('Sales', 'Marketing') THEN salary * 0.10
        WHEN department = 'Tech' THEN salary * 0.12
        ELSE salary * 0.05
    END AS bonus
FROM employees;
```

#### IS NULL

```sql
SELECT *
FROM employees
WHERE fname IS NULL;
```

#### NOT LIKE

| Question | Answer |
| --- | --- |
| DISTINCT purpose? | Removes duplicate rows from the result set |
| LIKE wildcards? | `%` = any string; `_` = single char; `[ABC]` = char class; `[^ABC]` = not in class |
| TOP vs OFFSET/FETCH? | `TOP n` returns first n rows; `OFFSET/FETCH` supports pagination with `ORDER BY` |
| IS NULL vs = NULL? | `= NULL` is always unknown/false — use `IS NULL` or `IS NOT NULL` |
| AND vs OR precedence? | AND binds tighter than OR — use parentheses to clarify intent |
| CASE expression types? | Simple `CASE col WHEN val` or searched `CASE WHEN condition` — both return a value |

**Must-know points:**
- SQL logical order for basic queries: `FROM` → `WHERE` → `SELECT` → `ORDER BY`
- `NULL` comparisons need `IS NULL` — three-valued logic (TRUE, FALSE, UNKNOWN)
- `ORDER BY` without `TOP`/`OFFSET` on large tables can be expensive
- `LIKE '%text'` (leading wildcard) prevents index use on that column
- `CASE` is an expression — can appear in `SELECT`, `WHERE`, `ORDER BY`

## 7. Aggregate and Grouping Queries

### Aggregate Functions

- COUNT
- SUM
- AVG
- MIN
- MAX

```sql
SELECT COUNT(emp_id) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT SUM(salary) FROM employees;
```

#### GROUP BY

```sql
SELECT department FROM employees GROUP BY department;

SELECT department, COUNT(emp_id) AS Count
FROM employees
GROUP BY department;

SELECT department, SUM(salary) AS Count
FROM employees
GROUP BY department;
```

#### Rules of GROUP BY

1. GROUP BY is used to group same values.
2. GROUP BY is mostly used with aggregate functions:
   - COUNT()
   - SUM()
   - AVG()
   - MIN()
   - MAX()
3. When GROUP BY is used, SELECT can contain only:
   - GROUP BY columns
   - Aggregate functions
4. You cannot use SELECT * with GROUP BY.
5. Every non-aggregate column in SELECT must be present in GROUP BY.
6. WHERE is used before GROUP BY.
7. HAVING is used after GROUP BY.
8. WHERE filters rows before grouping.
9. HAVING filters groups after grouping.
10. ORDER BY comes after GROUP BY and HAVING.
11. Correct order:

```sql
SELECT
FROM
JOIN ON
WHERE
GROUP BY
HAVING
ORDER BY
```

Example:

```sql
SELECT customer_id, COUNT(order_id)
FROM Orders
GROUP BY customer_id;
```

Wrong:

```sql
SELECT customer_id, order_date, COUNT(order_id)
FROM Orders
GROUP BY customer_id;
```

Why wrong:

- order_date is not inside GROUP BY.
- order_date is not inside an aggregate function.

Correct:

```sql
SELECT customer_id, MAX(order_date), COUNT(order_id)
FROM Orders
GROUP BY customer_id;
```

#### Multi-Column Grouping

```sql
SELECT department FROM employees GROUP BY department;

SELECT department, city
FROM employees
GROUP BY department, city;

SELECT department, city, COUNT(emp_id) AS count
FROM employees
GROUP BY department, city
ORDER BY department;
```

#### HAVING Clause

#### Use Cases

- Find Departments with More Than 2 Employees
- Find Job Titles with an Average Salary Above 90000
- Find department with Total Salary Above 300000

#### WHERE vs HAVING

- WHERE: to filter individual rows
- HAVING: to filter group/aggregate result
- WHERE works with GROUP BY, but only for filtering rows before grouping.
- WHERE does not work when you want to filter aggregate result like COUNT, SUM, AVG.

```sql
SELECT department, COUNT(emp_id) AS count
FROM employees
GROUP BY department
HAVING COUNT(emp_id) > 2;

SELECT job_title
FROM employees
GROUP BY job_title;

SELECT job_title, AVG(salary)
FROM employees
GROUP BY job_title
HAVING AVG(salary) > 90000;

SELECT department, SUM(salary) AS total
FROM employees
GROUP BY department
HAVING SUM(salary) > 200000;
```

#### GROUP BY ROLLUP

- GROUP BY ROLLUP is an extension of the GROUP BY clause.
- It generates subtotals and a grand total for a set of columns.

| Question | Answer |
| --- | --- |
| COUNT(*) vs COUNT(column)? | `COUNT(*)` counts all rows; `COUNT(col)` ignores NULLs in that column |
| Why can't SELECT * with GROUP BY? | Non-aggregated columns must be in GROUP BY — `*` includes columns not grouped |
| WHERE vs HAVING? | WHERE filters rows before grouping; HAVING filters groups using aggregate conditions |
| What does GROUP BY ROLLUP do? | Adds subtotal and grand total rows for grouped columns |
| AVG with NULLs? | NULL values are excluded from average calculation |
| Multi-column GROUP BY? | Groups by unique combinations — `(dept, city)` treats each pair as one group |

**Must-know points:**
- Every non-aggregate column in `SELECT` **must** appear in `GROUP BY`
- Use `HAVING COUNT(*) > 2`, not `WHERE COUNT(*) > 2` — aggregates belong in HAVING
- `COUNT(DISTINCT col)` counts unique non-NULL values
- `ROLLUP` is useful for report-style subtotals without separate queries
- Wrong GROUP BY is a top interview trap — know the partial dependency rule

## 8. Joins and Relationships

### Relationship

#### Problems Without Relationship

- Data Redundancy or Duplication
- What if I want to add a Finance department and its related details?
- What if Kayva leaves the company which was only one in Design department?
- What if there is a typo in department column?

```sql
SELECT * FROM employees;
```

#### Types of Relationship

##### One-to-One

- 1 employee, 1 account

##### One-to-Many

- 1 department, many employees
- 1 employee, multiple tasks

##### Many-to-Many

- Book and author
- 1 book, multiple authors
- 1 author, multiple books
- 1 employee, multiple projects
- 1 project, multiple employees

### Store Database

#### Create Database

```sql
CREATE DATABASE store_db;
USE store_db;
```

#### Create Customers Table

```sql
CREATE TABLE Customers (
    customer_id INT IDENTITY(100,1) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);
```

#### Create Orders Table

```sql
CREATE TABLE Orders (
    order_id INT IDENTITY(500,1) PRIMARY KEY,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

EXEC sp_help Orders;
```

#### Insert Customers

```sql
INSERT INTO Customers (customer_name, email)
VALUES
('Raju', 'raju@example.com'),
('Sham', 'sham@example.com'),
('Baburao', 'baburao@example.com');
```

#### Insert Orders

```sql
INSERT INTO Orders (order_date, total_amount, customer_id)
VALUES
('2025-09-15', 1500.00, 100),
('2025-09-28', 800.00, 101),
('2025-10-05', 2200.00, 100),
('2025-10-12', 500.00, 102),
('2025-10-17', 1200.00, 101);
```

#### Read Customers and Orders

```sql
SELECT * FROM Customers;
SELECT * FROM Orders;
```

#### Temporary Orders Table

```sql
SELECT
    order_id,
    CONVERT(VARCHAR(11), order_date, 106) AS order_date,
    total_amount,
    customer_id
INTO #TempOrders
FROM Orders;

SELECT * FROM #TempOrders;
```

#### Insert Customer and Order Without Customer ID

```sql
INSERT INTO customers (customer_name, email)
VALUES ('Paul', 'paul@example.com');

INSERT INTO orders (order_date, total_amount)
VALUES ('2025-10-18', '3500');
```

#### Cascade on Delete

```sql
CREATE TABLE orderss (
    ord_id INT IDENTITY(1,1) PRIMARY KEY,
    date DATE,
    amount DECIMAL(10, 2),
    cust_id INT,
    FOREIGN KEY (customerr_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);
```

### Joins

#### Types of Join

- Cross Join
- Inner Join
- Left Join
- Right Join
- Full Outer Join

#### CROSS JOIN

- Every row from one table is combined with every row from another table.

```sql
SELECT ...
FROM table1 t1
CROSS JOIN table2 t2;
```

#### INNER JOIN

- Returns only the rows where there is a match between specified columns in both tables.

```sql
SELECT ...
FROM table1 t1
INNER JOIN table2 t2
ON t1.common_column = t2.common_column;

SELECT *
FROM Customers
INNER JOIN Orders
ON Customers.customer_id = Orders.customer_id;

SELECT c.customer_name, COUNT(o.order_id), SUM(o.total_amount)
FROM customers c
INNER JOIN orders o
ON c.customer_id = o.customer_id
GROUP BY c.customer_name;
```

#### Practical INNER JOIN Example

```sql
CREATE DATABASE test;
GO

USE test;
GO

CREATE TABLE Customers
(
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);
GO

CREATE TABLE Orders
(
    order_id INT PRIMARY KEY,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    customer_id INT NULL,

    CONSTRAINT FK_Orders_Customers
    FOREIGN KEY (customer_id)
    REFERENCES Customers(customer_id)
);
GO

INSERT INTO Customers (customer_id, customer_name, email)
VALUES
(100, 'Raju', 'raju@example.com'),
(101, 'Sham', 'sham@example.com'),
(102, 'Baburao', 'baburao@example.com'),
(103, 'Paul', 'paul@example.com');
GO

INSERT INTO Orders (order_id, order_date, total_amount, customer_id)
VALUES
(500, '2025-09-15', 1500.00, 100),
(501, '2025-09-28', 800.00, 101),
(502, '2025-10-05', 2200.00, 100),
(503, '2025-10-12', 500.00, 102),
(504, '2025-10-17', 1200.00, 101),
(505, '2025-10-18', 3500.00, NULL);
GO

-- Customers is the left table.
-- Orders is the right table.
SELECT *
FROM Customers c
INNER JOIN Orders o
    ON c.customer_id = o.customer_id;

SELECT
    c.customer_id,
    c.customer_name,
    COUNT(o.order_id) AS TotalOrders,
    SUM(o.total_amount) AS TotalAmount
FROM Customers c
INNER JOIN Orders o
    ON c.customer_id = o.customer_id
WHERE o.total_amount > 500
GROUP BY c.customer_id, c.customer_name
HAVING COUNT(o.order_id) > 1
ORDER BY TotalAmount DESC;
```

#### LEFT JOIN

- Returns all rows from the left table and matching rows from the right table.

```sql
SELECT ...
FROM table1 t1
LEFT JOIN table2 t2
ON t1.common_column = t2.common_column;

SELECT *
FROM Customers
LEFT JOIN Orders
ON Customers.customer_id = Orders.customer_id;

SELECT *
FROM Orders
LEFT JOIN Customers
ON Customers.customer_id = Orders.customer_id;

SELECT c.customer_name, COUNT(o.order_id), SUM(o.total_amount)
FROM customers c
LEFT JOIN orders o
ON c.customer_id = o.customer_id
GROUP BY c.customer_name;
```

Practical meaning:

- `Customers` is the left table.
- `Orders` is the right table.
- All customers are returned.
- If a customer has no order, order columns show `NULL`.

```sql
SELECT *
FROM Customers
LEFT JOIN Orders
ON Customers.customer_id = Orders.customer_id;

SELECT
    c.customer_name,
    COUNT(o.order_id) AS TotalOrders,
    SUM(o.total_amount) AS TotalAmount
FROM Customers c
LEFT JOIN Orders o
ON c.customer_id = o.customer_id
GROUP BY c.customer_name;
```

#### RIGHT JOIN

- Returns all rows from the right table and matching rows from the left table.

```sql
SELECT ...
FROM table1 t1
RIGHT JOIN table2 t2
ON t1.common_column = t2.common_column;

SELECT *
FROM Customers
RIGHT JOIN Orders
ON Customers.customer_id = Orders.customer_id;
```

Practical meaning:

- `Customers` is the left table.
- `Orders` is the right table.
- All orders are returned.
- If an order has no matching customer, customer columns show `NULL`.

```sql
SELECT *
FROM Customers
RIGHT JOIN Orders
ON Customers.customer_id = Orders.customer_id;
```

#### FULL OUTER JOIN

- Returns all rows when there is a match in either the left or right table.

```sql
SELECT ...
FROM table1 t1
FULL OUTER JOIN table2 t2
ON t1.common_column = t2.common_column;

SELECT *
FROM Customers
FULL OUTER JOIN Orders
ON Customers.customer_id = Orders.customer_id;
```

Practical meaning:

- Returns all matching and non-matching rows from both tables.
- Customers without orders are shown.
- Orders without customers are also shown.
- In the sample data, `Paul` appears with `NULL` order columns.
- The order with `customer_id = NULL` appears with `NULL` customer columns.

```sql
SELECT *
FROM Customers
FULL OUTER JOIN Orders
ON Customers.customer_id = Orders.customer_id;
```

#### OUTER APPLY

- `OUTER APPLY` is used to join each row from one table, the left table, to the result of a table-valued function or subquery on the right side.
- Use case: For each customer, show their most recent order if they have one.
- If they have no orders, still show the customer.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.order_date,
    o.total_amount
FROM Customers AS c
OUTER APPLY (
    SELECT TOP 1 *
    FROM Orders AS o
    WHERE o.customer_id = c.customer_id
    ORDER BY o.order_date DESC
) AS o;
```

#### CROSS APPLY

- `CROSS APPLY` is used to join each row from one table, the left table, to the result of a table-valued function or subquery on the right side.
- It behaves like an `INNER JOIN`, meaning it only returns rows where the right-side subquery produces a result.

```sql
SELECT
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.order_date,
    o.total_amount
FROM Customers AS c
CROSS APPLY (
    SELECT TOP 1 *
    FROM Orders AS o
    WHERE o.customer_id = c.customer_id
    ORDER BY o.order_date DESC
) AS o;
```

#### Self Join

- A self join is a standard SQL join where a table is joined to itself.
- It is used when rows in a table are related to other rows in the same table.

Use case:

- Employee and manager hierarchy.
- The employee and manager both exist in the same table.

```sql
CREATE TABLE CompanyHierarchy (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    ManagerID INT
);

INSERT INTO CompanyHierarchy (EmployeeID, Name, ManagerID)
VALUES
(1, 'Sonia Verma', NULL), -- The CEO
(2, 'Rohan Gupta', 1),    -- Reports to Sonia
(3, 'Amit Sharma', 2),    -- Reports to Rohan
(4, 'Priya Singh', 1),    -- Reports to Sonia
(5, 'Kabir Shah', 2);     -- Reports to Rohan
```

#### Employee Manager Self Join

```sql
SELECT
    e.Name AS employee_name,
    m.Name AS manager_name
FROM CompanyHierarchy e
LEFT JOIN CompanyHierarchy m
ON e.ManagerID = m.EmployeeID;
```

Result:

| employee_name | manager_name |
| --- | --- |
| Sonia Verma | NULL |
| Rohan Gupta | Sonia Verma |
| Amit Sharma | Rohan Gupta |
| Priya Singh | Sonia Verma |
| Kabir Shah | Rohan Gupta |

#### Many-to-Many

A many-to-many relationship happens when many records in one table can relate to many records in another table.

Example:

- One student can enroll in many courses.
- One course can have many students.

To handle this, we use a junction table.

#### Junction Table Example

Tables:

- `students`: stores student details.
- `courses`: stores course details.
- `enrollment`: junction table that connects students and courses.

```sql
CREATE DATABASE institute;
USE institute;

CREATE TABLE courses (
    course_id INT IDENTITY(1,1) PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    course_fee NUMERIC(10, 2) NOT NULL
);

INSERT INTO courses (course_name, course_fee)
VALUES
('Mathematics', 500.00),
('Physics', 600.00),
('Chemistry', 700.00);

CREATE TABLE students (
    student_id INT IDENTITY(1,1) PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL
);

INSERT INTO students (student_name)
VALUES
('Raju'),
('Sham'),
('Baburao'),
('Alex');

CREATE TABLE enrollment (
    enrollment_id INT IDENTITY(1,1) PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE NOT NULL,

    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

INSERT INTO enrollment (student_id, course_id, enrollment_date)
VALUES
(1, 1, '2025-01-01'), -- Raju enrolled in Mathematics
(1, 2, '2025-01-15'), -- Raju enrolled in Physics
(2, 1, '2025-02-01'), -- Sham enrolled in Mathematics
(2, 3, '2025-02-15'), -- Sham enrolled in Chemistry
(3, 3, '2025-03-25'); -- Baburao enrolled in Chemistry
```

#### Read Many-to-Many Data

```sql
SELECT *
FROM enrollment e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id;
```

#### Count Students Per Course

```sql
SELECT
    c.course_name,
    COUNT(s.student_id) AS student_count,
    SUM(c.course_fee) AS total_fee
FROM enrollment e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id
GROUP BY c.course_name;
```

Result:

| course_name | student_count | total_fee |
| --- | --- | --- |
| Chemistry | 2 | 1400.00 |
| Mathematics | 2 | 1000.00 |
| Physics | 1 | 600.00 |

| Question | Answer |
| --- | --- |
| INNER JOIN vs LEFT JOIN? | INNER returns only matching rows; LEFT returns all left rows + matches (NULLs on right if no match) |
| When to use FULL OUTER JOIN? | When you need all rows from both tables — matches and non-matches from either side |
| CROSS JOIN use case? | Cartesian product — every row paired with every row (e.g. generate combinations) |
| What is a self join? | Joining a table to itself — common for employee/manager hierarchies |
| How to model many-to-many? | Junction/bridge table with FKs to both parent tables |
| CROSS APPLY vs OUTER APPLY? | CROSS APPLY = inner join to subquery/TVF; OUTER APPLY = left join — keeps left rows even if subquery returns nothing |

**Must-know points:**
- **INNER JOIN** is the default for matched data only; use **LEFT JOIN** to include unmatched parent rows
- Always specify join condition with `ON` — missing `ON` on old-style joins causes Cartesian products
- Many-to-many requires a **junction table** with composite or surrogate PK
- `ON DELETE CASCADE` auto-deletes child rows when parent is deleted — use carefully
- Self join aliases the same table twice (`e` employee, `m` manager)

## 9. Subqueries and CTEs

### Sub Queries

- A SubQuery is also called an inner query or nested query.
- It is a query inside another query.
- The subquery runs first and gives a result.
- The main query, also called outer query, then uses that result.

#### Sub Query Types

| Type | Description | Usually used in | Returns |
| --- | --- | --- | --- |
| Single-row | Returns one value | WHERE, HAVING | One row, one column |
| Multiple-row | Returns many rows, one column | IN, ANY, ALL | Multiple rows |
| Correlated | Depends on outer query | WHERE, SELECT | Varies |
| Inline View | Inside FROM, acts like temporary table | FROM | Table-like |

#### Use Cases

- Find Employees Earning More Than the Company Average
- Find Employees Who Work in the Same City as a Specific Person, for example Aarav Sharma
- Find the Highest-Paid Employee name
- Find the Highest-Paid Employee in Each Department

#### Single-Row Sub Query

- Returns one value.
- Used with WHERE and HAVING.
- One row, one column.

```sql
SELECT AVG(salary) FROM employees;

SELECT * FROM employees
WHERE salary > 95733;

SELECT * FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

#### Multiple-Rows Sub Query

- Returns many rows from one column.
- Used with IN, ANY, ALL.

```sql
SELECT department FROM employees WHERE city = 'Mumbai';

SELECT * FROM employees
WHERE department IN ('Management', 'Human Resources', 'Sales');

SELECT * FROM employees
WHERE department IN (
    SELECT department
    FROM employees
    WHERE city = 'Mumbai'
);
```

#### Correlated Sub Query

- Depends on outer query.
- Used with WHERE and SELECT.
- Result varies.

```sql
SELECT DISTINCT department FROM employees;

SELECT MAX(salary) AS MAX_SALARY
FROM employees
WHERE department = 'tech';

SELECT * FROM employees
WHERE salary = 120000;

SELECT emp_id, fname, lname, department, salary
FROM employees e1
WHERE salary = (
    SELECT MAX(salary)
    FROM employees e2
    WHERE e2.department = e1.department
);

SELECT * FROM employees
WHERE salary IN (
    SELECT MAX(salary)
    FROM employees
    GROUP BY department
);
```

#### Inline View Sub Query

- Inside FROM.
- Acts like a temporary table.
- Table-like.

```sql
SELECT department, AVG(salary) AS avg
FROM employees
GROUP BY department;

SELECT department, avg
FROM (
   SELECT department, AVG(salary) AS avg
   FROM employees
   GROUP BY department
) AS dept_avg
WHERE avg > 90000;
```

| Question | Answer |
| --- | --- |
| Subquery vs JOIN? | Subquery nests logic inside another query; JOIN combines tables — often interchangeable, optimizer may treat similarly |
| Single-row subquery use? | Returns one value — used with `=`, `>`, `<` in WHERE/HAVING |
| Correlated subquery? | Inner query references outer query — runs per outer row; can be slower than JOIN |
| IN vs EXISTS? | `IN` checks value in a list; `EXISTS` checks if subquery returns any row — often faster for large sets |
| What is an inline view? | Subquery in `FROM` clause acting as a temporary named result set |
| CTE (`WITH`) advantage? | Named temporary result — improves readability; can be referenced multiple times; supports recursion |

**Must-know points:**
- Subquery in `WHERE` runs first (conceptually) to produce a value or list for the outer query
- **Correlated** subqueries depend on outer row — evaluate once per outer row
- CTEs with `WITH ... AS (...)` make complex queries readable and enable **recursive** hierarchies
- `IN (subquery)` fails if subquery returns NULLs unexpectedly — consider `EXISTS`
- Inline views in `FROM` must have an alias

## 10. SQL Functions

### String Functions

- CONCAT, CONCAT_WS
- SUBSTRING
- LEFT, RIGHT
- LEN
- UPPER, LOWER
- TRIM, LTRIM, RTRIM
- REPLACE
- CHARINDEX

### Date Functions

- GETDATE()
- DATEADD(interval, number, date)
- DATEDIFF(interval, start_date, end_date)
- DATEPART(interval, date)
- YEAR(date), MONTH(date), DAY(date)
- FORMAT(date, format_string)
- Format examples: MM/DD/YYYY, DD-Mon-YYYY

```sql
SELECT GETDATE();
SELECT DATEADD(day, 2, GETDATE());
SELECT DATEDIFF(day, '2025-07-31', GETDATE());

SELECT FORMAT(GETDATE(), 'yyyy-MM-dd');
SELECT FORMAT(GETDATE(), 'yyyy-MMM-dd');
SELECT FORMAT(GETDATE(), 'yyyy-MMMM-dd');
```

| Question | Answer |
| --- | --- |
| Scalar vs aggregate function? | Scalar operates per row (`UPPER`); aggregate collapses rows (`SUM`, `COUNT`) |
| LEN vs DATALENGTH? | `LEN` returns character count (excludes trailing spaces for char); `DATALENGTH` returns bytes |
| DATEADD vs DATEDIFF? | `DATEADD` adds interval to a date; `DATEDIFF` calculates difference between two dates |
| CONCAT vs CONCAT_WS? | `CONCAT` joins strings; `CONCAT_WS` uses a separator between values |
| CAST vs CONVERT? | Both convert types; `CONVERT` has SQL Server-specific style codes for dates |
| User-defined function types? | Scalar (returns single value), inline TVF (table), multi-statement TVF |

**Must-know points:**
- Aggregate functions ignore **NULL** except `COUNT(*)`
- String functions are case-sensitive based on **collation**
- `GETDATE()` returns server local time; prefer `SYSDATETIME()` for higher precision
- `FORMAT()` is convenient but slower than `CONVERT` for large datasets
- UDFs in `WHERE` can prevent index use — be cautious in performance-critical queries

## 11. Set Operators

#### UNION

- UNION is used to combine the results of two or more SELECT statements into a single result set.
- It combines data vertically by adding rows with the same structure.

Syntax:

```sql
SELECT column_list FROM table1
UNION
SELECT column_list FROM table2;
```

#### Requirements

- Each SELECT must have the same number of columns.
- Corresponding columns must have compatible data types.
- Column names are taken from the first SELECT.

Example:

Mumbai employees:

| EmployeeID | Name | Department |
| --- | --- | --- |
| 101 | Amit Sharma | Sales |
| 102 | Priya Singh | Marketing |
| 103 | Rohan Gupta | IT |

Delhi employees:

| EmployeeID | Name | Department |
| --- | --- | --- |
| 201 | Sonia Verma | Sales |
| 202 | Karan Mehta | Finance |
| 103 | Rohan Gupta | IT |

```sql
SELECT EmployeeID, Name, Department FROM MumbaiEmployees
UNION
SELECT EmployeeID, Name, Department FROM DelhiEmployees;
```

Result:

| EmployeeID | Name | Department |
| --- | --- | --- |
| 101 | Amit Sharma | Sales |
| 102 | Priya Singh | Marketing |
| 103 | Rohan Gupta | IT |
| 201 | Sonia Verma | Sales |
| 202 | Karan Mehta | Finance |

#### UNION vs UNION ALL

- UNION removes duplicates from the combined result.
- UNION ALL keeps duplicates in the combined result.

#### EXCEPT

- EXCEPT returns rows from the first query that do not exist in the second query.

```sql
SELECT EmployeeID, Name, Department FROM MumbaiEmployees
EXCEPT
SELECT EmployeeID, Name, Department FROM DelhiEmployees;
```

| Question | Answer |
| --- | --- |
| UNION vs UNION ALL? | UNION removes duplicates; UNION ALL keeps all rows including duplicates — faster |
| EXCEPT purpose? | Returns rows in first query not present in second (set difference) |
| INTERSECT purpose? | Returns rows common to both queries |
| Set operator requirements? | Same number of columns, compatible types, corresponding order |
| Which query supplies column names? | The **first** SELECT in the chain |
| UNION vs JOIN? | UNION stacks rows vertically (same columns); JOIN combines tables horizontally |

**Must-know points:**
- Set operators require **compatible column count and types** across all SELECTs
- Prefer **UNION ALL** when duplicates are acceptable — avoids sort/distinct overhead
- `EXCEPT` and `INTERSECT` are useful for data comparison and reconciliation
- `ORDER BY` after set operators applies to the **final combined** result
- NULLs are considered equal for duplicate removal in UNION

## 12. Views and Window Functions

### Views

A view in MS SQL Server is a virtual table that shows data from a saved query.

It does not store data. It displays data from one or more underlying tables.

#### Create a View

```sql
CREATE VIEW enrollment_details AS
SELECT
    s.student_name,
    c.course_name,
    e.enrollment_date,
    c.course_fee
FROM enrollment e
INNER JOIN students s ON e.student_id = s.student_id
INNER JOIN courses c ON e.course_id = c.course_id;
```

#### Read Data from a View

```sql
SELECT * FROM enrollment_details;
```

#### Check Existing Views

```sql
SELECT
    TABLE_SCHEMA,
    TABLE_NAME
FROM INFORMATION_SCHEMA.VIEWS;
```

#### Check Code of a View

```sql
sp_helptext 'YourViewName';
```

Example:

```sql
sp_helptext 'enrollment_details';
```

| Question | Answer |
| --- | --- |
| What is a view? | Saved SELECT query — virtual table with no stored data (unless indexed view) |
| View vs table? | View is a query definition; data lives in underlying base tables |
| ROW_NUMBER vs RANK vs DENSE_RANK? | ROW_NUMBER = unique sequential; RANK skips after ties; DENSE_RANK no gaps after ties |
| LAG vs LEAD? | LAG accesses previous row; LEAD accesses next row — useful for period-over-period |
| PARTITION BY in window functions? | Divides result into groups — function resets per partition |
| NTILE purpose? | Divides rows into N roughly equal buckets (e.g. quartiles) |

**Must-know points:**
- Views simplify complex joins and can enforce **security** (hide columns/rows)
- Window functions use `OVER (PARTITION BY ... ORDER BY ...)` — no GROUP BY collapse
- `ROW_NUMBER()` is ideal for deduplication with a CTE + `WHERE rn = 1`
- Indexed views (materialized) store data — have restrictions on definition
- `sp_helptext` shows view definition; `INFORMATION_SCHEMA.VIEWS` lists all views

## 13. Stored Procedures and Programmability

### Stored Procedures — Definition

A stored procedure is a set of SQL statements and procedural logic that can perform operations such as **INSERT**, **UPDATE**, **DELETE**, and **QUERYING** data.

| Benefit | Detail |
| --- | --- |
| Reusability | Write once, execute many times |
| Performance | Precompiled execution plan (cached) |
| Security | `GRANT EXECUTE` without exposing tables |
| Maintainability | Business logic centralized in DB layer |

### Types of Stored Procedures

| Type | Description |
| --- | --- |
| **Without parameters** | Fixed query — no inputs |
| **With INPUT parameters** | Caller passes values in |
| **With INPUT and OUTPUT parameters** | Returns values to caller via `OUTPUT` |

### Procedural Logic in T-SQL

Procedural logic means step-by-step (imperative) flow inside a stored procedure.

| Construct | Syntax | Purpose |
| --- | --- | --- |
| Variables | `DECLARE @x INT` | Store temporary values |
| Conditions | `IF ... ELSE` | Decision-making logic |
| Loops | `WHILE ...` | Repeat until condition met |
| Error handling | `TRY ... CATCH` | Handle exceptions gracefully |
| Flow control | `RETURN`, `BREAK`, `CONTINUE` | Control execution flow |

---

### Type 1 — Stored Procedure Without Parameters

```sql
CREATE OR ALTER PROCEDURE get_employees_sp
AS
BEGIN
    SELECT
        emp_id,
        fname,
        lname,
        email,
        job_title,
        department,
        salary,
        hire_date,
        city
    FROM employees;
END;
GO

EXEC get_employees_sp;
GO
```

---

### Type 2 — Stored Procedure With Input Parameters

```sql
CREATE OR ALTER PROCEDURE get_emp_by_dept_sp
    @p_department VARCHAR(100)
AS
BEGIN
    SELECT *
    FROM employees
    WHERE department = @p_department;
END;
GO

-- Named parameter
EXEC get_emp_by_dept_sp @p_department = 'Tech';
GO

-- Positional parameter
EXEC get_emp_by_dept_sp 'Tech';
GO

-- View procedure definition
EXEC sp_helptext 'get_emp_by_dept_sp';
GO

-- Modify existing procedure
ALTER PROCEDURE get_emp_by_dept_sp
    @p_department VARCHAR(100)
AS
BEGIN
    SELECT *
    FROM employees
    WHERE department = @p_department;
END;
GO
```

#### Update With Stored Procedure (Input Parameters)

```sql
CREATE OR ALTER PROCEDURE update_emp_salary
    @p_employee_id INT,
    @p_new_salary NUMERIC(10, 2)
AS
BEGIN
    UPDATE employees
    SET salary = @p_new_salary
    WHERE emp_id = @p_employee_id;
END;
GO
```

**Execute — named parameters:**

```sql
EXEC update_emp_salary
    @p_employee_id = 102,
    @p_new_salary = 125000.00;
GO
```

**Execute — positional parameters:**

```sql
EXEC update_emp_salary 102, 125000.00;
GO
```

#### Default Parameter Values

```sql
CREATE OR ALTER PROCEDURE update_emp_salary
    @p_employee_id INT = 102,
    @p_new_salary NUMERIC(10, 2) = 125000.00
AS
BEGIN
    UPDATE employees
    SET salary = @p_new_salary
    WHERE emp_id = @p_employee_id;
END;
GO

-- Uses defaults when no arguments passed
EXEC update_emp_salary;
GO

EXEC update_emp_salary 102, 125000.00;
GO
```

---

### Type 3 — Stored Procedure With Input and OUTPUT Parameters

```sql
CREATE OR ALTER PROCEDURE get_emp_dept
    @p_dept VARCHAR(100),
    @dept_avg NUMERIC(10, 2) OUTPUT
AS
BEGIN
    SELECT @dept_avg = AVG(salary)
    FROM employees
    WHERE department = @p_dept;
END;
GO

DECLARE @AvgDeptResult NUMERIC(10, 2);

EXEC get_emp_dept
    @p_dept = 'Sales',
    @dept_avg = @AvgDeptResult OUTPUT;

SELECT @AvgDeptResult AS DepartmentAverageSalary;
GO
```

---

### Procedural Logic — Safe Salary Update

**Use case:** Update salary only if the new salary is a **raise** (greater than current). Return a message about the result.

| Step | Logic |
| --- | --- |
| 1 | Get `emp_id` and `new_salary` as input |
| 2 | Check if `emp_id` exists |
| 3 | Compare `new_salary` with current — update only if higher |

```sql
CREATE OR ALTER PROCEDURE update_emp_salary_safely_sp
    @p_employee_id INT,
    @p_new_salary NUMERIC(10, 2),
    @p_message VARCHAR(200) OUTPUT
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM employees WHERE emp_id = @p_employee_id)
    BEGIN
        SET @p_message = 'ERROR: EMP ID does not exist.';
        RETURN;
    END;

    DECLARE @current_sal NUMERIC(10, 2);

    SELECT @current_sal = salary
    FROM employees
    WHERE emp_id = @p_employee_id;

    IF @p_new_salary > @current_sal
    BEGIN
        UPDATE employees
        SET salary = @p_new_salary
        WHERE emp_id = @p_employee_id;

        SET @p_message = 'Success: Salary updated.';
    END
    ELSE
    BEGIN
        SET @p_message = 'ERROR: New salary should be greater than current salary.';
    END
END;
GO
```

**Execute — named parameters:**

```sql
DECLARE @ResultMessage VARCHAR(200);

EXEC update_emp_salary_safely_sp
    @p_employee_id = 102,
    @p_new_salary = 130000.00,
    @p_message = @ResultMessage OUTPUT;

SELECT @ResultMessage AS UpdateStatus;
GO
```

**Execute — positional parameters:**

```sql
DECLARE @myresult VARCHAR(100);

EXEC update_emp_salary_safely_sp 103, 95000, @myresult OUTPUT;

SELECT @myresult;
GO
```

---

### How to Check Existing Stored Procedures

| # | Purpose | Query |
| --- | --- | --- |
| 1 | Count all (user + system) | `SELECT COUNT(*) FROM sys.procedures;` |
| 2 | Count user-defined only | `SELECT COUNT(*) FROM sys.procedures WHERE is_ms_shipped = 0;` |
| 3 | List all procedure names | `SELECT name FROM sys.procedures ORDER BY name;` |
| 4 | List with schema name | `SELECT SCHEMA_NAME(schema_id), name FROM sys.procedures;` |
| 5 | Count via INFORMATION_SCHEMA | `SELECT COUNT(*) FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_TYPE = 'PROCEDURE';` |
| 6 | List via INFORMATION_SCHEMA | `SELECT ROUTINE_NAME FROM INFORMATION_SCHEMA.ROUTINES WHERE ROUTINE_TYPE = 'PROCEDURE';` |

```sql
-- List with schema
SELECT
    SCHEMA_NAME(schema_id) AS SchemaName,
    name AS StoredProcedureName
FROM sys.procedures
ORDER BY SchemaName, StoredProcedureName;
GO
```

### Modify or Delete a Procedure

```sql
ALTER PROCEDURE sp_GetAllTechEmployees
    ...
GO

DROP PROCEDURE sp_GetAllTechEmployees;
GO
```

### Stored Procedures — Quick Reference

| Topic | Procedure / Command |
| --- | --- |
| No parameters | `get_employees_sp` |
| Input parameters | `get_emp_by_dept_sp` |
| Update salary | `update_emp_salary` |
| Output parameter (avg) | `get_emp_dept` |
| Safe update with logic | `update_emp_salary_safely_sp` |
| View definition | `EXEC sp_helptext 'procedure_name'` |
| List procedures | `sys.procedures` or `INFORMATION_SCHEMA.ROUTINES` |

| Question | Answer |
| --- | --- |
| Named vs positional EXEC? | Named = readable, order-independent; positional = shorter but order matters |
| `CREATE OR ALTER` vs `ALTER`? | `CREATE OR ALTER` creates if missing; `ALTER` fails if not exists |
| Input vs OUTPUT parameter? | Input passes in; `OUTPUT` returns value to caller variable |
| `sp_helptext`? | Shows stored procedure source definition |
| Default parameter values? | Optional — `EXEC proc` uses defaults when args omitted |

**Interview one-liner:** Stored procedures bundle reusable T-SQL with parameters, procedural logic, and `GRANT EXECUTE` security — use `OUTPUT` to return values to the caller.

---

### Triggers

Triggers are special procedures in a database that automatically execute predefined actions in response to certain events on a specified table or view.

#### Trigger Use Cases

- Audit salary changes by tracking old and new values.
- Prevent accidental removal of employees from a specific department.
- Automatically run logic after `INSERT`, `UPDATE`, or `DELETE`.

#### Basic Trigger Syntax

```sql
CREATE TRIGGER trigger_name
ON table_name
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    -- Trigger logic here
END;
```

You can also use `INSTEAD OF INSERT`, `INSTEAD OF UPDATE`, or `INSTEAD OF DELETE` when you want the trigger to run instead of the original action.

#### Audit Salary Changes

Use case: track old salary vs new salary when employee salary changes.

```sql
CREATE TABLE SalaryAudit (
    AuditID INT IDENTITY PRIMARY KEY,
    EmpID INT,
    OldSalary DECIMAL(10,2),
    NewSalary DECIMAL(10,2),
    ChangedDate DATETIME DEFAULT GETDATE()
);
```

#### Inserted and Deleted Tables

- `deleted` contains the old row values.
- `inserted` contains the new row values.
- In an `UPDATE` trigger, SQL Server keeps old values in `deleted` and new values in `inserted`.

```sql
CREATE TRIGGER trg_AuditSalaryChange
ON Employees
AFTER UPDATE
AS
BEGIN
    IF UPDATE(Salary)
    BEGIN
        INSERT INTO SalaryAudit (EmpID, OldSalary, NewSalary)
        SELECT
            d.EmpID,
            d.Salary AS OldSalary,
            i.Salary AS NewSalary
        FROM deleted d
        INNER JOIN inserted i ON d.EmpID = i.EmpID;
    END
END;
```

#### See Triggers on a Table

```sql
EXEC sp_helptrigger 'Employees';
```

#### Prevent Accidental Removal

Use case: prevent accidental removal of employees from a specific department, for example `Management`.

```sql
CREATE TRIGGER trg_PreventManagementRemoval
ON employees
INSTEAD OF DELETE
AS
BEGIN
    -- Check if employee is from management department.
    IF EXISTS (
        SELECT 1
        FROM deleted
        WHERE department = 'Management'
    )
    BEGIN
        RAISERROR('Deletion not allowed for management employees', 16, 1);
        ROLLBACK TRANSACTION;
        RETURN;
    END

    DELETE FROM employees
    WHERE emp_id IN (
        SELECT emp_id
        FROM deleted
    );
END;
```

| Question | Answer |
| --- | --- |
| Stored procedure vs ad-hoc SQL? | SP is precompiled, reusable, securable; ad-hoc is flexible but re-parsed each time |
| AFTER vs INSTEAD OF trigger? | AFTER runs after the event; INSTEAD OF replaces the event (common on views) |
| `inserted` vs `deleted` tables? | Magic tables in triggers — `inserted` has new values; `deleted` has old values |
| Scalar vs table-valued function? | Scalar returns one value; TVF returns a table usable in `FROM` |
| Input vs output parameters? | Input passes values in; output (`OUTPUT`) returns values to the caller |
| Trigger best practices? | Keep logic minimal; avoid recursion; document side effects |

**Must-know points:**
- Stored procedures support **parameters**, **transactions**, and **error handling**
- Triggers fire automatically — hidden logic can surprise developers and hurt performance
- `RAISERROR` / `THROW` in triggers can roll back the triggering statement
- `inserted`/`deleted` are only available inside trigger scope
- Prefer stored procedures for repeated business logic and granular permissions (`GRANT EXECUTE`)

## 15. Normalization and Database Design

### Normalization

Normalization is the process of organizing data in a database efficiently.

Purpose:

- Reduce data redundancy.
- Improve data integrity.
- Avoid duplicate or repeated data.
- Make updates, inserts, and deletes safer.

### First Normal Form (1NF)

Rules:

- Each column contains only atomic indivisible values.
- No arrays, lists, or sets inside a single cell.
- Each column stores values of a single data type.
- Each record or row should be unique.
- Usually uniqueness is ensured by a primary key.

Bad example:

```text
courses = "Math, Physics"
```

This violates 1NF because multiple values are stored in one column.

### Second Normal Form (2NF)

Rule:

- Table should be in 1NF.
- Every non-key column should depend on the whole primary key.
- Mainly applies when the table has a composite primary key.

Example composite key:

```sql
CREATE TABLE Enrollment (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)
);
```

Bad example:

| StudentID | Course | StudentName |
| --- | --- | --- |
| 1 | Math | Raju |
| 1 | Physics | Raju |
| 2 | Chemistry | Sham |

Problem:

- `StudentName` depends only on `StudentID`.
- It does not depend on the full key `StudentID + Course`.
- This is called partial dependency.

To follow 2NF, move student details into a separate `Students` table.

### Third Normal Form (3NF)

Rule:

- Table should be in 2NF.
- There should be no transitive dependency.
- Non-key columns should not depend on other non-key columns.

Question to check:

- Does any non-key attribute depend on another non-key attribute?

Bad example:

```text
employee(employee_id, city, zip, state)
```

Problem:

- `city` depends on `zip`.
- `state` depends on `zip`.
- `zip` depends on `employee_id`, where the employee lives.
- So the dependency becomes `employee_id -> zip -> city`.
- Also `employee_id -> zip -> state`.

This violates 3NF because `city` and `state` depend on `zip`, which is a non-key attribute.

Better design:

- Move `zip`, `city`, and `state` into a separate `zip_codes` table.
- Keep only the required key/reference in the employee table.

| Question | Answer |
| --- | --- |
| What is normalization? | Organizing tables to reduce redundancy and improve integrity |
| 1NF rule? | Atomic values only — no repeating groups or multi-value cells |
| 2NF rule? | 1NF + no partial dependency on composite key |
| 3NF rule? | 2NF + no transitive dependency (non-key → non-key) |
| When to denormalize? | Read-heavy reporting where JOIN cost outweighs redundancy risk |
| Partial vs transitive dependency? | Partial = non-key depends on part of composite PK; transitive = non-key depends on another non-key |

**Must-know points:**
- Normalization reduces **update anomalies** (insert, update, delete problems)
- 1NF = atomic columns; 2NF matters with **composite keys**; 3NF removes **transitive** deps
- BCNF/4NF/5NF exist but 3NF is the typical interview stopping point
- Over-normalization can mean too many JOINs — balance with indexing and views
- Junction tables resolve many-to-many while staying in 3NF

## 16. Indexes and Performance Tuning

### Indexes

Creating and using indexes in SQL Server is a powerful way to improve database performance.

#### Types of Indexes

| Index Type | Meaning |
| --- | --- |
| Clustered Index | Sorts and stores the actual table data based on the indexed column. A table can have only one clustered index. |
| Non-Clustered Index | Stores a separate structure with key values and pointers to the actual table rows. A table can have multiple non-clustered indexes. |
| Unique Index | Ensures that values in the indexed column are unique. |
| Composite Index | An index created on two or more columns. |
| Filtered Index | An index created on selected rows using a WHERE condition. |
| Full-Text Index | Used for searching words or phrases inside large text columns. |

#### Most Important Indexes

- Clustered Index is very important and is usually created on the Primary Key column.
- Clustered Index stores the actual table data in sorted order.
- A table can have only one clustered index.
- Non-Clustered Index is most commonly used for improving query performance.
- Non-Clustered Index is useful on columns used frequently in WHERE, JOIN, ORDER BY, and GROUP BY.
- A table can have multiple non-clustered indexes.
- Clustered Index means actual data is sorted.
- Non-Clustered Index means separate lookup structure.

#### Pros of Indexes

- Improves SELECT query performance.
- Makes searching, filtering, sorting, and joining faster.
- Helps enforce uniqueness when using unique indexes.
- Useful for large tables with frequent read operations.

#### Cons of Indexes

- Slows down INSERT, UPDATE, and DELETE operations because indexes also need to be updated.
- Takes extra disk space.
- Too many indexes can reduce overall database performance.
- Indexes need maintenance when data changes frequently.

#### Enable Query Statistics

Before running any queries, enable these options:

Purpose:

- `SET STATISTICS TIME ON` shows CPU time and total execution time for the query.
- `SET STATISTICS IO ON` shows how many page reads SQL Server performs from memory or disk.
- It helps compare query performance before and after adding an index.
- It helps identify slow queries and high I/O queries.

```sql
SET STATISTICS TIME ON;
SET STATISTICS IO ON;
GO
```

#### Clear Data Cache

`DBCC DROPCLEANBUFFERS` removes clean pages from memory, so SQL Server has to read data from disk again.

This is useful when testing query performance because cached data can make a query look faster than it really is.

```sql
DBCC DROPCLEANBUFFERS;
```

#### How to Add Index

```sql
CREATE INDEX i_name
ON employees(salary, emp_id);
```

#### How to See Index

This shows the index name, index description, and indexed columns.

```sql
EXEC sp_helpindex 'employees';
```

Example output:

| index_name | index_description | index_keys |
| --- | --- | --- |
| i_salary | nonclustered located on PRIMARY | Salary |
| PK__Employee__AD04FF1CD0990C9 | clustered, unique, primary key located on PRIMARY | EmployeeID |

#### How to Remove Index

```sql
DROP INDEX i_name ON employees;
```

| Question | Answer |
| --- | --- |
| Clustered vs non-clustered index? | Clustered sorts/stores table data (one per table); non-clustered is separate structure with pointers |
| When is clustered index created? | Usually on PRIMARY KEY by default — defines physical row order |
| Composite index column order? | Leftmost prefix rule — index helps queries filtering on leading columns first |
| Filtered index benefit? | Indexes subset of rows (`WHERE status = 'Active'`) — smaller, faster for targeted queries |
| Index trade-offs? | Faster reads; slower writes and more disk space — too many indexes hurt INSERT/UPDATE/DELETE |
| How to analyze query performance? | `SET STATISTICS IO/TIME ON`, execution plan, `sp_helpindex`, missing index DMVs |

**Must-know points:**
- A table allows **one clustered** and **many non-clustered** indexes
- Index columns used in `WHERE`, `JOIN`, `ORDER BY`, and `GROUP BY` benefit most
- Leading wildcard `LIKE '%x'` and functions on indexed columns cause **scans**
- `STATISTICS IO` shows logical reads — lower is better
- Drop unused indexes — each index must be maintained on every data change

---

<a id="interview-quick-answers"></a>

## Interview Quick Answers

### Clustered Index vs Non-Clustered Index

| Point | Clustered Index | Non-Clustered Index |
| --- | --- | --- |
| Data storage | Sorts and stores table rows physically | Separate structure with pointer to row |
| Per table | Only one allowed | Many allowed |
| Default | Usually on PRIMARY KEY | Created manually on lookup columns |
| Best for | Range scans on key, primary lookups | `WHERE`, `JOIN`, `ORDER BY` on non-key columns |

> **One-liner:** Clustered = table row order (one per table); non-clustered = extra lookup index for faster searches.

### What is the N+1 Query Problem?

| Aspect | Detail |
| --- | --- |
| Problem | 1 query for parent rows + N queries for each child's related data |
| Cause | Lazy loading or loop with query inside |
| Symptom | Hundreds of small queries instead of one |
| Fix | `JOIN`, `Include()`, or single query with projection |

> **One-liner:** N+1 is one query plus one per row — batch with JOIN or eager load to fix.

### How Do You Optimize a Stored Procedure?

| Technique | Action |
| --- | --- |
| Indexes | Add indexes on `WHERE`, `JOIN`, `ORDER BY` columns |
| Avoid `SELECT *` | Return only needed columns |
| Reduce loops | Set-based SQL over cursors where possible |
| Analyze plan | Check execution plan for scans vs seeks |

> **One-liner:** Index filter columns, avoid cursors, return only needed data, and read the execution plan.

### What is a Query Execution Plan?

| Aspect | Detail |
| --- | --- |
| Definition | Visual/text map of how SQL Server executes a query |
| Shows | Index seek vs scan, joins, estimated cost, row counts |
| How to view | `SET SHOWPLAN_ALL ON` or "Display Estimated Plan" in SSMS |
| Use | Find missing indexes, table scans, bad joins |

> **One-liner:** Execution plan reveals how SQL runs your query — look for scans, high cost, and bad estimates.

### CTE vs Temp Table

| Point | CTE | Temp Table |
| --- | --- | --- |
| Scope | Single statement (unless recursive) | Session-scoped (`#temp`) |
| Storage | In-memory or spool | `tempdb` — can have indexes |
| Reuse | Referenced multiple times in same query | Persists across batches in session |
| Best for | Readable subqueries, recursion | Large intermediate results, multiple steps |

> **One-liner:** CTE improves readability in one query; temp tables persist and support indexes for heavy work.

### Query to Find Third Highest Salary

```sql
SELECT DISTINCT salary
FROM employees e1
WHERE 3 = (
    SELECT COUNT(DISTINCT e2.salary)
    FROM employees e2
    WHERE e2.salary >= e1.salary
);
```

| Approach | Method |
| --- | --- |
| Subquery + COUNT | Count distinct salaries greater than or equal |
| `DENSE_RANK()` | `SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) rn ...) WHERE rn = 3` |
| `OFFSET/FETCH` | `ORDER BY salary DESC OFFSET 2 ROWS FETCH NEXT 1 ROW ONLY` (with DISTINCT) |

> **One-liner:** Use `DENSE_RANK()` or distinct-count subquery — `TOP 3` alone fails when salaries tie.

### Stored Procedures vs Functions

| Point | Stored Procedure | Function |
| --- | --- | --- |
| Return | Result sets, output params, status | Single scalar or table value |
| DML | Can INSERT/UPDATE/DELETE | Cannot modify data (except table-valued quirks) |
| Use in SELECT | No | Scalar/table functions yes |
| Transaction | Can contain full logic | Limited side effects |

> **One-liner:** Procedures orchestrate business logic and DML; functions compute and return values for queries.
