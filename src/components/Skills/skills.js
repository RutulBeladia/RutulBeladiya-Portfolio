import React from 'react';
import './skills.css';

function Skills() {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as in DataBase Management Systems such as MySQL and NoSQL.</span>
        <div class="skills-grid">
            <div class="skill-item"><i class="fab fa-html5" title="HTML"></i></div>
            <div class="skill-item"><i class="fab fa-css3-alt" title="CSS"></i></div>
            <div class="skill-item"><i class="fab fa-js-square" title="JavaScript"></i></div>
            <div class="skill-item"><i class="fab fa-angular" title="Angular"></i></div>
            <div class="skill-item"><i class="fab fa-python" title="Python"></i></div>
            <div class="skill-item"><i class="fas fa-database" title="MySQL"></i></div>
            <div class="skill-item"><i class="fas fa-database" title="MongoDB"></i></div>
            <div class="skill-item"><i class="fab fa-git" title="Git"></i></div>
            <div class="skill-item"><i class="fab fa-github" title="GitHub"></i></div>
            <div class="skill-item"><i class="fab fa-php" title="PHP/MVC"></i></div>
            <div class="skill-item"><i class="fab fa-react" title="React.js"></i></div>
            <div class="skill-item"><i class="fab fa-node-js" title="Node.js"></i></div>
            <div class="skill-item"><i class="fas fa-microchip" title="IoT"></i></div>
            <div class="skill-item"><i class="fab fa-linux" title="Linux"></i></div>
            <div class="skill-item"><i class="fas fa-square-root-alt" title="Matlab"></i></div>
            <div class="skill-item"><i class="fas fa-cogs" title="Simulink"></i></div>
        </div>
    </section>
  )
}

export default Skills