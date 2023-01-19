import React from 'react';
import "./css/Footer.css";

import { IoCallOutline } from 'react-icons/io5';
import { BsPerson } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { BsRecordFill } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='tab-relations'>
        <button className='footer-buttons'><IoCallOutline /></button>
        <button className='footer-buttons'><BsPerson /></button>
      </div>
      <div>
        <button className='footer-buttons menu'><CgMenuGridO /></button>
      </div>
      <div className='tab-relations'>
        <button className='footer-buttons'><FiSettings /></button>
        <button className='footer-record'><BsRecordFill /></button>
      </div>
    </div>
  );
};

export default Footer;