import React from 'react'

export const Header = () => (
  <header class="header">
            <div class="container">
                <div class="header__wrapper">
                    <div class="header__logo">
                        <a href="./index.html"><p>Kang Tutor</p></a>
                    </div>
                    <nav class="header__nav nav">
                        <button
                            class="header__close"
                            onclick="toggleHighlight()"
                        >
                            <svg
                                width="29"
                                height="30"
                                viewBox="0 0 29 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="25.0002"
                                    y="29"
                                    width="35"
                                    height="5"
                                    rx="2.5"
                                    transform="rotate(-135 25.0002 29)"
                                    fill="white"
                                />
                                <rect
                                    y="26"
                                    width="35"
                                    height="5"
                                    rx="2.5"
                                    transform="rotate(-45 0 26)"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="./beranda.html">Beranda</a>
                            </li>
                            <li class="nav__item">
                                <a href="./tutorial.html">Tutorial</a>
                            </li>
                            <li class="nav__item">
                                <a href="#">Pemrograman</a>
                            </li>
                            <li class="nav__item"><a href="#">Teknologi</a></li>
                        </ul>
                    </nav>
                    <button class="header__burger" onclick="toggleHighlight()">
                        <svg
                            width="35"
                            height="23"
                            viewBox="0 0 35 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="35" height="5" rx="2.5" fill="white" />
                            <rect
                                y="9"
                                width="35"
                                height="5"
                                rx="2.5"
                                fill="white"
                            />
                            <rect
                                y="18"
                                width="35"
                                height="5"
                                rx="2.5"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
)