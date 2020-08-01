import React from "react"

function Header() {
    return (
        <>
            <header>
                <div className = "header">Todo List</div>
                <div className = "info">
                    Created with
                    <img id = "react-logo" src = "/images/react.png" alt = "React Logo" />
                    React.js by Rohan Phanse
                </div>
            </header>
            <style jsx>{`
                .header {
                    font-size: 2rem;
                    font-weight: 600;
                    text-align: center;

                    color: rgb(85, 85, 85);
                    margin: 100px 0 5px 0;
                }

                .info {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    font-weight: 1.1rem;
                    color: rgb(158, 158, 158);
                    margin-bottom: 30px;
                }

                #react-logo {
                    width: 22px;
                    height: 22px;
                    margin:-0 5px;
                }
            `}</style>
        </>
    )
}

export default Header