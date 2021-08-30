import React from 'react';

const Footer = () => {
    return <footer>
        <span className='footer-stuff'>This site was created by <a href='mailto:jason.lammers@outlook.com'>Jason Lammers</a> using the Stranger's Things API</span>
        <span className='footer-stuff'>
            <img src='./img/GitHub-Mark-32px.png' alt='GitHub' height='24' width='24'/>
            <a href='https://github.com/darrian77'> view my GitHub!</a>
        </span>
        <span className='footer-stuff'>
            icons by <a href='https://www.iconfinder.com/iconsets/basic-ui-2-line'>DailyYouth</a>
        </span>
    </footer>
};

export default Footer;