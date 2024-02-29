import React from 'react';

const Footer:React.FC = () => {
  return (
    <div className='container d-md-flex py-4'>
      <div className='me-md-auto text-center text-md-start'>
        <div className='copyright'>
          © Copyright{' '}
          <strong>
            <span>GlamCart</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className='credits'>
          Designed by <a href='#'>GlamCart</a>
        </div>
      </div>
      <div className='social-links text-center text-md-end pt-3 pt-md-0'>
        <a href='https://twitter.com/PoojaPurbey1' target={"_blank"} rel={"noreferrer"} className='twitter'>
          <i className='bx bxl-twitter' />
        </a>
        <a href='https://www.facebook.com/pooja.purbey.98/' target={"_blank"} rel={"noreferrer"} className='facebook'>
          <i className='bx bxl-facebook' />
        </a>
        <a href='https://www.instagram.com/pujapurbey5/'  target={"_blank"} rel={"noreferrer"} className='instagram'>
          <i className='bx bxl-instagram' />
        </a>
        <a href='#' className='google-plus'>
          <i className='bx bxl-skype' />
        </a>
        <a href='https://www.linkedin.com/in/pujapurbey/' target={"_blank"} rel={"noreferrer"} className='linkedin'>
          <i className='bx bxl-linkedin' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
