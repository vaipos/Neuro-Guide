import React from 'react';

const ScrollIcon: React.FC = () => {
  return (
    <div style={{height: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
    padding: '20px 10px' }}>
      <div>
        <a className="scroll-down mouse effect2" style={{fontSize: '20px' }}>
          <span style={{ fontWeight: 'bold' }}></span>
        </a>
        <style>
          {`
            .scroll-down.mouse {
              height: 160px;
            }

            .scroll-down.mouse span {
              position: relative;
              display: inline-block;
              width: 50px;
              height: 100px;
              border: 2px solid #fff;
              border-radius: 50px;
              top: -20px; /* Adjust the top position */
            }

            .scroll-down.mouse.effect2 span::after {
              position: absolute;
              content: "";
              top: 10px;
              left: 0;
              right: 0;
              margin: 0 auto;
              width: 3px;
              height: 30px;
              border-radius: 3px;
              background: #fff;
              animation: animateMouseScrollBar 1.5s infinite linear;
            }

            @keyframes animateMouseScrollBar {
              0% {
                height: 30px;
                top: 10px;
              }
              50% {
                height: 0;
                top: 40px;
              }
              50.01% {
                top: 10px;
              }
              100% {
                height: 30px;
              }
            }
          `}
        </style>
      </div>
      <div>
        <svg className="h-20 w-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" 
        strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 13 12 18 17 13" />
          <polyline points="7 6 12 11 17 6" />
        </svg>
      </div>
    </div>
  );
};

export default ScrollIcon;
