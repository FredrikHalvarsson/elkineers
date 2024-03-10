import React from 'react';

export default function Page3 () {
    return (
        <div>
            <header style={{
                textAlign: 'center',
                margin: '100px 0',
                }}> 
                <h1>Welcome user!</h1>
            </header>
            <main style={{
                minHeight: '100vh'
            }}>
                <p style={{
                    marginLeft: '350px',
                    width: '60%',
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </main>
            <footer>
                <p style={{
                   textAlign: 'center',
                   margin: '100px 0',
                   backgroundColor: 'rgb(135, 135, 135)',
                   paddingTop: '8px',
                   paddingBottom: '8px',
                   position: 'relative',
                   bottom: '0',
                   width: '100%',
                }}>&copy; 2024 Elkineers. All rights reserved.</p>
            </footer>
        </div>
    )
}
