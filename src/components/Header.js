import React from 'react';

// adding the text header
const Header = () => {
  // creating a styling verbal
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };
  return (
    // applying the styling verbal
    <header style={headerStyle}>
      {/* adding styling directly */}
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: '#ececec',
          textTransform: 'lowercase',
          textAlign: 'center',
        }}
      >
        todos
      </h1>
    </header>
  );
};

export default Header;
