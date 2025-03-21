import React from 'react';

const ContactInfoPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
      }}
    >
      
      <br />
      <h1 style={{ textAlign: 'center' }}>
      Contact information
      </h1>
      <p>Trade name: Thesus Outdoors</p><br></br>
      <p>Phone number: 16475058679</p><br></br>
      <p>Email: support@thesusoutdoors.com</p><br></br>
      <p>Physical address: Alice & Whittles Inc. , 4773 Yonge Street, Suite 5E C/O GOOD & WELL, Toronto ON M2N 0G2, Canada</p>
     <br></br>
     <p>VAT number:</p><br></br>
     <p>Trade number:</p>

    </div>
  );
};

export default ContactInfoPage;
