

show databases;

-- create a new database schema
-- must be run as root user
create database bio;

-- make 'bio' the currently active database
use bio;

-- what tables exist?
show tables;

-- counting the number of records in a table
select count(*) from gad;

-- show me everything!
select * from gad;
select * from gene;
select * from go;

-- select particular columns
select 
	association, 
    phenotype, 
    disease_class, 
    gene_symbol
from gad;

-- select particular rows AND columns
select 
	association, 
    phenotype, 
    disease_class, 
    gene_symbol
from gad
where association = 'Y';

-- select particular rows AND columns
-- also sort the data
select 
	association, 
    phenotype, 
    disease_class, 
    gene_symbol,
    pubmed_id
from gad
where association = 'Y'
order by phenotype, gene_symbol;



-- select particular rows AND columns
-- also sort the data
select 
    lower(phenotype) as phenotype, 
    gene_symbol,
    count(*) as num_pubs
from gad
where association = 'Y' 
group by phenotype, gene_symbol
having num_pubs >= 3
order by num_pubs desc;

select *
from gene
where gene_symbol = 'APOE';

select *
from go
where gene_id = 348;


