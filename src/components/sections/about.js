import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    list-style: none;
    margin: 15px 0px 0px 0px;
    padding: 0px;
    flex-wrap: wrap;

    li {
      overflow: hidden;
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0.75rem;
      border: thin solid var(--outline-light);
      padding: 10px 15px 10px 15px;
      margin: 0.5rem;

      .skill-img {
        width: 25px;
        margin-right: 25px;
      }
      .skill-name {
        margin-top: auto;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--primary-color);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            
          </div>
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/JavaScript.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">JavaScript</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/MySQL.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">MySQL</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Java.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Java</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Python.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Python</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Azure.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Azure</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Docker.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Docker</p>
              </li>
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
