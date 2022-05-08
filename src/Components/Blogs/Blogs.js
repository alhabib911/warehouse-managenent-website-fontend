import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='question-1'>
                <h6>Question 1:  Difference between javascript and nodejs?</h6>
                <p>Ans 1: Difference between javascript and nodejs is -
                    <div className="java-vs-node">
                        <div className="java">
                            <p>Java Script</p>
                            <p>1. Programming language</p>
                            <p>2.Used for any client - side activity for a web application</p>
                            <p>3.Spider monkey ( FireFox ), JavaScript Core (Safari ),<br /> V8 ( Google Chrome),etc.</p>
                        </div>
                        <div className="node">
                            <p>Node Js</p>
                            <p>1. Interpreter and environment for JavaScript</p>
                            <p>2. Used for accessing or performing any non- blocking <br /> operation of any operating system</p>
                            <p>3. V8 ( Google Chrome)</p>
                        </div>
                    </div>
                </p>

            </div>
            <div className="question-2">
                <h6>Question - 2: When should you use nodejs and when should you use mongodb?</h6>
                <p>Ans -2 : Whosever reads this article , if he or she be worthy , shall possess the power of Node. JS. and When need high availability of data with automatic , fast and instant data recovery then the best option is MongoDB.</p>
            </div>
            <div className="question-3">
                <h6>Question-3: Differences between sql and nosql databases?</h6>
                <p>Ans-3: sql and nosql databases Difference is -</p>
                <div className="sql-vs-nosql">
                    <div className="sql">
                        <p>SQL</p>
                        <p>1.SQL database are primarily called RDBMS or Relational database</p>
                        <p>2 .SQL database are table based databases</p>
                        <p>3.SQL database have fixed databases.</p>
                        <p>4.Vertically scalable ( scale - up with a larger server)</p>
                        <p>5.ACID ( automicity , consistency, isolation , durability) Transaction supported.</p>
                        <p>6.Joins required</p>
                        <p>7.These database are best suited for complex queries.</p>
                        <p>8.A mix of open source like postgres & MySQL, and  commercial like oracle Database.</p>
                    </div>
                    <div className="nosql">
                        <p>NOSQL</p>
                        <p>1. NoSQL database are primarily called as Non - relational or distributed database.</p>
                        <p>2. NoSQL database can be document based, key - value pairs, graph database.</p>
                        <p>3. Horizontal (Scale out across commodity servers)</p>
                        <p>4. Follows CAP ( consistency , availability, partition tolerance)</p>
                        <p>5.Joins not required</p>
                        <p>6.These database are not so good for complex queries</p>
                        <p>7.Open - source</p>
                    </div>
                </div>
            </div>
            <div className="question-4">
                <h6>Question -4: What is the purpose of jwt and how does it work</h6>
                <p>Ans- 4: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. and JWT create two token for server & client for make sure security. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
            </div>
        </div>
    );
};

export default Blogs;