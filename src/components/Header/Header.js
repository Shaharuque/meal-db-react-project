import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-end p-6 bg-teal-600'>
            <CustomLink className='text-white mr-3 font-serif font-semibold' to='/home'>Home</CustomLink>
            <CustomLink className='text-white mr-3 font-serif font-semibold' to='/about'>about</CustomLink>
        </div>
    );
};

export default Header;