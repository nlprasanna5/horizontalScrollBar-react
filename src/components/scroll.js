import React from 'react';

import styles from'./scroll.module.css';

const data = [
    {
        name: 'John Doe',
        role: 'Software Engineer',
        experience: '5 years',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHY6l1Yopg7QgFx14C7GcRu_5XfZLD_e6Cg&usqp=CAU',
    },
    {
        name: 'Jane Doe',
        role: 'Product Manager',
        experience: '8 years',
        image: 'https://beyondages.com/wp-content/uploads/2022/04/A-happy-single-man.jpg',
    },
    {
        name: 'Bob Smith',
        role: 'UI/UX Designer',
        experience: '3 years',
        image: 'https://www.shutterstock.com/image-photo/isolated-shot-young-handsome-male-260nw-2157606039.jpg',
    },
    {
        name: 'Bob Smith',
        role: 'UI/UX Designer',
        experience: '3 years',
        image: 'https://cdn.xxl.thumbs.canstockphoto.com/portrait-of-a-beautiful-smiling-woman-smiling-woman-with-arms-crossed-over-white-stock-image_csp20414260.jpg',
    },
    {
        name: 'Bob Smith',
        role: 'UI/UX Designer',
        experience: '3 years',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUGANJj7-s4nCF4HqSE1UZhFNyAEbU0LKVg&usqp=CAU',
    },
    {
        name: 'Bob Smith',
        role: 'UI/UX Designer',
        experience: '3 years',
        image: 'https://w7.pngwing.com/pngs/905/43/png-transparent-management-professional-sales-business-service-lawyer-company-service-people.png',
    },
    {
        name: 'Bob Smith',
        role: 'UI/UX Designer',
        experience: '3 years',
        image: 'https://img.favpng.com/12/11/15/professional-sales-businessperson-management-png-favpng-SpxcmarwNLDsvmRdC39SGriNc.jpg',
    },
];

const HorizontalScroller = () => {
    return (
        <>
        <div className={styles.mainContainer}>
             <div className={styles.content}>
                    <h2>Know your mentors</h2>
                    <p>Work with a mentor(senior data scientists from top companies)who closely looks at your progress,gives you personlized feedback and helps you fill gaps in your knowledge.</p>
            </div>

        </div>
        
            <div className={styles.container}>
               
                <div className={styles.horizontalScroller}>
                    {data.map((person, index) => (
                        <div className={styles.card} key={index}>
                            <img src={person.image} alt={person.name} />
                            <h3>{person.name}</h3>
                            <p>{person.role}</p>
                            <p>{person.experience} of experience</p>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
};

export default HorizontalScroller;
